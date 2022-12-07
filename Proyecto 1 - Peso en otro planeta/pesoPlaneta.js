const g_mercurio = 3.7;
const g_venus = 8.87;
const g_marte = 3.7;
const g_jupiter = 24.8;
const g_satuno = 10.44;
const g_urano = 8.87;
const g_neptuno = 11.15;
const g_pluton = 0.62;
const g_luna = 1.62;
const g_sol = 274;

const g_tierra = 9.8;
let f_gravedad = 0
let resultado = null;
let peso_final = null;
let usuario = null;
let planeta = document.getElementsByName('planeta').value

const calcular = document.getElementById('calcular')
    calcular.addEventListener('click',gravedad)

const mercurio = document.getElementById('mercurio')
 
function gravedad () {
        usuario = document.getElementById('usuario').value
        f_gravedad = 274
    
    if (usuario > 0 && f_gravedad > 0) {
        peso_final = parseInt(usuario * f_gravedad / g_tierra)

    resultado = 
        `<h2> Tu peso seria de: ${peso_final} Kg</h2>`

        document.getElementById('resultado').innerHTML = resultado
  
        } else {
            alert ('ERROR!')
        }
    }
