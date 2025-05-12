
// app.js
let datosInterlineales = null;


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

function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // separa letras y tildes
    .replace(/[\u0300-\u036f]/g, "") // elimina los signos diacríticos
    .toLowerCase()
    .replace(/\s+/g, "") // quita espacios
    .replace(/\./g, ""); // quita puntos si alguien pone "1. samuel"
}


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

// 📚 Códigos numéricos de libros para interlineal
const codigosLibros = {
  "Génesis": "01",
  "Éxodo": "02",
  "Levítico": "03",
  "Números": "04",
  "Deuteronomio": "05",
  "Josué": "06",
  "Jueces": "07",
  "Rut": "08",
  "1 Samuel": "09",
  "2 Samuel": "10",
  "1 Reyes": "11",
  "2 Reyes": "12",
  "1 Crónicas": "13",
  "2 Crónicas": "14",
  "Esdras": "15",
  "Nehemías": "16",
  "Ester": "17",
  "Job": "18",
  "Salmos": "19",
  "Proverbios": "20",
  "Eclesiastés": "21",
  "Cantares": "22",
  "Isaías": "23",
  "Jeremías": "24",
  "Lamentaciones": "25",
  "Ezequiel": "26",
  "Daniel": "27",
  "Oseas": "28",
  "Joel": "29",
  "Amós": "30",
  "Abdías": "31",
  "Jonás": "32",
  "Miqueas": "33",
  "Nahúm": "34",
  "Habacuc": "35",
  "Sofonías": "36",
  "Hageo": "37",
  "Zacarías": "38",
  "Malaquías": "39"
};

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

  // Detectar si la entrada es tipo versículo (ej: Juan 3:16)
  const match = entrada.match(/^([\wáéíóúÁÉÍÓÚñÑ\.]+)\s+(\d+)(?::(\d+))?$/);

  if (match) {
    let libroEntrada = match[1];
    capituloActual = parseInt(match[2], 10) - 1;
    versiculoActual = match[3] ? parseInt(match[3], 10) - 1 : null;

    const normalizado = normalizarTexto(libroEntrada);
    libroActual = aliasLibros[normalizado] || libroEntrada;

    const claveLocal = `global_${libroActual}`;
    const claveCap = `${libroActual}_${capituloActual}`;
    const localGlobal = localStorage.getItem(claveLocal);
    const localCap = localStorage.getItem(claveCap);

    const url = fuentesRVR[libroActual];
    if (!url) {
      alert("Libro no disponible todavía.");
      return;
    }

    textoOriginal = [];
    textoEditado = {};
    document.getElementById("resultados").innerHTML = "<p class='text-muted'>⏳ Cargando capítulo...</p>";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        textoOriginal = data;

        const datosGlobales = localStorage.getItem(`global_${libroActual}`);
        if (datosGlobales) {
          try {
            const reemplazo = JSON.parse(datosGlobales);
            if (reemplazo?.length === textoOriginal.length) {
              textoOriginal = reemplazo;
            }
          } catch (e) {
            console.warn("❌ Error al parsear reemplazo global:", e);
          }
        }

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

          // 🔠 Cargar interlineal dinámicamente si el libro tiene soporte
          const libroCodigo = codigosLibros[libroActual];
          if (libroCodigo) {
            const archivo = `interlineal_${normalizarTexto(libroActual)}.json`;
            const urlInter = `https://raw.githubusercontent.com/Angelos2024/biblia-editable/refs/heads/main/dist/interlineal/${archivo}`;

            fetch(urlInter)
              .then(r => r.json())
              .then(json => {
                const capituloEsperado = String(capituloActual + 1).padStart(2, "0");

datosInterlineales = Object.fromEntries(
  json
    .filter(item => {
      const id = item.id || "";
      const libroId = id.slice(0, 2);     // "01"
      const capId   = id.slice(2, 4);     // "01"
      return libroId === libroCodigo && capId === capituloEsperado;
    })
    .map(item => [item.id, item.verse])
);


                console.log(`📚 Interlineal cargado para ${libroActual} capítulo ${capituloEsperado}:`, Object.keys(datosInterlineales));
                mostrarVersiculo();
              })
              .catch(() => {
                datosInterlineales = null;
                mostrarVersiculo();
              });
          } else {
            datosInterlineales = null;
            mostrarVersiculo();
          }
        });
      });
  } else {
    // Si no coincide con formato versículo, hacer búsqueda global
    buscarPalabraGlobal(entrada);
  }
}


