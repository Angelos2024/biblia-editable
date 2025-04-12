// import_export_v2.js – exportación/importación segura desde Drive (con validaciones y optimización)

async function exportarVersion() {
  if (!usuarioGoogle) {
    alert("Debes iniciar sesión con Google para exportar.");
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

  if (!confirm("⚠️ Esto borrará todos tus archivos actuales y los reemplazará por los del archivo. ¿Continuar?")) return;

  const zip = await JSZip.loadAsync(file);
  const archivos = Object.keys(zip.files);

  inicializarGapi(async () => {
    try {
      obtenerOCrearCarpetaBase("Basebiblia_editable", async (folderId) => {
        // 🧹 Borrar todos los archivos dentro de la carpeta base
        const existentes = await gapi.client.drive.files.list({
          q: `'${folderId}' in parents and name contains 'BibliaEditable_' and mimeType='application/json' and trashed=false`,
          fields: "files(id, name)"
        });

        for (const file of existentes.result.files) {
          await gapi.client.drive.files.delete({ fileId: file.id });
        }

        // 📤 Subir nuevos archivos del .zip
        for (const nombre of archivos) {
          // Validar nombre
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
        location.reload(); // puedes quitar esto si prefieres refrescar solo parte de la UI
      });
    } catch (err) {
      console.error("❌ Error al importar:", err);
      alert("❌ Falló la importación.");
    }
  });
}
