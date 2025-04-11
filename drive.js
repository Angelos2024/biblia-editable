// drive.js
let gapiInitialized = false;

function inicializarGapi(callback) {
  if (gapiInitialized) return callback();

  gapi.load("client:auth2", async () => {
    await gapi.client.init({
      apiKey: "", // opcional
      clientId: "87556669122-8vahjvva6kdvj3c8c5gvu09h2b1ve0p4.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive.file"
    });
    gapiInitialized = true;
    await gapi.auth2.getAuthInstance().signIn(); // por si hace falta renovar sesión
    callback();
  });
}

function guardarCambiosEnDrive(nombreArchivo, contenidoJSON) {
  if (!usuarioGoogle) {
    alert("Debes iniciar sesión con Google para guardar en Drive.");
    return;
  }

  inicializarGapi(() => {
    buscarArchivoExistente(nombreArchivo, (fileId) => {
      const metadata = {
        name: nombreArchivo,
        mimeType: "application/json"
      };

      const fileContent = new Blob([JSON.stringify(contenidoJSON, null, 2)], {
        type: "application/json"
      });

      const form = new FormData();
      form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
      form.append("file", fileContent);

      const accessToken = gapi.auth.getToken().access_token;

      const url = fileId
        ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart&fields=id`
        : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id";

      fetch(url, {
        method: fileId ? "PATCH" : "POST",
        headers: new Headers({ Authorization: "Bearer " + accessToken }),
        body: form
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Archivo guardado en Drive:", data);
          alert("✅ Cambios sincronizados en tu Google Drive.");
        })
        .catch((err) => {
          console.error("Error al guardar en Drive:", err);
          alert("❌ Error al guardar en Google Drive.");
        });
    });
  });
}

function buscarArchivoExistente(nombreArchivo, callback) {
  gapi.client.drive.files
    .list({
      q: `name='${nombreArchivo}' and trashed=false`,
      fields: "files(id, name)"
    })
    .then((response) => {
      const files = response.result.files;
      if (files && files.length > 0) {
        callback(files[0].id);
      } else {
        callback(null);
      }
    });
}
