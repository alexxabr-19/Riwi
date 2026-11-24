const numero = document.getElementById("numero");
const boton = document.querySelector(".btn");

boton.addEventListener("click", function () {
  const p = document.querySelector("p");
  const h2 = document.querySelector("h2");

  if (numero.value == "") {
    h2.innerText = ""
    p.innerText = "Debe ingresar un número.";
  } else {
    let guardar = "";
    for (let i = 1; i <= 10; i++) {
      let resultado = Number(numero.value) * i;
      guardar += Number(numero.value) + " x " + i + " = " + resultado + "<br>";
    }
    p.innerHTML =""
    h2.innerText = "Tabla del " + Number(numero.value);
    p.innerHTML = guardar;
    numero.value = "";
  }
});
