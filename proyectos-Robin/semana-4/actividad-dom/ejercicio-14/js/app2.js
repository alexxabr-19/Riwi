const grande = document.getElementById("grande");
const gatoMono = document.getElementById("imagen1");
const gatoSiames = document.getElementById("imagen2");
const gatoBlanco = document.getElementById("imagen3");
const h2 = document.querySelector("h2");

gatoMono.addEventListener("click", function () {
  gatoSiames.classList.remove("border", "border-3", "border-danger");
  gatoBlanco.classList.remove("border", "border-3", "border-danger");
  gatoMono.classList.add("border", "border-3", "border-danger");
  grande.src = gatoMono.src;
  h2.innerText = "Gato Mono :3";
});

gatoSiames.addEventListener("click", function () {
  gatoMono.classList.remove("border", "border-3", "border-danger");
  gatoBlanco.classList.remove("border", "border-3", "border-danger");
  gatoSiames.classList.add("border", "border-3", "border-danger");
  grande.src = gatoSiames.src;
  h2.innerText = "Gato Siamés :3";
});

gatoBlanco.addEventListener("click", function () {
  gatoMono.classList.remove("border", "border-3", "border-danger");
  gatoSiames.classList.remove("border", "border-3", "border-danger");
  gatoBlanco.classList.add("border", "border-3", "border-danger");
  grande.src = gatoBlanco.src;
  h2.innerText = "Gato Blanco :3";
});
