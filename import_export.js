// import_export.js – Versión protegida con contraseña SHA-256

const HASH_PERMITIDO = "205a229d2a9f9467b1f4572b8e0c7eec6e9db2b301a3a1c5b37ddf3a76b3ab89"; // "yehoshuamaranata"

async function verificarContrasena() {
  const clave = prompt("🔐 Introduce la contraseña:");
  if (!clave) return false;

  const encoder = new TextEncoder();
  const data = encoder.encode(clave);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex === HASH_PERMITIDO;
}

async function exportarVersion() {
  if (!usuarioGoogle) {
    alert("Debes iniciar sesión con Google para exportar.");
    return;
  }

  if (!await verificarContrasena()) {
    alert("❌ Contraseña incorrecta.");
    return;
  }

  inicializarGapi(async () => {
    try {
      obtenerOCrearCarpetaBase("Basebiblia_editable", async (folderId) => {
        const archivos = await gapi.client.drive.files.list({
          q: `'${folderId}' in parents and name contains 'BibliaEditable_' and mimeType='application/json' and trashed=false`,
          fields: "files(id, name)"
        });

        if (!archivos.result.files.length) {
          alert("No hay archivos para exportar.");
          return;
        }

        const zip = new JSZip();
        for (const file of archivos.result.files) {
          const contenido = await gapi.client.drive.files.get({
            fileId: file.id,
            alt: "media"
          });
          zip.file(file.name, contenido.body);
        }

        const blob = await zip.generateAsync({ type: "blob" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "MiBibliaEditable.zip";
        a.click();
      });
    } catch (e) {
      console.error("❌ Error al exportar:", e);
      alert("❌ Ocurrió un error al exportar.");
    }
  });
}

async function importarVersion(file) {
  if (!usuarioGoogle) {
    alert("Debes iniciar sesión con Google para importar.");
    return;
  }

  if (!await verificarContrasena()) {
    alert("❌ Contraseña incorrecta.");
    return;
  }

  if (!confirm("⚠️ Esto borrará todos tus archivos actuales y los reemplazará por los del archivo. ¿Continuar?")) return;

  const zip = await JSZip.loadAsync(file);
  const archivos = Object.keys(zip.files);

  inicializarGapi(async () => {
    try {
      obtenerOCrearCarpetaBase("Basebiblia_editable", async (folderId) => {
        const existentes = await gapi.client.drive.files.list({
          q: `'${folderId}' in parents and name contains 'BibliaEditable_' and mimeType='application/json' and trashed=false`,
          fields: "files(id, name)"
        });

        for (const file of existentes.result.files) {
          await gapi.client.drive.files.delete({ fileId: file.id });
        }

        for (const nombre of archivos) {
          if (!nombre.startsWith("BibliaEditable_") || !nombre.endsWith(".json")) {
            console.warn("❌ Archivo ignorado por nombre inválido:", nombre);
            continue;
          }

          const contenido = await zip.file(nombre).async("string");

          const metadata = {
            name: nombre,
            mimeType: "application/json",
            parents: [folderId]
          };

          const blob = new Blob([contenido], { type: "application/json" });
          const form = new FormData();
          form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
          form.append("file", blob);

          await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id", {
            method: "POST",
            headers: new Headers({ Authorization: "Bearer " + accessToken }),
            body: form
          });
        }

        alert("✅ Versión importada y sincronizada con éxito.");
        location.reload();
      });
    } catch (err) {
      console.error("❌ Error al importar:", err);
      alert("❌ Falló la importación.");
    }
  });
}

// Hacer accesibles las funciones desde HTML (menú usuario)
window.verificarContrasena = verificarContrasena;
window.importarVersion = importarVersion;
window.exportarVersion = exportarVersion;
console.log("✅ import_export.js cargado correctamente");
