
function aleatorio (min, max) {
    return Math.floor(Math.random()*(max-min+1)+1)
}

function eleccion (jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra"
    } else if (jugada == 2) {
        resultado = "Papel"
    } else if (jugada == 3) {
        resultado = "Tijeras"
    } else {
        alert("Esa no es una opcion valida")
    } 
    return resultado
}

let PC = 0
let jugador = 0
let victorias = 0
let derrotas = 0
let empates = 0

while (victorias < 3 && derrotas < 3) {

    let PC = aleatorio (1,3)
    let jugador = prompt ("Elige: 1- Piedra, 2 - Papel o 3 - Tijeras");

    alert ("Elegiste " + eleccion(jugador))
    alert (("La PC eligio " + eleccion(PC)))

    if (PC == jugador) {
        alert ("Empate")
        empates ++
    } else if (PC == 1 && jugador == 2 || PC == 2 && jugador == 3 || PC == 3 && jugador == 1) { 
        alert ("Ganaste")
        victorias ++
    } else {
        derrotas ++
        alert ("Perdiste, too sad")
    }
        alert("Ganaste " + victorias + " empataste " + empates + " perdiste " + derrotas)
}

if (victorias == 3 ) {
    document.write("<h1>FELICIDADES, HAS GANADO</h1>")
} else if (derrotas == 3) {
    document.write("<h1>MEJOR SUERTE PARA LA PROXIMA</h1>")
}