const g_tierra = 9.8;
let f_gravedad = 0;
let nombre_planeta= null;
let resultado = null;
let peso_final = null;
let usuario = null;

const calcular = document.getElementById('calcular')
calcular.addEventListener('click',gravedad)

function gravedad () {

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
        usuario = document.getElementById('usuario').value

    if (usuario > 0 && f_gravedad > 0) {
        peso_final = parseInt(usuario * f_gravedad / g_tierra)

    resultado = 
        `<h2> Tu peso en ${nombre_planeta} seria de: ${peso_final} Kg</h2>`

        document.getElementById('resultado').innerHTML = resultado
  
        } else {
            alert ('ERROR!')
        }
    } 
}
