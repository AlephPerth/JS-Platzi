const g_earth = 9.8;
let f_gravity = 0;
let planet_name = null;
let result = null;
let final_weight = null;
let u_weight = null;
let planets_data = []

class Planets {

    constructor (name, picture, rotation, radio, gravity) {

        this.name = name
        this.picture = picture
        this.rotation = rotation
        this.radio = radio
        this.gravity = gravity
        this.planetPicture = new Image()
        this.planetPicture.src = picture
    }
}

const mercurio = new Planets ('mercurio', './img/Mercurio.jpg', '58,7 días', '57.894.376KM','3.7 m/s' )
const venus = new Planets ('venus', './img/Venus.jpg', '243,0187 días', '6051.8KM', '8.87 m/s')
const marte = new Planets ('marte', './img/Marte.jpg', '24h 39min 35s', '3389.5KM', '3.7 m/s')
const jupiter = new Planets ('jupiter', './img/Jupiter.jpg', '9h 55m 30s', '71492.0KM', '24.8 m/s')
const saturno = new Planets ('saturno', './img/Saturno.jpg', '10h 33m 38s', '58232.0KM', '10.44 m/s')
const urano = new Planets ('urano', './img/Urano.jpg', '-17h 14m', '51.118KM', '8.87 m/s')
const neptuno = new Planets ('neptuno', './img/Neptuno.jpg', '16h 6m 14s', '24622KM', '11.15 m/s')
const pluton = new Planets ('pluton', './img/Pluton.jpg', '153hs','1185KM','0.62 m/s')
const luna = new Planets ('la luna', './img/Luna.jpg', '27d 7h 43,7min', '384.403KM', '1.62 m/s')

planets_data.push(mercurio, venus, marte, jupiter, saturno, urano, neptuno, pluton, luna)

document.getElementById("section-B").style.display = "none"
document.getElementById("section-C").style.display = "none"

const i_weight = document.getElementById('input_weight')
i_weight.addEventListener('click', () => { 
u_weight = document.getElementById('user_weight').value;

document.getElementById("section-A").style.display = "none"
document.getElementById("section-B").style.display = "grid"

//console.log(u_weight)

})

const e = document.getElementById('calculate')
e.addEventListener('click', gravity)

function gravity () {

    let planetId = document.getElementsByName('planet')

    for (let i = 0; i < planetId.length; i++) {
        if (planetId [i].checked) {
            planet_name = planetId[i].id

//console.log(planet_name)

    } 

    let planetG = document.getElementsByName('planet')

    for (let i = 0; i< planetG.length; i++) {
        if (planetG [i].checked) {
            f_gravity = planetG[i].value

//console.log(f_gravity)

        } 
    }

    if (u_weight != null && f_gravity != null) {
        final_weight = parseInt(u_weight * f_gravity / g_earth)
        document.getElementById("section-B").style.display = "none"
        document.getElementById("section-C").style.display = "block"

//console.log(final_weight)

        result = 
    
        `<p> En ${luna.name} los dias duran ${luna.rotation} 
        y su radio es de ${luna.radio}. La fuerza de gravedad en 
        ${planet_name} es de ${luna.gravity}</p> 
        <img class= img_planet src = ${luna.picture}>

        <h2>Tu peso en ${planet_name} seria de: ${final_weight} Kg </h2>      `

        document.getElementById('section-C').innerHTML = result

        }
    } 
}

