
// app.js

const fuentesRVR = {
  "Génesis": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/genesis.json",
  "Éxodo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/exodo.json",
  "Levítico": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/levitico.json",
  "Números": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/numeros.json",
  "Deuteronomio": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/deuteronomio.json",
  "Josué": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/josue.json",
  "Jueces": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/jueces.json",
  "Rut": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/rut.json",
  "1 Samuel": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_samuel.json",
  "2 Samuel": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_samuel.json",
  "1 Reyes": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_reyes.json",
  "2 Reyes": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_reyes.json",
  "1 Crónicas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_cronicas.json",
  "2 Crónicas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_cronicas.json",
  "Esdras": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/esdras.json",
  "Nehemías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/nehemias.json",
  "Ester": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/ester.json",
  "Job": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/job.json",
  "Salmos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/salmos.json",
  "Proverbios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/proverbios.json",
  "Eclesiastés": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/eclesiastes.json",
  "Cantares": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/cantares.json",
  "Isaías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/isaias.json",
  "Jeremías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/jeremias.json",
  "Lamentaciones": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/lamentaciones.json",
  "Ezequiel": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/ezequiel.json",
  "Daniel": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/daniel.json",
  "Oseas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/oseas.json",
  "Joel": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/joel.json",
  "Amós": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/amos.json",
  "Abdías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/abdias.json",
  "Jonás": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/jonas.json",
  "Miqueas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/miqueas.json",
  "Nahúm": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/nahum.json",
  "Habacuc": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/habacuc.json",
  "Sofonías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/sofonias.json",
  "Hageo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hageo.json",
  "Zacarías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/zacarias.json",
  "Malaquías": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/malaquias.json",
  "Mateo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/mateo.json",
  "Marcos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/marcos.json",
  "Lucas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/lucas.json",
  "Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/juan.json",
  "Hechos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hechos.json",
  "Romanos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/romanos.json",
  "1Corintios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_corintios.json",
  "2Corintios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_corintios.json",
  "Gálatas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/galatas.json",
  "Efesios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/efesios.json",
  "Filipenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filipenses.json",
  "Colosenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/colosenses.json",
  "1Tesalonicenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_tesalonicenses.json",
  "2Tesalonicenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_tesalonicenses.json",
  "1Timoteo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_timoteo.json",
  "2Timoteo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_timoteo.json",
  "Tito": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/tito.json",
  "Filemon": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filemon.json",
  "Hebreos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hebreos.json",
  "Santiago": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/santiago.json",
  "1Pedro": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_pedro.json",
  "2Pedro": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_pedro.json",
  "1Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_juan.json",
  "2Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_juan.json",
  "3Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/3_juan.json",
  "Judas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/judas.json",
  "Apocalipsis": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/apocalipsis.json"
};

const librosOrdenados = Object.keys(fuentesRVR).sort((a, b) => {
  const numA = a.match(/^\d/);
  const numB = b.match(/^\d/);
  if (numA && !numB) return 1;
  if (!numA && numB) return -1;
  return 0;
});

const aliasLibros = {};
librosOrdenados.forEach(libro => {
  const normalizado = libro.toLowerCase().replace(/\d/g, "").replace(/\s+/g, "");
  const abreviado = libro.replace(/[^\w]/g, "").toLowerCase();

  if (!aliasLibros[libro.toLowerCase()]) aliasLibros[libro.toLowerCase()] = libro;
  if (!aliasLibros[normalizado]) aliasLibros[normalizado] = libro;
  if (!aliasLibros[abreviado]) aliasLibros[abreviado] = libro;

  const corta = abreviado.slice(0, 3);
  if (!aliasLibros[corta]) aliasLibros[corta] = libro;
});

