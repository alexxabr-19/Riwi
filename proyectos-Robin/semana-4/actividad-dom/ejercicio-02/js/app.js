let btnSumar = document.getElementById("sumar");
let btnReiniciar = document.getElementById("reiniciar");
let contar = document.getElementById("contar");

let n = 0;
btnSumar.addEventListener("click", function () {
  n = n + 1;
  contar.innerText = n;

  if (n >= 10) {
    contar.classList.add("text-success");
  }
});

btnReiniciar.addEventListener("click", function () {
  n = 0;
  contar.classList.remove("text-success")
  contar.innerText = n;
});
