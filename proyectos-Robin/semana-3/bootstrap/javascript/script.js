const selector = document.getElementById("selector");

selector.addEventListener("change", () => {
  document.documentElement.setAttribute("data-bs-theme", selector.value);
});
