const comentario = document.getElementById("comentario");
const parrafo = document.getElementById("parrafo");

comentario.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    parrafo.innerText = comentario.value;
    comentario.value = "";
  }
});
