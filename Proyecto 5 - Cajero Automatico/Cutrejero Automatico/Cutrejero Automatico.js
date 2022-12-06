let ciencuenta = 50;
let veinte = 20;
let diez = 10;

let ext = parseInt(prompt("¿cuanto va a retirar?"));
let dea = Math.floor (ext / ciencuenta);

    if (dea => 1 ) {
        document.write(dea + " billetes de 50 <br>");
    }

    else {
        document.write()
    }

    let dex = ext - (ciencuenta*dea);
    let deb = Math.floor (dex / veinte);

    if (deb => 1 ) {
        document.write(deb + " billetes de 20 <br>");
    }

    else {
        document.write()
    }

    let dey = dex - (veinte*deb);
    let dec = Math.floor (dey / diez);

    if (dec => 1 ) {
        document.write(dec + " billetes de 10 <br>");
    }

    else  {
        document.write()
    }