// drive.js - actualizado para usar Google Identity Services (GIS) con manejo de errores + lista de archivos y persistencia de sesión

let gapiInitialized = false;
let accessToken = sessionStorage.getItem("drive_token") || null;
let tokenClient = null;

function inicializarGapi(callback) {
  if (accessToken) {
    if (!gapiInitialized) {
      gapi.load('client', async () => {
        await gapi.client.init({
          apiKey: 'AIzaSyCQ5gfHt75KDNnvxUT3puDhhQTpNYWIU6A',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
        });
        gapi.client.setToken({ access_token: accessToken });
        gapiInitialized = true;
        callback();
      });
    } else {
      gapi.client.setToken({ access_token: accessToken });
      callback();
    }
    return;
  }

  if (!tokenClient) {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: '197171923877-5qp8s2b35f83nqull98v5rs9er5ho34m.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly',
      callback: (tokenResponse) => {
        if (tokenResponse.error) {
          console.error('❌ Error al obtener token:', tokenResponse);
          alert("❌ No se pudo autenticar con Google Drive. Por favor acepta los permisos.");
          return;
        }
        accessToken = tokenResponse.access_token;
        sessionStorage.setItem("drive_token", accessToken);

        gapi.load('client', async () => {
          try {
            await gapi.client.init({
              apiKey: 'AIzaSyCQ5gfHt75KDNnvxUT3puDhhQTpNYWIU6A',
              discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
            });

            gapi.client.setToken({ access_token: accessToken });
            gapiInitialized = true;
            callback();
          } catch (e) {
            console.error('❌ Error al cargar cliente de Drive:', e);
            alert("❌ No se pudo conectar con Google Drive.");
          }
        });
      }
    });
  }

  try {
    tokenClient.requestAccessToken();
  } catch (e) {
    console.error("❌ Error al solicitar token:", e);
    alert("❌ Ocurrió un problema al iniciar sesión en Google.");
  }
}

function obtenerOCrearCarpetaBase(nombreCarpeta, callback) {
  inicializarGapi(() => {
    if (!gapiInitialized || !gapi.client?.drive) {
      console.error("❌ GAPI no está listo. No se puede buscar o crear la carpeta base.");
      alert("❌ Error interno: GAPI no está inicializado correctamente.");
      callback(null);
      return;
    }

    gapi.client.drive.files.list({
      q: `name='${nombreCarpeta}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: "files(id, name)"
    }).then((response) => {
      const folders = response.result.files;
      if (folders.length > 0) {
        callback(folders[0].id); // ya existe
      } else {
        gapi.client.drive.files.create({
          resource: {
            name: nombreCarpeta,
            mimeType: "application/vnd.google-apps.folder"
          },
          fields: "id"
        }).then((res) => {
          callback(res.result.id);
        }).catch((err) => {
          console.error("❌ Error al crear carpeta base:", err);
          alert("❌ No se pudo crear la carpeta en Google Drive.");
          callback(null);
        });
      }
    }).catch((err) => {
      console.error("❌ Error al buscar carpeta base:", err);
      alert("❌ No se pudo acceder a tu Drive.");
      callback(null);
    });
  });
}


function guardarCambiosEnDrive(nombreArchivo, contenidoJSON, mostrarMensaje = true) {
  if (!usuarioGoogle) {
    if (mostrarMensaje) alert("Debes iniciar sesión con Google para guardar en Drive.");
    return;
  }

  inicializarGapi(() => {
    if (!gapiInitialized || !gapi.client?.drive) {
      console.error("❌ GAPI no está listo. Cancelando guardado.");
      if (mostrarMensaje) alert("❌ Error interno: GAPI no está listo.");
      return;
    }

    buscarArchivoExistente(nombreArchivo, (fileId) => {
      obtenerOCrearCarpetaBase("Basebiblia_editable", (folderId) => {
        const metadata = {
          name: nombreArchivo,
          mimeType: "application/json"
        };

        if (!fileId) {
          metadata.parents = [folderId];
        }

        const fileContent = new Blob([JSON.stringify(contenidoJSON, null, 2)], {
          type: "application/json"
        });

        const form = new FormData();
        form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
        form.append("file", fileContent);

        const url = fileId
          ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart&fields=id`
          : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id";

        fetch(url, {
          method: fileId ? "PATCH" : "POST",
          headers: new Headers({ Authorization: "Bearer " + accessToken }),
          body: form
        })
        .then(async (res) => {
          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`HTTP ${res.status} – ${errorText}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("✅ Archivo guardado en Drive:", data);
          if (mostrarMensaje) alert("✅ Cambios sincronizados en Google Drive.");
        })
        .catch((err) => {
          console.error("❌ Error al guardar en Drive:", err);
          if (mostrarMensaje) alert("❌ Error al guardar en Drive:\n" + err.message);
        });
      });
    });
  });
}




function buscarArchivoExistente(nombreArchivo, callback) {
  obtenerOCrearCarpetaBase("Basebiblia_editable", (folderId) => {
    if (!folderId) {
      console.warn("⚠️ No se pudo obtener la carpeta base.");
      callback(null);
      return;
    }

    if (!gapiInitialized || !gapi.client?.drive) {
      console.error("❌ GAPI no está listo. Cancelando búsqueda de archivo.");
      callback(null);
      return;
    }

    gapi.client.drive.files
      .list({
        q: `'${folderId}' in parents and name='${nombreArchivo}' and trashed=false`,
        fields: "files(id, name)"
      })
      .then((response) => {
        const files = response.result.files;
        if (files.length > 0) {
          callback(files[0].id);
        } else {
          callback(null);
        }
      })
      .catch((err) => {
        console.error("❌ Error al buscar archivo dentro de la carpeta:", err);
        alert("❌ No se pudo buscar el archivo en tu Drive.");
        callback(null);
      });
  });
}


function cargarDesdeDrive(nombreArchivo, callback) {
  if (!usuarioGoogle) {
    console.warn("Usuario no autenticado con Google, se usará solo localStorage.");
    callback(null);
    return;
  }

  inicializarGapi(() => {
    if (!gapiInitialized || !gapi.client?.drive) {
      console.error("❌ GAPI no está listo. Cancelando carga.");
      callback(null);
      return;
    }

    buscarArchivoExistente(nombreArchivo, (fileId) => {
      if (!fileId) {
        callback(null);
        return;
      }

      gapi.client.drive.files.get({
        fileId: fileId,
        alt: "media"
      }).then(response => {
        try {
          const json = JSON.parse(response.body);
          callback(json);
        } catch (e) {
          console.error("❌ Error al parsear JSON desde Drive:", e);
          callback(null);
        }
      }).catch(err => {
        console.error("❌ No se pudo obtener archivo de Drive:", err);
        callback(null);
      });
    });
  });
}

function listarArchivosBibliaEditable(callback) {
  inicializarGapi(() => {
    gapi.client.drive.files.list({
      q: "name contains 'BibliaEditable_' and mimeType='application/json' and trashed=false",
      fields: "files(id, name, modifiedTime)",
      orderBy: "modifiedTime desc"
    }).then(response => {
      const files = response.result.files;
      callback(response.result.files || []);
    }).catch(err => {
      console.error("❌ No se pudieron listar archivos:", err);
      callback([]);
    });
  });
}

function guardarNotasEnDrive(nombreArchivo, notasJSON) {
  guardarCambiosEnDrive(nombreArchivo, notasJSON);
}

function cargarNotasDesdeDrive(nombreArchivo, callback) {
  cargarDesdeDrive(nombreArchivo, callback);
}
