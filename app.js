// app.js

const fuentesRVR = {
  "Mateo": "...",
  "Marcos": "...",
  "Lucas": "...",
  "Juan": "...",
  // ...
  "Apocalipsis": "..."
};

// Normalizador para acentos y espacios
function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();
}

const aliasLibros = Object.fromEntries(
  Object.keys(fuentesRVR).flatMap(libro => {
    const base = normalizarTexto(libro.replace(/\d/g, ""));
    const abreviado = libro.replace(/[^\w]/g, "").toLowerCase();
    return [
      [normalizarTexto(libro), libro],
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
  poblarDropdowns();
  document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") buscarVersiculo();
  });
});

function buscarVersiculo() {
  const entrada = document.getElementById("searchInput").value.trim();
  const match = entrada.match(/([\wáéíóúÁÉÍÓÚñÑ]+)\s*(\d+)(?::(\d+))?/);

  if (!match) {
    alert("Formato inválido. Usa: Juan 3 o Juan 3:16");
    return;
  }

  let libroEntrada = normalizarTexto(match[1]);
  capituloActual = parseInt(match[2], 10) - 1;
  versiculoActual = match[3] ? parseInt(match[3], 10) - 1 : null;
  libroActual = aliasLibros[libroEntrada] || match[1];

  const claveLocal = `global_${libroActual}`;
  const claveCap = `${libroActual}_${capituloActual}`;
  const localGlobal = localStorage.getItem(claveLocal);
  const localCap = localStorage.getItem(claveCap);

  const url = fuentesRVR[libroActual];
  if (!url) return alert("Libro no disponible todavía.");

  fetch(url)
    .then(res => res.json())
    .then(data => {
      textoOriginal = data;

      if (localGlobal) {
        textoOriginal = JSON.parse(localGlobal);
      }

      if (localCap) {
        const override = JSON.parse(localCap);
        for (const verso in override) {
          const idx = parseInt(verso) - 1;
          if (textoOriginal[capituloActual]) {
            textoOriginal[capituloActual][idx] = override[verso];
          }
        }
      }

      mostrarVersiculo();
    })
    .catch(err => console.error("Error al cargar JSON:", err));
}

function mostrarVersiculo() {
  const output = document.getElementById("resultados");
  if (!output) return;

  output.innerHTML = "";
  const capitulo = textoOriginal[capituloActual];
  if (!capitulo) return output.innerHTML = "<p>Capítulo no encontrado.</p>";

  if (versiculoActual !== null) {
    const verso = capitulo[versiculoActual];
    if (!verso) return output.innerHTML = "<p>Versículo no encontrado.</p>";
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
  if (!textoEditado[capituloActual]) textoEditado[capituloActual] = {};

  versos.forEach(p => {
    const numero = p.querySelector("b").innerText;
    const idx = parseInt(numero) - 1;
    const palabras = Array.from(p.querySelectorAll(".verse-word")).map(span => span.innerText.trim());
    const textoFinal = palabras.join(" ");
    textoEditado[capituloActual][numero] = textoFinal;
    if (textoOriginal[capituloActual]) textoOriginal[capituloActual][idx] = textoFinal;
  });

  const clave = `${libroActual}_${capituloActual}`;
  localStorage.setItem(clave, JSON.stringify(textoEditado[capituloActual]));
  document.getElementById("saveCancelBar").style.display = "none";
  alert("Cambios guardados localmente");
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

  alert(`Reemplazo global de "${desde}" por "${hasta}" completado.`);
}

function restaurarVersiculo() {
  const cita = prompt("¿Qué versículo deseas restaurar? (Ej: Juan 3:16)");
  const match = cita.match(/([\wáéíóúÁÉÍÓÚñÑ]+)\s+(\d+):(\d+)/);
  if (!match) return alert("Formato inválido. Usa: Juan 3:16");

  const libroEntrada = normalizarTexto(match[1]);
  const libro = aliasLibros[libroEntrada] || match[1];
  const cap = parseInt(match[2], 10) - 1;
  const verso = parseInt(match[3], 10) - 1;

  const clave = `${libro}_${cap}`;
  const local = localStorage.getItem(clave);
  if (!local) return alert("No hay edición guardada para ese versículo.");

  const data = JSON.parse(local);
  delete data[verso + 1];
  if (Object.keys(data).length === 0) {
    localStorage.removeItem(clave);
  } else {
    localStorage.setItem(clave, JSON.stringify(data));
  }

  if (libro === libroActual && cap === capituloActual) buscarVersiculo();
  alert("Versículo restaurado.");
}
