const botonRojo = document.getElementById('bRojo')
const botonAmarillo = document.getElementById('bAmarillo')
const botonVerde = document.getElementById('bVerde')

const semaforoRojo = document.getElementById('Srojo')
const semaforoAma = document.getElementById('Samarillo')
const semaforoVerde = document.getElementById('Sverde')


botonRojo.addEventListener('click', function(){
    semaforoRojo.classList.remove("opacity-25")
    semaforoRojo.classList.add("bg-danger")
    semaforoAma.classList.add("opacity-25")
    semaforoVerde.classList.add("opacity-25")

});

botonAmarillo.addEventListener('click', function(){
    semaforoAma.classList.remove("opacity-25")
    semaforoAma.classList.add("bg-warning")
    semaforoVerde.classList.add("opacity-25")
    semaforoRojo.classList.add("opacity-25")
});

botonVerde.addEventListener('click', function(){
    semaforoVerde.classList.remove("opacity-25")
    semaforoVerde.classList.add("bg-success")
    semaforoAma.classList.add("opacity-25")
    semaforoRojo.classList.add("opacity-25")
});

