const g_tierra = 9.8;
let f_gravedad = 0;
let nombre_planeta = null;
let resultado = null;
let peso_final = null;
let peso_usuario = null;

let siguiente = document.getElementById('siguiente')
siguiente.addEventListener('click',p_usuario)

function p_usuario () {
    peso_usuario = document.getElementById('peso_usuario').value
}

const calcular = document.getElementById('calcular')
calcular.addEventListener('click',gravedad)

function gravedad () {

    peso_usuario

    let planeta = document.getElementsByName('planeta')

    for (let i = 0; i < planeta.length; i++) {
        if (planeta [i].checked) {
            nombre_planeta = planeta[i].id
        } 

    let array = document.getElementsByName('planeta')

    for (let i = 0; i < array.length; i++) {
        if (array [i].checked) {
            f_gravedad = array[i].value
        } 
    }

    if (peso_usuario > 0 && f_gravedad > 0) {
        peso_final = parseInt(peso_usuario * f_gravedad / g_tierra)

    resultado = 
        `<h2> Tu peso en ${nombre_planeta} seria de: ${peso_final} Kg</h2>`

        document.getElementById('resultado').innerHTML = resultado

        } else {
            alert ('ERROR!')
        }
    } 
}