// Aliases personalizados seguros
Object.assign(aliasLibros, {
  // Evangelios y Hechos
  "mt": "Mateo",
  "mc": "Marcos",
  "mr": "Marcos",
  "lc": "Lucas",
  "jn": "Juan",
  "hch": "Hechos",

  // Cartas Paulinas
  "rom": "Romanos",
  "1co": "1Corintios",
  "2co": "2Corintios",
  "gal": "Gálatas",
  "ef": "Efesios",
  "fil": "Filipenses",
  "col": "Colosenses",
  "1ts": "1Tesalonicenses",
  "2ts": "2Tesalonicenses",
  "1tm": "1Timoteo",
  "2tm": "2Timoteo",
  "tit": "Tito",
  "flm": "Filemon",

  // Cartas generales
  "heb": "Hebreos",
  "stg": "Santiago",
  "1pe": "1Pedro",
  "2pe": "2Pedro",
  "1jn": "1Juan",
  "2jn": "2Juan",
  "3jn": "3Juan",
  "jud": "Judas",

  // Apocalipsis
  "apo": "Apocalipsis",
  "ap": "Apocalipsis"
});


console.log("Alias generados:", aliasLibros);

// (Resto del archivo continúa igual sin modificaciones...)



let textoOriginal = [];
let textoEditado = {};
let libroActual = "";
let capituloActual = 0;
let versiculoActual = null;

function poblarDropdowns() {
  const libroSelect = document.getElementById("libroSelect");
  const capituloSelect = document.getElementById("capituloSelect");
  if (!libroSelect || !capituloSelect) return;

  libroSelect.innerHTML = `<option value="">Libro</option>`;
  for (const libro in fuentesRVR) {
    const opt = document.createElement("option");
    opt.value = libro;
    opt.textContent = libro;
    libroSelect.appendChild(opt);
  }

  libroSelect.addEventListener("change", () => {
    const libro = libroSelect.value;
    if (!libro) return;
    fetch(fuentesRVR[libro])
      .then(r => r.json())
      .then(data => {
        capituloSelect.innerHTML = "<option value=''>Capítulo</option>";
        data.forEach((_, i) => {
          const opt = document.createElement("option");
          opt.value = i + 1;
          opt.textContent = `Capítulo ${i + 1}`;
          capituloSelect.appendChild(opt);
        });
      });
  });

  capituloSelect.addEventListener("change", () => {
    const libro = libroSelect.value;
    const capitulo = capituloSelect.value;
    if (libro && capitulo) {
      document.getElementById("searchInput").value = `${libro} ${capitulo}`;
      buscarVersiculo();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
    // 🔄 Al iniciar sesión con Google, sincronizar automáticamente el capítulo actual si existe
  if (typeof usuarioGoogle !== 'undefined' && usuarioGoogle && libroActual && textoOriginal.length > 0) {
    const nombreTexto = `BibliaEditable_${libroActual}_${capituloActual + 1}.json`;
    const nombreNotas = `BibliaEditable_${libroActual}_${capituloActual + 1}_notas.json`;

    cargarDesdeDrive(nombreTexto, (json) => {
      if (json) {
        localStorage.setItem(`${libroActual}_${capituloActual}`, JSON.stringify(json));
        buscarVersiculo(); // recargar con la versión de Drive
      }
    });

    cargarNotasDesdeDrive(nombreNotas, (notasDrive) => {
      if (notasDrive) {
        for (let clave in notasDrive) {
          localStorage.setItem(clave, notasDrive[clave]);
        }
      }
    });
  }

  poblarDropdowns();

  document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") buscarVersiculo();
  });
});


