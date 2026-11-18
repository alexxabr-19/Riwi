const tarjeta = document.getElementById('card');
const select = document.getElementById('select');


select.addEventListener('change', function(){
    tarjeta.classList.remove("bg-primary", "bg-success", "bg-warning", "bg-danger-subtle")
    if(select.value === "azul"){
        tarjeta.classList.add("bg-primary")
    }else if(select.value === "verde"){
        tarjeta.classList.add("bg-success")
    }else if(select.value === "amarillo"){
        tarjeta.classList.add("bg-warning")
    }else if(select.value === "rosa"){
        tarjeta.classList.add("bg-danger-subtle")
    }
})
