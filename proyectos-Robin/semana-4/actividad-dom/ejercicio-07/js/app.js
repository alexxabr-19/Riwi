let input = document.getElementById("password");

input.addEventListener("input", function () {
  let p = document.getElementById("texto");
  p.classList.remove("text-danger", "text-success", "text-warning");
  if (input.value.length < 6) {
    p.classList.add("text-danger");
    p.innerText = "Contraseña muy corta :(";
  } else if (input.value.length >= 6 && input.value.length <= 9) {
    p.classList.add("text-warning");
    p.innerText = "Contraseña aceptable";
  } else {
    p.classList.add("text-success");
    p.innerText = "Contraseña fuerte :3";
  }
});
