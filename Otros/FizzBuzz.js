        document.write ("<h1> OPCION A </h1>")

let numero = 100;
let divisible = false;

for (let n =1; n <= 100; n++) {

divisible = false;
if (n % 3 == 0) { // % = Nos devuelve el resto de una division

    document.write("Fizz");
    divisible = true;
} 

if (n % 5 == 0) {

    document.write("Buzz");
    divisible = true;
}

if (!divisible) { // ! = NO

    document.write(n);
}

    document.write("<br>");
}

document.write ("<hr>")


        document.write ("<h1> OPCION B </h1>")


let numeros = 100;

for (let n =1; n <= 100; n++) {

if (n % 3 == 0) {

    document.write("Fizz");

} 

if (n % 5 == 0) {

    document.write("Buzz");
}

if (n % 3 !=0 && n % 5 !=0) { // && = Y

    document.write(n);
}

    document.write("<br>");
}

document.write ("<hr>")

        document.write ("<h1> OPCION C </h1>")

        function esDivisible (num, divisor) {

            if (num % divisor == 0) {
                return true;
            }
        
            else {
        
                return false; 
        
            }
        }

let number = 100;

for (let n =1; n <= 100; n++) {

if (esDivisible (n,3)) {
    document.write("Fizz");

} 

if (esDivisible (n,5)) {

    document.write("Buzz");
}

if (!esDivisible (n,3) && !esDivisible (n,5)) { // && = Y

    document.write(n);
}

    document.write("<br>");
}

// En la OPCION A le decimos al sistema mediante la VAR divisible que nos muestre el numero segun cumpla alguna de las tres condiciones alli marcadas. 

// En la OPCION B es lo mismo pero no usamos una VAR para decirlo sino que lo hacemos mediante descripcion compleja "si el resto de la division de n no entre 3 o 5 no es 0 entonces devolveme un numero"

// En la OPCION C la comprobacion de la condicion de si existe un resto igual a 0 en la division entre n y 3/5 solo ejecutara el document.write si se devuelve TRUE por que IF solo funciona cuando la condicion que contiene es TRUE, caso contrario no funcionara.


            //          TABLA DE VERDADES           //

//      v  &&  v  =  v    >   Verdadero y Verdadero es Verdadero
//      v  &&  F  =  F    >   Verdadero y Falso es Falso
//      F  &&  F  =  F    >   Falso y Falso es Falso

