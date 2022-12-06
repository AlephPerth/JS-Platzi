let vp = document.getElementById("VillaPlatzi");
let papel = vp.getContext("2d");

//--FONDO--//

let fondo = new Image();
fondo.src = "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/tile.png";
addEventListener("load", cargarFondo); // No se esta declarando en el listener la VAR

function cargarFondo() {
  papel.drawImage(fondo, 0, 0);
}

//--VACA--//

let vaca = new Image();
vaca.src = "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/vaca.png";
addEventListener("load", cargarVaca);

function cargarVaca() {
  papel.drawImage(vaca, 10, 10);
  papel.drawImage(vaca, 110, 110);
  papel.drawImage(vaca, 220, 220);
}

//--CERDO--//

let cerdo = new Image();
cerdo.src = "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/cerdo.png";
addEventListener("load", cargarCerdo);

function cargarCerdo() {
  papel.drawImage(cerdo, 120, 150);
  papel.drawImage(cerdo, 220, 250);
  papel.drawImage(cerdo, 320, 350);
}

//--POLLO--//

let pollo = new Image();
pollo.src = "/JS - Platzi/Proyecto 3 - Villa Platzi/IMG/pollo.png";
addEventListener("load", cargarPollo);

function cargarPollo() {
  papel.drawImage(pollo, 150, 125);
  papel.drawImage(pollo, 250, 225);
  papel.drawImage(pollo, 350, 325);
}
