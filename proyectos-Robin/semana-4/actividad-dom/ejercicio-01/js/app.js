var nombre = document.getElementById('nombre');
var boton = document.getElementById('boton');
var texto = document.getElementById('texto')


boton.addEventListener("click", function(){

    if(nombre.value == ""){
        alert("Necesitas escribir tu nombre para ser saludado D:");
    }else{
        texto.innerText = nombre.value;
    }
    nombre.value = ""
})
