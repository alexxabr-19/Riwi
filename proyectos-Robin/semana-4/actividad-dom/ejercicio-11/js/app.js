const nombre = document.getElementById("nombre");
const email = document.getElementById("exampleInputEmail1");
const edad = document.getElementById("edad");
const boton = document.querySelector(".btn");

const form = document.querySelector("form");
const p = document.getElementById("pnom");
const p2 = document.getElementById("pcorreo");
const p3 = document.getElementById("pedad");
const valido = document.getElementById("bien");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

boton.addEventListener("click", function () {
  p.innerText = "";
  p2.innerText = "";
  p3.innerText = "";
  valido.innerText = "";

  if (nombre.value == "") {
    p.innerText = "Debes escribir un nombre.";
    p.classList.add("text-danger");
  }

  if (email.value == "") {
    p2.innerText = "Debes escribir un correo válido.";
    p2.classList.add("text-danger");
  } else if (!email.value.includes("@")) {
    p2.innerText = "El correo debe contener @.";
    p2.classList.add("text-danger");
  }

  if (edad.value == "") {
    p3.innerText = "Debes escribir una edad válida.";
    p3.classList.add("text-danger");
  } else if (Number(edad.value) <= 17) {
    p3.innerText = "La edad ingresada debe ser mayor o igual a 18.";
    p3.classList.add("text-danger");
  }

  if (
    nombre.value != "" &&
    email.value != "" &&
    email.value.includes("@") &&
    edad.value != "" &&
    Number(edad.value) >= 18
  ) {
    valido.innerText = "Registro completado exitosamente";
    valido.classList.add("text-success");
  }
});
