
// notas_flotante.js - Editor de notas por palabra en ventana flotante y arrastrable

let palabraSeleccionada = null;
let spanSeleccionado = null;

document.addEventListener("DOMContentLoaded", () => {
  const resultados = document.getElementById("resultados");
  if (!resultados) return;

  // Mostrar ventana al hacer clic derecho
  resultados.addEventListener("contextmenu", function (e) {
    if (e.target.classList.contains("verse-word")) {
      e.preventDefault();
      spanSeleccionado = e.target;
      palabraSeleccionada = spanSeleccionado.innerText.trim();
      const clave = generarClaveNota(spanSeleccionado);
      const notaActual = localStorage.getItem(clave) || "";

      document.getElementById("palabraActual").innerText = palabraSeleccionada;
      document.getElementById("notaInput").value = notaActual;

      const ventana = document.getElementById("notaFlotante");
      ventana.style.display = "block";
      ventana.style.left = "50%";
      ventana.style.top = "50%";
      ventana.style.transform = "translate(-50%, -50%)";
    }
  });

  // Botón Guardar
  document.getElementById("guardarNotaBtn").addEventListener("click", () => {
    if (!spanSeleccionado) return;
    const nota = document.getElementById("notaInput").value.trim();
    const clave = generarClaveNota(spanSeleccionado);

    if (nota === "") {
      localStorage.removeItem(clave);
      spanSeleccionado.removeAttribute("data-note");
      spanSeleccionado.removeAttribute("title");
    } else {
      localStorage.setItem(clave, nota);
      spanSeleccionado.setAttribute("data-note", nota);
      spanSeleccionado.setAttribute("title", "📝 " + nota);
    }

    document.getElementById("notaFlotante").style.display = "none";
  });

  // Botón Cancelar
  document.getElementById("cancelarNotaBtn").addEventListener("click", () => {
    document.getElementById("notaFlotante").style.display = "none";
  });

  // Cargar notas en palabras visibles
  const observer = new MutationObserver(() => {
    document.querySelectorAll(".verse-word").forEach(span => {
      const clave = generarClaveNota(span);
      const nota = localStorage.getItem(clave);
      if (nota) {
        span.setAttribute("data-note", nota);
        span.setAttribute("title", "📝 " + nota);
      } else {
        span.removeAttribute("data-note");
        span.removeAttribute("title");
      }
    });
  });

  observer.observe(document.getElementById("resultados"), { childList: true, subtree: true });

  // Hacer la ventana arrastrable
  hacerVentanaArrastrable(document.getElementById("notaFlotante"));
});

function generarClaveNota(span) {
  const versiculo = span.closest("p")?.querySelector("b")?.innerText;
  const palabraIndex = Array.from(span.parentNode.querySelectorAll(".verse-word")).indexOf(span);
  return `nota_${libroActual}_${capituloActual}_${versiculo}_${palabraIndex}`;
}

function hacerVentanaArrastrable(elmnt) {
  const header = document.getElementById("notaHeader");
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (header) {
    header.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // obtener la posición del cursor al iniciar
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calcular nueva posición
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.transform = "none";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
