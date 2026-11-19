const boton = document.getElementById("boton");
let listas = [];

boton.addEventListener("click", function () {
  let input = document.getElementById("input");
  listas.push(input.value);
  let ul = document.getElementById("lista");

  ul.innerHTML = "";
  for (let i = 0; i < listas.length; i++) {
    if (listas[0] == "") {
      
    }
    ul.innerHTML += `<li>${listas[i]}</li>`;
  }
});
