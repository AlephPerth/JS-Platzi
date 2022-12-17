///////* ADDEVENTLISTENER *///////

let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botonHTML");
boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick() {
    let lineas = parseInt(texto.value);
    let l = 0;
    (let = yi), xf;
    let espacio = ancho / lineas;

for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujandoXunSueño("blue", 1, yi, xf, 299); // xi,yi,xf,yf
}

for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujandoXunSueño("red", 299, yi, xf, 1); // xi,yi,xf,yf
}

for (l = 0; l < lineas; l++) {
    yf = espacio * l;
    xi = espacio * (l + 1);
    dibujandoXunSueño("green",xi, 0, 0, yf); // xi,yi,xf,yf
}

for (l = 0; l < lineas; l++) {
    yf = espacio * (l+1);
    xi = espacio * l
    dibujandoXunSueño("violet",xi, 299, 299, yf); // xi,yi,xf,yf
    }
}

let dibu = document.getElementById("dibujo2");
let anchoa = dibu.width;
let papel = dibu.getContext("2d");

function dibujandoXunSueño(color, Xinicial, Yinicial, Xfinal, Yfinal) {
  papel.beginPath(); // Comienza a dibujar la linea
  papel.strokeStyle = color; // Selecciona el color
  papel.moveTo(Xinicial, Yinicial); // Indico el DESDE
  papel.lineTo(Xfinal, Yfinal); // Indico el HASTA
  papel.stroke(); // Defino la accion de dibujar
  papel.closePath(); // Cierro el dibjo
}

dibujandoXunSueño("black", 1, 1, 1, 299); // Borde izquierdo
dibujandoXunSueño("black", 1, 299, 299, 299); // Borde inferior
dibujandoXunSueño("black", 299, 299, 299, 1); // Borde derecho
dibujandoXunSueño("black", 299, 1, 1, 1); // Borde superior

///////* DIBUJAR EN CANVAS *///////

let d = document.getElementById("dibujo"); // Trae un elemento en base a su ID
let ancho = d.width;
let lienzo = d.getContext("2d"); // Metodo del CANVAS que define si es 2d o 3d

lienzo.beginPath(); // Comienza a dibujar la linea
lienzo.strokeStyle = "red"; // Selecciona el color
lienzo.moveTo(0, 0); // Indico el DESDE
lienzo.lineTo(300, 300); // Indico el HASTA
lienzo.stroke(); // Defino el grueso
lienzo.closePath(); // Cierro el dibjo

/* Inicio la funcion determinando el nombre, entre los () van los parametros */
/* Despues defino que accion realiza cada una de esas acciones*/

//////* FUNCIONES *///////

function dibujarLinea(color, Xinicial, Yinicial, Xfinal, Yfinal) {
  lienzo.beginPath(); // Comienza a dibujar la linea
  lienzo.strokeStyle = color; // Selecciona el color
  lienzo.moveTo(Xinicial, Yinicial); // Indico el DESDE
  lienzo.lineTo(Xfinal, Yfinal); // Indico el HASTA
  lienzo.stroke(); // Defino la accion de dibujar
  lienzo.closePath(); // Cierro el dibjo
}

dibujarLinea("black", 1, 1, 1, 299); // Borde izquierdo
dibujarLinea("black", 1, 299, 299, 299); // Borde inferior
dibujarLinea("black", 299, 299, 299, 1); // Borde derecho
dibujarLinea("black", 299, 1, 1, 1); // Borde superior

///////* CICLOS FOR, DO WHILE Y WHILE *///////

let lineas = 30;
let l = 0;
let yi, xf;

do {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("grey", 300, yi, xf, 0); // +10 en Yinicial +10 en Xfinal
    l++;
} while (l < lineas);

/*
while (l < lineas) {
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("grey", 300, yi, xf, 0) // +10 en Yinicial +10 en Xfinal
    l ++;
} 
*/

for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("grey", 0, yi, xf, 300); // +10 en Yinicial +10 en Xfinal
    l++;
}