function normalizarTextoPlano(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function buscarPalabraGlobal(palabraEntrada) {
  const palabra = palabraEntrada?.trim();
  if (!palabra || palabra.length < 2) {
    alert("Ingresa una palabra válida (mínimo 2 letras).");
    return;
  }

  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<p class="text-muted">🔍 Buscando la palabra "${palabra}" en toda la Biblia...</p>`;

  const normalizadaBusqueda = normalizarTextoPlano(palabra);
  const libros = Object.keys(fuentesRVR);
  let totalProcesados = 0;
  let resultados = [];

  libros.forEach(libro => {
    fetch(fuentesRVR[libro])
      .then(res => res.json())
      .then(data => {
        data.forEach((capitulo, capIndex) => {
          capitulo.forEach((verso, versIndex) => {
            const textoPlano = normalizarTextoPlano(verso);
            if (textoPlano.includes(normalizadaBusqueda)) {
              resultados.push({
                libro,
                cap: capIndex + 1,
                verso: versIndex + 1,
                texto: verso
              });
            }
          });
        });
      })
      .finally(() => {
        totalProcesados++;
        if (totalProcesados === libros.length) {
          mostrarResultadosBusqueda(resultados, palabra);
        }
      });
  });
}

let resultadosBusquedaGlobal = [];
let paginaActual = 1;
const resultadosPorPagina = 7;

function mostrarResultadosBusqueda(lista, palabra) {
  resultadosBusquedaGlobal = lista;
  paginaActual = 1;
  renderizarPaginaResultados(palabra);
}

function renderizarPaginaResultados(palabra) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<h5>🔎 Resultados de búsqueda para: "${palabra}"</h5>`;

  if (resultadosBusquedaGlobal.length === 0) {
    resultadosDiv.innerHTML += `<p>No se encontró la palabra en ningún versículo.</p>`;
    return;
  }

  const inicio = (paginaActual - 1) * resultadosPorPagina;
  const fin = inicio + resultadosPorPagina;
  const pagina = resultadosBusquedaGlobal.slice(inicio, fin);

  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  pagina.forEach(res => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <div>
        <strong>${res.libro} ${res.cap}:${res.verso}</strong> — ${res.texto}
      </div>
      <div style="margin-top: 5px;">
        <button class="btn btn-sm btn-primary" onclick="irAVersiculo('${res.libro}', ${res.cap}, ${res.verso})">Ir al versículo</button>
        <button class="btn btn-sm btn-outline-secondary" onclick="irACapitulo('${res.libro}', ${res.cap})">Ver capítulo completo</button>
      </div>
    `;
    ul.appendChild(li);
  });

  resultadosDiv.appendChild(ul);

  // Paginación
  const paginacion = document.createElement("div");
  paginacion.style.marginTop = "15px";
  paginacion.style.textAlign = "center";

  const totalPaginas = Math.ceil(resultadosBusquedaGlobal.length / resultadosPorPagina);

  if (paginaActual > 1) {
    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn-sm btn-secondary me-2";
    btnPrev.innerText = "⏮ Anterior";
    btnPrev.onclick = () => {
      paginaActual--;
      renderizarPaginaResultados(palabra);
    };
    paginacion.appendChild(btnPrev);
  }

  if (paginaActual < totalPaginas) {
    const btnNext = document.createElement("button");
    btnNext.className = "btn btn-sm btn-secondary";
    btnNext.innerText = "Siguiente ⏭";
    btnNext.onclick = () => {
      paginaActual++;
      renderizarPaginaResultados(palabra);
    };
    paginacion.appendChild(btnNext);
  }

  resultadosDiv.appendChild(paginacion);
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

    // 🔢 ID único de versículo si hay interlineal
    const versoNum = versiculoActual + 1;
const capStr = String(capituloActual + 1).padStart(2, "0");   // ← capítulo indexado desde 1
const versStr = String(versoNum).padStart(4, "0");            // ← versículo como "0001"
    const libroStr = codigosLibros[libroActual]; // "01"
const idCompleto = `${libroStr}${capStr}${versStr}`;          // ← "01010001"
    const inter = datosInterlineales?.[idCompleto] || null;

    console.log("📦 Renderizando versículo único:", versoNum);
    console.log("🔎 Buscando ID:", idCompleto, "=>", inter);

    renderizarVersiculo(verso, versoNum, inter);
  } else {
capitulo.forEach((texto, index) => {
  const versoNum = index + 1;
const capStr = String(capituloActual + 1).padStart(2, "0");   // ← capítulo indexado desde 1
const versStr = String(versoNum).padStart(4, "0");            // ← versículo como "0001"
  const libroStr = codigosLibros[libroActual];
const idCompleto = `${libroStr}${capStr}${versStr}`;          // ← "01010001"






      const interlineal = datosInterlineales?.[idCompleto] || null;

      console.log("📦 Renderizando versículo", versoNum, "con ID:", idCompleto);
      console.log("🔍 Resultado encontrado:", interlineal);

      renderizarVersiculo(texto, versoNum, interlineal);
    });
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
    if (typeof aplicarNotasDesdeLocal === "function") {
      aplicarNotasDesdeLocal();
    }
  }
}


function renderizarVersiculo(texto, numero, interlineal = null) {
  const contenedor = document.getElementById("resultados");

  // 🧱 Contenedor de todo el versículo
  const versoBox = document.createElement("div");
  versoBox.className = "verso-box";

  // 🧾 Interlineal encima (si hay)
  if (Array.isArray(interlineal)) {
    const interDiv = document.createElement("div");
    interDiv.className = "interlineal";

    interlineal.forEach(palabra => {
      const span = document.createElement("span");
      span.className = "inter-palabra";

      if (palabra.number) {
        const a = document.createElement("a");
        a.href = `https://www.blueletterbible.org/lexicon/${palabra.number.toLowerCase()}/kjv`;
        a.target = "_blank";
        a.textContent = palabra.number.toUpperCase();
        span.appendChild(a);
        span.appendChild(document.createElement("br"));
      }

     const hebreo = document.createElement("div");
hebreo.textContent = palabra.word;
hebreo.dir = "rtl";
hebreo.style.fontWeight = "bold";

const traduccion = document.createElement("div");
traduccion.innerHTML = `<small>${palabra.text}</small>`;

span.appendChild(hebreo);
span.appendChild(traduccion);

      interDiv.appendChild(span);
    });

    versoBox.appendChild(interDiv);
  }
  console.log("📦 Renderizando versículo", numero, "con interlineal:", interlineal);


  // 📖 Texto del versículo editable
  const p = document.createElement("p");
  p.innerHTML = `<b>${numero}</b> ` + texto
    .split(" ")
    .map(pal => `<span class="verse-word" onclick="editarPalabra(this)">${pal}</span>`)
    .join(" ");

  versoBox.appendChild(p);
  contenedor.appendChild(versoBox);
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

  const libros = Object.keys(fuentesRVR);
  const total = libros.length;
  let completados = 0;

  // Mostrar modal
  const modal = document.getElementById("modalCargaGlobal");
  const barra = document.getElementById("barraProgreso");
  const texto = document.getElementById("porcentajeProgreso");

  modal.style.display = "flex";
  barra.style.width = "0%";
  texto.textContent = "0%";

  libros.forEach((libro, index) => {
    const url = fuentesRVR[libro];
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const textoModificado = data.map(capitulo =>
          capitulo.map(verso =>
            verso.replace(new RegExp(`\\b${desde}\\b`, 'g'), hasta)
          )
        );

        // Guardar local
        localStorage.setItem(`global_${libro}`, JSON.stringify(textoModificado));

        // Subir a Drive sin alertas
        if (usuarioGoogle) {
          const nombreTexto = `BibliaEditable_${libro}_global.json`;
          guardarCambiosEnDrive(nombreTexto, textoModificado, false);
        }
      })
      .finally(() => {
        completados++;
        const progreso = Math.round((completados / total) * 100);
        barra.style.width = progreso + "%";
        texto.textContent = progreso + "%";

        if (completados === total) {
          setTimeout(() => {
            modal.style.display = "none";
            alert(`✅ Reemplazo global de "${desde}" por "${hasta}" completado y sincronizado.`);
          }, 500); // darle medio segundo para que vea el 100%
        }
      });
  });
}

function irAVersiculo(libro, cap, verso) {
  document.getElementById("searchInput").value = `${libro} ${cap}:${verso}`;
  buscarVersiculo();
}

function irACapitulo(libro, cap) {
  document.getElementById("searchInput").value = `${libro} ${cap}`;
  buscarVersiculo();
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
