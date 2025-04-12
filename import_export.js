// import_export.js – funciones para importar y exportar versiones completas desde Google Drive

async function exportarVersion() {
  if (!usuarioGoogle) {
    alert("Debes iniciar sesión con Google para exportar.");
    return;
  }

  inicializarGapi(async () => {
    try {
      const archivos = await gapi.client.drive.files.list({
        q: "name contains 'BibliaEditable_' and mimeType='application/json' and trashed=false",
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
      const existentes = await gapi.client.drive.files.list({
        q: "name contains 'BibliaEditable_' and mimeType='application/json' and trashed=false",
        fields: "files(id, name)"
      });

      // Borrar todos los existentes
      for (const file of existentes.result.files) {
        await gapi.client.drive.files.delete({ fileId: file.id });
      }

      // Subir los nuevos
      obtenerOCrearCarpetaBase("Basebiblia_editable", async (folderId) => {
        for (const nombre of archivos) {
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
