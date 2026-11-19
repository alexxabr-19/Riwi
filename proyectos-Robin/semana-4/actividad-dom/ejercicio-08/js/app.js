const boton = document.getElementById("boton");
let listas = []

boton.addEventListener("click", function () {
  let input = document.getElementById("input");
  let lista = document.getElementById("lista");

  listas.push(input.value)

  listas.forEach(lista => {
    console.log(lista)
  });
});
