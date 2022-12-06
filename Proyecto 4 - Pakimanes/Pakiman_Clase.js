class Pakiman { // Todo bloque de codigo dentro de una clase es una funcion de forma implisita

    constructor (n, v, a, t) {
    
        this.pakidex = new Image();
        this.nombre = n;
        this.pg = v;
        this.atq = a;
        this.tipo = t;
    
        this.pakidex.src = pakidex[this.nombre];
    
    }
    
    hablar() { // SI tiro en consola un pakiman.hablar me devuelve el alert
    
        alert(this.nombre)
    
    }
    
    mostrar() { 
    
        document.write("<p>")
        document.body.appendChild(this.pakidex);
        document.write ("<strong>" + "Nombre: " + this.nombre + "</strong> <br>")
        document.write ("PG " + this.pg + "<br>")
        document.write ("ATQ " + this.atq + "<br> <hr>")
        document.write("</p>")
    }
    
    }