async function buscarVersiculo() {
  const entrada = document.getElementById("searchInput").value.trim();
  const match = entrada.match(/([\wáéíóúÁÉÍÓÚñÑ]+)\s+(\d+)(?::(\d+))?/);

  if (!match) {
    alert("Formato inválido. Usa: Juan 3 o Juan 3:16");
    return;
  }

  let libroEntrada = match[1];
  capituloActual = parseInt(match[2], 10) - 1;
  versiculoActual = match[3] ? parseInt(match[3], 10) - 1 : null;
  libroActual = aliasLibros[libroEntrada.toLowerCase()] || libroEntrada;

  const claveLocal = `global_${libroActual}`;
  const claveCap = `${libroActual}_${capituloActual}`;
  const url = fuentesRVR[libroActual];

  if (!url) {
    alert("Libro no disponible todavía.");
    return;
  }

  textoOriginal = [];
  textoEditado = {};
  document.getElementById("resultados").innerHTML = "<p class='text-muted'>⏳ Cargando capítulo...</p>";

  try {
    // 1. Descargar texto original del libro
    const res = await fetch(url);
    const data = await res.json();
    textoOriginal = data;

    // 2. Intentar cargar reemplazo global desde Drive
    const nombreGlobalDrive = `BibliaEditable_${libroActual}_global.json`;
    let reemplazoGlobal = null;

    if (usuarioGoogle) {
      reemplazoGlobal = await new Promise(resolve => {
        cargarDesdeDrive(nombreGlobalDrive, (json) => resolve(json));
      });
    }

    // 3. Aplicar reemplazo global si existe
   if (reemplazoGlobal) {
  textoOriginal = reemplazoGlobal;
  console.log("✅ Se aplicó reemplazo global desde Drive");
} else {
  const localGlobal = localStorage.getItem(claveLocal);
  if (localGlobal) {
    try {
      const reemplazo = JSON.parse(localGlobal);
      textoOriginal = reemplazo;
      console.log("✅ Se aplicó reemplazo global local");
    } catch (e) {
      console.warn("❌ Error al parsear global local:", e);
    }
  }
}
 else {
    
      if (localGlobal) {
        try {
          const reemplazo = JSON.parse(localGlobal);
          if (reemplazo.length === textoOriginal.length) {
            textoOriginal = reemplazo;
          }
        } catch (e) {
          console.warn("❌ Error al parsear global local:", e);
        }
      }
    }

    // 4. Cargar cambios por capítulo desde Drive (individuales)
    const nombreTexto = `BibliaEditable_${libroActual}_${capituloActual + 1}.json`;
    const contenidoCapituloDrive = await new Promise(resolve => {
      cargarDesdeDrive(nombreTexto, resolve);
    });

    if (contenidoCapituloDrive) {
      for (const verso in contenidoCapituloDrive) {
        const idx = parseInt(verso) - 1;
        if (textoOriginal[capituloActual] && textoOriginal[capituloActual][idx] !== undefined) {
          textoOriginal[capituloActual][idx] = contenidoCapituloDrive[verso];
        }
      }
    }

    // 5. Cargar cambios locales por capítulo
    const overrideLocal = localStorage.getItem(claveCap);
    if (overrideLocal) {
      const override = JSON.parse(overrideLocal);
      for (const verso in override) {
        const idx = parseInt(verso) - 1;
        if (textoOriginal[capituloActual] && textoOriginal[capituloActual][idx] !== undefined) {
          textoOriginal[capituloActual][idx] = override[verso];
        }
      }
    }

    mostrarVersiculo();

  } catch (e) {
    console.error("❌ Error al cargar el capítulo:", e);
    document.getElementById("resultados").innerHTML = "<p>❌ Error al cargar capítulo</p>";
  }
}



function mostrarVersiculo() {
  const output = document.getElementById("resultados");
  if (!output) return;

  output.innerHTML = "";
  const capitulo = textoOriginal[capituloActual];
  if (!capitulo) {
    output.innerHTML = "<p>Capítulo no encontrado.</p>";
    return;
  }

  if (versiculoActual !== null) {
    const verso = capitulo[versiculoActual];
    if (!verso) {
      output.innerHTML = "<p>Versículo no encontrado.</p>";
      return;
    }
    renderizarVersiculo(verso, versiculoActual + 1);
  } else {
    capitulo.forEach((texto, idx) => renderizarVersiculo(texto, idx + 1));
  }

  // 🔁 Cargar notas desde Drive si hay sesión y estamos en un capítulo válido
  if (usuarioGoogle && libroActual && typeof capituloActual !== "undefined") {
    const nombreNotas = `BibliaEditable_${libroActual}_${capituloActual + 1}_notas.json`;
    cargarNotasDesdeDrive(nombreNotas, (notasDrive) => {
      if (notasDrive) {
        for (let clave in notasDrive) {
          localStorage.setItem(clave, notasDrive[clave]);
        }
        if (typeof aplicarNotasDesdeLocal === "function") {
          aplicarNotasDesdeLocal();
        }
      }
    });
  } else {
    // Si no hay sesión, igual aplicamos notas locales si existen
    if (typeof aplicarNotasDesdeLocal === "function") {
      aplicarNotasDesdeLocal();
    }
  }
}


