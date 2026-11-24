const imagenes = document.querySelectorAll(".imagen");
const grande = document.getElementById("grande");
const h2 = document.querySelector("h2");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", function () {
      imagen.classList.add("border", "border-3", "border-danger");
      grande.src = imagen.src;
  });
});
