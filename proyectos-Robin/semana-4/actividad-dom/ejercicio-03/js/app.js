let comentario = document.getElementById('comentario')
let mostrar = document.getElementById('parrafo')


comentario.addEventListener('input', function() {
    mostrar.innerText = comentario.value
})