function renderizarVersiculo(texto, numero) {
  const contenedor = document.getElementById("resultados");
  const p = document.createElement("p");
  p.innerHTML = `<b>${numero}</b> ` + texto.split(" ").map(palabra => `<span class="verse-word" onclick="editarPalabra(this)">${palabra}</span>`).join(" ");
  contenedor.appendChild(p);
}

function editarPalabra(span) {
  if (span.contentEditable === "true") return;
  span.contentEditable = "true";
  span.classList.add("editing");
  span.focus();

  span.addEventListener("blur", () => {
    span.contentEditable = "false";
    span.classList.remove("editing");
    mostrarBarraGuardar();
  }, { once: true });
}

function mostrarBarraGuardar() {
  document.getElementById("saveCancelBar").style.display = "flex";
}

function guardarCambios() {
  const versos = document.querySelectorAll("#resultados p");
  versos.forEach(p => {
    const numero = p.querySelector("b").innerText;
    const idx = parseInt(numero) - 1;
    const palabras = Array.from(p.querySelectorAll(".verse-word")).map(span => span.innerText.trim());
    const textoFinal = palabras.join(" ");
    if (!textoEditado[capituloActual]) textoEditado[capituloActual] = {};
    textoEditado[capituloActual][numero] = textoFinal;
    textoOriginal[capituloActual][idx] = textoFinal;
  });

  const clave = `${libroActual}_${capituloActual}`;
  localStorage.setItem(clave, JSON.stringify(textoEditado[capituloActual]));
  document.getElementById("saveCancelBar").style.display = "none";
  alert("Cambios guardados localmente");

  if (usuarioGoogle) {
  const capKey = `${libroActual}_${capituloActual}`;
  const nombreTexto = `BibliaEditable_${libroActual}_${capituloActual + 1}.json`;
  const nombreNotas = `BibliaEditable_${libroActual}_${capituloActual + 1}_notas.json`;

  guardarCambiosEnDrive(nombreTexto, textoEditado[capituloActual]);

  // Recoger solo notas del capítulo actual
  const notasCap = {};
  for (let clave in localStorage) {
    if (clave.startsWith(`nota_${libroActual}_${capituloActual}_`)) {
      notasCap[clave] = localStorage.getItem(clave);
    }
  }

  guardarNotasEnDrive(nombreNotas, notasCap);
}

}

function cancelarCambios() {
  textoEditado[capituloActual] = {};
  document.getElementById("saveCancelBar").style.display = "none";
  buscarVersiculo();
}

async function reemplazoGlobal() {
  const desde = prompt("Palabra a reemplazar (sensible a mayúsculas):");
  const hasta = prompt("Nueva palabra:");
  if (!desde || !hasta) return;

  // 🚫 Bloquear UI
  const modal = document.getElementById("modalGlobalizando");
  modal.style.display = "flex";

  // 🔕 Evitar múltiples alertas
  window.mostrarAlertaDrive = false;

  const librosModificados = [];

  for (const libro of Object.keys(fuentesRVR)) {
    try {
      const res = await fetch(fuentesRVR[libro]);
      const data = await res.json();

      const textoModificado = data.map(capitulo =>
        capitulo.map(verso =>
          verso.replace(new RegExp(`\\b${desde}\\b`, 'g'), hasta)
        )
      );

      // Guardar global en localStorage
      localStorage.setItem(`global_${libro}`, JSON.stringify(textoModificado));
      librosModificados.push({ libro, texto: textoModificado });
    } catch (e) {
      console.warn(`❌ Falló ${libro}:`, e);
    }
  }

  // ⬆️ Guardar en Drive si el usuario está autenticado
  if (usuarioGoogle) {
    for (const { libro, texto } of librosModificados) {
      const nombreTexto = `BibliaEditable_${libro}_global.json`;
      guardarCambiosEnDrive(nombreTexto, texto);
      // no necesitas await aquí si guardarCambiosEnDrive no devuelve promesa
    }
  }

  // ✅ Restaurar alertas y desbloquear UI
  window.mostrarAlertaDrive = true;
  modal.style.display = "none";

  alert(`✅ Reemplazo global completado: "${desde}" → "${hasta}" en ${librosModificados.length} libros.\nCambios guardados en Google Drive.`);
}



