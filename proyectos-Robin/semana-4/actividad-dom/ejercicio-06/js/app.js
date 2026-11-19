const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const peso = Number(document.getElementById("peso").value);
  const estatura = Number(document.getElementById("estatura").value);

  resultado.classList.remove(
    "text-danger",
    "text-success",
    "text-warning"
  );

  if (estatura <= 0 || peso <= 0) {
    resultado.innerText = "Ingrese valores válidos.";
  } else {
    let imc = peso / (estatura * estatura);
    if (imc < 18.5) {
      resultado.classList.add("text-danger");
      resultado.innerText = "tu imc es: " + imc + ". Bajo peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.classList.add("text-success");
      resultado.innerText = "tu imc es: " + imc + ". Peso normal.";
    } else if (imc > 24.9 && imc <= 29.9) {
      resultado.classList.add("text-warning");
      resultado.innerText = "tu imc es: " + imc + ". Sobrepeso.";
    } else if (imc > 29.9 && imc >= 34.9) {
      resultado.classList.add("text-danger");
      resultado.innerText = "tu imc es: " + imc + ". Obesidad grado I.";
    } else if (imc > 34.9 && imc >= 39.9) {
      resultado.classList.add("text-danger");
      resultado.innerText = "tu imc es: " + imc + ". Obesidad grado II.";
    } else {
      resultado.classList.add("text-danger");
      resultado.innerText = "tu imc es: " + imc + ". Obesidad grado III.";
    }
  }
});
