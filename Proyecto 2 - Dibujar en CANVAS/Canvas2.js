const  teclasA = {

UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

//console.log(teclasA);

document.addEventListener("keydown", dibujarTecladoFlechas);

let cuadro = document.getElementById ("dibujo");
let papel = cuadro.getContext ("2d"); // Esta VAR hace las veces de "lienzo"
let x = 250;
let y = 250;

dibujarLinea("black", 1,1,1,499, papel); // Borde izquierdo
dibujarLinea("black", 1,499,499,499, papel); // Borde inferior
dibujarLinea("black", 499,499,499,1, papel); // Borde derecho
dibujarLinea("black", 499,1,1,1, papel); // Borde superior

dibujarLinea("red", 249,249,251,251, papel); // Centro

function dibujarLinea(color, Xinicial, Yinicial, Xfinal, Yfinal, lienzo)
{
    lienzo.beginPath(); // Comienza a dibujar la linea
    lienzo.strokeStyle = color; // Selecciona el color
    lienzo.lineWidth = 3; // Grueso de la linea
    lienzo.moveTo(Xinicial, Yinicial); // Indico el DESDE
    lienzo.lineTo(Xfinal,Yfinal); // Indico el HASTA
    lienzo.stroke(); // Defino la accion de dibujar
    lienzo.closePath(); // Cierro el dibjo    
}

function dibujarTecladoFlechas (eventoFlechas) {

    console.log(eventoFlechas) 
    let colorsito = "green";
    let movimiento = 1;

    switch (eventoFlechas.keyCode) {
        case teclasA.UP:
            dibujarLinea(colorsito, x, y, x, y -movimiento, papel);
            y = y -movimiento;
            break;
        case teclasA.DOWN:
            dibujarLinea(colorsito, x, y, x, y +movimiento, papel);
            y = y +movimiento;
            break;
        case teclasA.LEFT:
            dibujarLinea(colorsito, x, y, x -movimiento, y, papel);
            x = x -movimiento;
            break;
        case teclasA.RIGHT:
            dibujarLinea(colorsito, x, y, x +movimiento, y, papel);
            x = x +movimiento;
            break;

        default:
            console.log ("another tecla in the keyboard");
    }
}

            //////////      DESAFIO     //////////

//            - Dibujar con el mouse