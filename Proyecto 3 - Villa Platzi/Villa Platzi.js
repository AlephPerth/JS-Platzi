let vp = document.getElementById ("VillaPlatzi");
let papel = vp.getContext("2d");

const vaca = {
    url: "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/vaca.png", // invoco la URL
    cargaOK: false // le doy un estado boleano
};

const cerdo = {
    url: "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/cerdo.png", 
    cargaOK: false
};

const pollo = {
    url: "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/pollo.png", 
    cargaOK: false
};

const fondo = {
    url: "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/tile.png", 
    cargaOK: false
};

fondo.objeto = new Image(); // No se redeclara la VAR
fondo.objeto.src = fondo.url; // invoca la VAR URL como ruta
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image(); 
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load",cargarVaca);

cerdo.objeto  = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdo);

pollo.objeto  = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);

function cargarFondo () { 

    fondo.cargaOK = true; // Le digo que el fondo esta cargado
    dibujar()
}

function cargarVaca () { 
    vaca.cargaOK = true;
    dibujar()
}

let cantidadvaca = aleatorio (0,5); // Declaro la VAR que itera del FOR como un numero aleatorio. Linea 75

function cargarCerdo () { 
    cerdo.cargaOK = true;
    dibujar()
}

let cantidadcerdo = aleatorio (0,5); // La VAR se reclara tras la FUNCTION para que el valor se cargue una sola vez

function cargarPollo () { 
    pollo.cargaOK = true;
    dibujar()
}

let cantidadpollo = aleatorio (0,5); // En el CONSOLE.LOG apareceran varias cargas (con un mismo valor) de cada dibuoj por que la funcion 'CargarN' se ejecuta una cantidad de veces igual a la cantidad #capas" de dibujos que se cargan. Por ejemplo VACA aparece 3 veces por que se carga FONDO > VACA; FONDO > VACA > CERDO; FONDO > VACA > POLLO; 

function dibujar () {

    if (fondo.cargaOK) 
    { 
        papel.drawImage(fondo.objeto, 0, 0); 
    }

// Si quisieramos que la imagenes no colapsen debemos determinar cuantas imagenes entran en una fila/columna del CANVAS y dividir el valor alto/ancho del CANVAS sobre el alto/ancho valor de la imagen. El resultado sera el numero de veces que cabe la imagen dentro de una fila/columna sin colapsar y a dicho numero de veces lo multiplicamos por el alto/ancho de la imagen.

// Si reducimos el numero de imagenes que se pueden cargar por fila/columna del CANVAS generaremos que el limite de imagenes por fila/columna disminuya

// Si reducimos el numero que representa el espacio que ocupa cada imagen generaremos un colapso parcial de las mismas

    if (vaca.cargaOK)
    { 
        console.log("Hay " + cantidadvaca + " vacas");
        for (let v = 0; v < cantidadvaca; v++)
        {
//            let valorX = aleatorio (0,420); // Declaro limites del espacio de dibujo en X
//            let valorY = aleatorio (0,420); // Declaro limites del espacio de dibujo en Y

            let x = aleatorio (0, 5); // Numero de imagenes por fila/columna
            let y = aleatorio (0, 5);
            let xp = x * 70; // Espacio ocupado por cada imagen
            let yp = y * 70;

            papel.drawImage(vaca.objeto, xp, yp);
        }
    }

    if (cerdo.cargaOK)
    { 
        console.log("Hay " + cantidadcerdo + " cerdos");
        for (let c = 0; c < cantidadcerdo; c++)
        {
            let valorX = aleatorio (0,420);
            let valorY = aleatorio (0,420);
            papel.drawImage(cerdo.objeto, valorX, valorY);
        }
    }

    if (pollo.cargaOK)
    { 
        console.log("Hay " + cantidadpollo + " pollos");
        for (let p = 0; p < cantidadpollo; p++) 
        {
            let valorX = aleatorio (0,420);
            let valorY = aleatorio (0,420);
            papel.drawImage(pollo.objeto, valorX, valorY);
        }
    }
}

function aleatorio(min, max) 
{
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

        // CALCULAR EL VALOR DEL RANGO ALEATORIO //

// Conociendo en valor total del CANVAS en ancho y alto y el valor alto y largo de mi imagen puedo saber hasta que coordinadas del CANVAS pueden ingresar las mismas son quedar fuera de los limites. Esto lo hago restando sobre el valor alto o largo de la imagen el tamaño de la mism. Por ejemplo en este codigo seria un rango para X & Y de entre 0 y 420 por que 500 es el rango de alto y ancho mientras que 80 es el tamaño de la imagen.


        // ORDEN DE CARGA EN EL SERVIDOR //  

// Al ser TRUE la condicion del fondo (function 'cargarFondo') el IF no necesita la aclaracion de que si fondo.cargaOK == true

// Los IF se anidan dentro de la FUCTION DIBUJAR ya que en la FUNCTION 'cargarN' le estoy diciendo que la misma se ejecute al cumplirse la condicion 'N.cargar = true'

// El orden en el cual aparecen los IF dentro de la funcion define como se cargan dentro de la imagen. Si yo coloco VACA, CERDO o POLLO antes que FONDO este se solparaia por encima de ellos. Lo mismo si superpongo las imagenes en una misma coordneada, la ultima en delcararse (el ultimo IF) seria la que quede superpuesta a las demas.


            //////////      DESAFIO     //////////

//            - Hacer que un cerdo se mueva con las felchas