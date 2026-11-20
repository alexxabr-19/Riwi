const boton = document.getElementById("boton");
let listas = [];

boton.addEventListener("click", function () {
  let input = document.getElementById("input");
  listas.push(input.value);
  input.value = "";
  let ul = document.getElementById("lista");

  ul.innerHTML = "";
  for (let i = 0; i < listas.length; i++) {
    const p = document.getElementById("parrafo");
    if (listas[i] == "") {
      p.classList.add("text-danger", "fs-4")
      p.innerText = "No se puede agregar un campo vacío";
    } else {
      p.innerText = "";
      ul.innerHTML += `<li>${listas[i]}</li>`;
    }
  }
});