function restaurarVersiculo() {
  const cita = prompt("¿Qué versículo deseas restaurar? (Ej: Juan 3:16)");
  if (!cita) return;

  const match = cita.match(/([\wáéíóúÁÉÍÓÚñÑ]+)\s+(\d+):(\d+)/);
  if (!match) {
    alert("Formato inválido. Usa: Juan 3:16");
    return;
  }

  const libroEntrada = match[1];
  const cap = parseInt(match[2], 10) - 1;
  const verso = parseInt(match[3], 10) - 1;
  const libro = aliasLibros[libroEntrada.toLowerCase()] || libroEntrada;
  const claveCap = `${libro}_${cap}`;
  const url = fuentesRVR[libro];

  if (!url) {
    alert("No se encontró la fuente original para ese libro.");
    return;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data[cap] || !data[cap][verso]) {
        alert("Versículo no encontrado en la fuente original.");
        return;
      }

      const textoOriginalVerso = data[cap][verso];

      // 🧹 1. Eliminar edición local de ese verso
      const local = localStorage.getItem(claveCap);
      const edits = local ? JSON.parse(local) : {};
      delete edits[verso + 1];
      if (Object.keys(edits).length === 0) {
        localStorage.removeItem(claveCap);
      } else {
        localStorage.setItem(claveCap, JSON.stringify(edits));
      }

      // 🔁 2. Si hay sesión, actualiza ese verso en Drive (no borra todo el archivo)
      if (usuarioGoogle) {
        const nombreTexto = `BibliaEditable_${libro}_${cap + 1}.json`;
        cargarDesdeDrive(nombreTexto, (contenidoDrive) => {
          if (contenidoDrive) {
            delete contenidoDrive[verso + 1]; // elimina solo ese verso

            // Si queda vacío, borra el archivo completo (opcional)
            if (Object.keys(contenidoDrive).length === 0) {
              buscarArchivoExistente(nombreTexto, (fileId) => {
                if (fileId) {
                  gapi.client.drive.files.delete({ fileId }).then(() => {
                    console.log("✅ Se eliminó archivo vacío:", nombreTexto);
                  }).catch(err => {
                    console.warn("❌ No se pudo eliminar:", err);
                  });
                }
              });
            } else {
              guardarCambiosEnDrive(nombreTexto, contenidoDrive);
            }
          }
        });
      }

      // 🖥️ 3. Si el capítulo está visible, actualizar solo ese versículo
      if (libro === libroActual && cap === capituloActual) {
        textoOriginal[cap][verso] = textoOriginalVerso;
       localStorage.removeItem(`${libro}_${cap}`);
  mostrarVersiculo();
      }

      alert("✅ Versículo restaurado correctamente.");
    })
    .catch(err => {
      console.error("❌ Error al restaurar versículo:", err);
      alert("❌ Ocurrió un error al restaurar el versículo.");
    });
}



window.buscarVersiculo = buscarVersiculo;
window.restaurarVersiculo = restaurarVersiculo;
window.reemplazoGlobal = reemplazoGlobal;
window.guardarCambios = guardarCambios;
window.cancelarCambios = cancelarCambios;
