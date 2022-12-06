let cafesito = require("express");
let aplicacion = cafesito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {

    resultado.send("SERVERS BITCHES!!");
}

function cursos (peticion, resultado) {
    resultado.send("Estos son los CURSOS");
}

aplicacion.listen(8989);