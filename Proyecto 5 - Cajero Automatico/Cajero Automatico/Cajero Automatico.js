class Billetes {

    constructor (v,c){

        this.valor = v; // VALOR = parametro dentro del constructor en la clase Billetes
        this.cantidad = c; // CANTIDAD = parametro dentro del constructor en la clase Billete

    }
}

function entregarDinero () {

    let t = document.getElementById("dinero"); 
    dinero = parseInt (t.value); // value toma el valor asociado, en este caso de t
    for (let bi of caja) { // OF = objeto - objeto = Billetes
        if (dinero > 0) { // SI VAR dinero es mayor a 0
            div = Math.floor(dinero / bi.valor); // LA VAR div = VAR dinero / VAR bi.valor
            if ( div > bi.cantidad) { // SI el resultado de div es mayor bi.cantidad
                papeles = bi.cantidad; // Dropeame la totalidad del parametro cantidad
            }
            else { // SI el resultado de div es menor bi.cantidad 
                papeles = div; // Dropeame una cantidad de papeles = al resultado de DIV
            }

            entregado.push (new Billetes(bi.valor, papeles)); // genera en el array entregado un nuevo objeto con los parametrso bi.valor = valor y papeles = cantidad
            dinero = dinero - (bi.valor * papeles); // la VAR dinero se recalccula como dinero - (bi.valor * papeles)
        }
    }  

        if (dinero > 0) { // Mientras la VAR dinero siga siendo mayor que 0 el ciclo se repite
            resultado.innerHTML = "El monto solicitado no esta disponible, reintete con otro valor"; // InerHTML genera el texto en la pagina sin recargarla
        }

        else  { // Agerego un ELSE para que no devuelva ambos mensajes

            for (let e of entregado ) { // El FOR recorre todo el ARRAY de entregado para devolver una linea de document.write por cada valor
                if (e.cantidad > 0) // Evito que salgan lineas con 0
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br>"; // Sumo el InerHTML para que aparezca el resutado anterior 
            }
}
}

let caja = []; // EStoy declarando un array
caja.push(new Billetes (50,3)); // Creo un objeto con NEW a partir de las CLASS BIlletes
caja.push(new Billetes (20,2)); // 20 parametro VALOR, 2 parametro CANTIDAD
caja.push(new Billetes (10,2)); // El push hace que se genere un objeto nuevo al final del array

let entregado = [];

let dinero = 0; // Defino el monto a extraer
let div = 0; // Dejar la VAR vacia o indicar 0 es lo mismo
let papeles = 0;

let b = document.getElementById("Extraer");
b.addEventListener("click", entregarDinero); // La interaccion se genera al hacer click en Extraer

let resultado = document.getElementById("resultado");


        //      RETO        //

//      - Cambiar texto por imagenes
//      - Restar sobre el monto total de la VAR caja con cada extraccion