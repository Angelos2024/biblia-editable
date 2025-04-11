
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

for (const libro of librosOrdenados) {
  const base = libro.replace(/\d/g, "").toLowerCase().replace(/\s+/g, "");
  const abreviado = libro.replace(/[^\w]/g, "").toLowerCase();
  const claves = [
    libro.toLowerCase(),
    base,
    abreviado,
    abreviado.slice(0, 3)
  ];
  for (const clave of claves) {
    if (!(clave in aliasLibros)) {
      aliasLibros[clave] = libro;
    }
  }
}

let textoOriginal = [];
let textoEditado = {};
let libroActual = "";
let capituloActual = 0;
let versiculoActual = null;

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

  if (fuentesRVR[libroEntrada]) {
    libroActual = libroEntrada;
  } else {
    libroActual = aliasLibros[libroEntrada.toLowerCase()] || libroEntrada;
  }

  alert(`📘 Cargando: ${libroActual} ${capituloActual + 1}`);

  // Aquí seguiría el resto de la función ya existente (no lo volvemos a copiar para brevedad)
}
