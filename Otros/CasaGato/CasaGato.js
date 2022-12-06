let vp = document.getElementById ("CasaGato");
let papel = vp.getContext("2d");

const casa = {
    url: "/Otros/CasaGato/IMG/concepto-fondo-interior-casa_52683-44328.jpg",
    cargaOK: false
};

const gato = {
    url: "/Otros/CasaGato/IMG/pngwing.com.png", 
    cargaOK: false
};

casa.objeto = new Image();
casa.objeto.src = casa.url;
casa.objeto.addEventListener("load",cargarCasa);

gato.objeto = new Image(); 
gato.objeto.src = gato.url;
gato.objeto.addEventListener("load", cargarGato);

function cargarCasa () { 

    casa.cargaOK = true; 
    dibujar()
}

function cargarGato () { 
    gato.cargaOK = true;
    dibujar()
}

let cantidadGato = aleatorio (0,5);

function dibujar () {

    if (casa.cargaOK) 
    { 
        papel.drawImage(casa.objeto, 0, 0); 
    }

    if (gato.cargaOK)
    
    { 
        let valorX = aleatorio (0,420);
        let valorY = aleatorio (0,420);
        papel.drawImage(gato.objeto, valorX, valorY);
        }
    }

function aleatorio(min, max) 
{
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}