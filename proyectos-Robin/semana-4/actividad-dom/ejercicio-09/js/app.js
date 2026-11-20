let inputNombre = document.getElementById("inputNombre");
let inputProfesion = document.getElementById("inputProfesion");
let inputImagen = document.getElementById("url");

inputNombre.addEventListener("input", function () {
  let nombre = document.getElementById("nombre");
  nombre.innerText = inputNombre.value;
});

inputProfesion.addEventListener("input", function () {
  let profesion = document.getElementById("profesion");
  profesion.innerText = inputProfesion.value;
});

  inputImagen.addEventListener("input", function () {
  let imagen = document.querySelector(".card-img-top");
  imagen.src = inputImagen.value;
});
