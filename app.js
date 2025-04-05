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

const aliasLibros = Object.fromEntries(
  Object.keys(fuentesRVR).flatMap(libro => {
    const base = libro.replace(/\d/g, "").toLowerCase().replace(/\s+/g, "");
    const abreviado = libro.replace(/[^\w]/g, "").toLowerCase();
    return [
      [libro.toLowerCase(), libro],
      [base, libro],
      [abreviado, libro],
      [abreviado.slice(0, 3), libro]
    ];
  })
);

let textoOriginal = [];
let textoEditado = {};
let libroActual = "";
let capituloActual = 0;
let versiculoActual = null;

function poblarDropdowns() {
  const libroSelect = document.getElementById("libroSelect");
  if (!libroSelect) return;

  libroSelect.innerHTML = `<option value="">Selecciona un libro</option>`;
  for (const libro in fuentesRVR) {
    const opt = document.createElement("option");
    opt.value = libro;
    opt.textContent = libro;
    libroSelect.appendChild(opt);
  }
}

document.addEventListener("DOMContentLoaded", poblarDropdowns);

document.addEventListener("DOMContentLoaded", () => {
  const botonGlobal = document.createElement("button");
  botonGlobal.className = "btn btn-warning w-100 mb-2";
  botonGlobal.textContent = "Reemplazo global";
  botonGlobal.onclick = reemplazoGlobal;
  document.querySelector(".container").insertBefore(botonGlobal, document.getElementById("resultados"));
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
  const localData = localStorage.getItem(claveLocal);

  if (localData) {
    textoOriginal = JSON.parse(localData);
    mostrarVersiculo();
    return;
  }

  const url = fuentesRVR[libroActual];
  if (!url) {
    alert("Libro no disponible todavía.");
    return;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      textoOriginal = data;
      mostrarVersiculo();
    })
    .catch(err => console.error("Error al cargar JSON:", err));
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
    renderizarVersiculo(verso);
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
    const palabras = Array.from(p.querySelectorAll(".verse-word")).map(span => span.innerText.trim());
    if (!textoEditado[capituloActual]) textoEditado[capituloActual] = {};
    textoEditado[capituloActual][numero] = palabras.join(" ");
  });

  const clave = `${libroActual}_${capituloActual}`;
  localStorage.setItem(clave, JSON.stringify(textoEditado[capituloActual]));
  document.getElementById("saveCancelBar").style.display = "none";
  alert("Cambios guardados localmente");
}

function cancelarCambios() {
  textoEditado[capituloActual] = {};
  document.getElementById("saveCancelBar").style.display = "none";
  mostrarVersiculo();
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

// Buscar con tecla Enter
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      buscarVersiculo();
    }
  });
});

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
    buscarVersiculo(); // recargar la vista si es el capítulo actual
  }

  alert("Versículo restaurado.");
}
