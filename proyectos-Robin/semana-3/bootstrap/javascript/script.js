let selector = document.getElementById("selector");

selector.addEventListener("change", function(){
  let color = document.getElementById("tema")

  if(selector.value === 'dark'){
    color.classList.add('bg-dark')
    color.classList.remove('bg-light')
  }else if(selector.value === 'light'){
    color.classList.add('bg-light')
    color.classList.remove('bg-dark')
  }
});
