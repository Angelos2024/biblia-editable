// app.js

const fuentesRVR = {
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

function buscarVersiculo() {
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
  const localGlobal = localStorage.getItem(claveLocal);
  const localCap = localStorage.getItem(claveCap);

  const url = fuentesRVR[libroActual];
  if (!url) {
    alert("Libro no disponible todavía.");
    return;
  }

 // Limpiar estado anterior para evitar errores de mezcla
  textoOriginal = [];
  textoEditado = {};
  document.getElementById("resultados").innerHTML = "<p class='text-muted'>⏳ Cargando capítulo...</p>";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      textoOriginal = data;

      const nombreTexto = `BibliaEditable_${libroActual}_${capituloActual + 1}.json`;
      const nombreNotas = `BibliaEditable_${libroActual}_${capituloActual + 1}_notas.json`;

      cargarDesdeDrive(nombreTexto, (contenidoDrive) => {
        const localCap = localStorage.getItem(`${libroActual}_${capituloActual}`);

        if (contenidoDrive) {
          for (const verso in contenidoDrive) {
            const idx = parseInt(verso) - 1;
            if (textoOriginal[capituloActual] && textoOriginal[capituloActual][idx] !== undefined) {
              textoOriginal[capituloActual][idx] = contenidoDrive[verso];
            }
          }
        }

        if (localCap) {
          const override = JSON.parse(localCap);
          for (const verso in override) {
            const idx = parseInt(verso) - 1;
            if (textoOriginal[capituloActual] && textoOriginal[capituloActual][idx] !== undefined) {
              textoOriginal[capituloActual][idx] = override[verso];
            }
          }
        }

        mostrarVersiculo();

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

function reemplazoGlobal() {
  const desde = prompt("Palabra a reemplazar (sensible a mayúsculas):");
  const hasta = prompt("Nueva palabra:");

  if (!desde || !hasta) return;

  Object.keys(fuentesRVR).forEach(libro => {
    const url = fuentesRVR[libro];
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const textoModificado = data.map(capitulo =>
          capitulo.map(verso => verso.split(" ").map(pal => pal === desde ? hasta : pal).join(" "))
        );
        localStorage.setItem(`global_${libro}`, JSON.stringify(textoModificado));
      });
  });

  alert(`Reemplazo global de "${desde}" por "${hasta}" completado en todos los libros.`);
}

function restaurarVersiculo() {
  const cita = prompt("¿Qué versículo deseas restaurar? (Ej: Juan 3:16)");
  const match = cita.match(/([\wáéíóúÁÉÍÓÚñÑ]+)\s+(\d+):(\d+)/);

  if (!match) {
    alert("Formato inválido. Usa: Juan 3:16");
    return;
  }

  let libroEntrada = match[1];
  let cap = parseInt(match[2], 10) - 1;
  let verso = parseInt(match[3], 10) - 1;
  const libro = aliasLibros[libroEntrada.toLowerCase()] || libroEntrada;

  const claveCap = `${libro}_${cap}`;
  const local = localStorage.getItem(claveCap);
  if (!local) {
    alert("No hay edición guardada para ese versículo.");
    return;
  }

  const data = JSON.parse(local);
  delete data[verso + 1];
  if (Object.keys(data).length === 0) {
    localStorage.removeItem(claveCap);
  } else {
    localStorage.setItem(claveCap, JSON.stringify(data));
  }

  if (libro === libroActual && cap === capituloActual) {
    buscarVersiculo();
  }

  alert("Versículo restaurado.");
}

window.buscarVersiculo = buscarVersiculo;
window.restaurarVersiculo = restaurarVersiculo;
window.reemplazoGlobal = reemplazoGlobal;
window.guardarCambios = guardarCambios;
window.cancelarCambios = cancelarCambios;
