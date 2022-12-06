 // Esto es un ARRAY defino "cajitas" dentro de la VAR que asocio con un id, en este caso el nombre del pakimon. Por default el sistema asocia un num. partiendo de 0. Esto funciona CASI igual que un objeto literal.

let pakidex = [];
pakidex["Cauchin"] = "IMG/Cauchin.png";
pakidex["Tocinauro"] = "IMG/Tocinauro.png";
pakidex["Pokacho"] = "IMG/Pokacho.png";

let cauchin = new Pakiman("Cauchin", "100", "30", "Tierra");
let tocinauro = new Pakiman("Tocinauro", "120", "40", "Agua");
let pokacho = new Pakiman("Pokacho", "80", "50", "Fuego");

pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();


// [ ]
// { }

/* let coleccion = [];
coleccion.push(("Cauchin", "100", "30", "Tierra"));
coleccion.push(("Tocinauro", "120", "40", "Agua"));
coleccion.push(("Cauchin", "100", "30", "Tierra"));

for (let pakiman of coleccion) { // IN indice - OF objeto

    pakiman.mostrar();

} */