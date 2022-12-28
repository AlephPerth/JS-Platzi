const g_earth = 9.8;

let f_gravity = 0;
let planet_name = null;
let result = null;
let final_weight = null;
let u_weight = null;
let planets_data = []
let planets = null;

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

const mercurio = new Planets ('mercurio', './img/Mercurio.jpg', '58,7 días', '57.894.376KM','3.7' )
const venus = new Planets ('venus', './img/Venus.jpg', '243,0187 días', '6051.8KM', '8.87')
const marte = new Planets ('marte', './img/Marte.jpg', '24h 39min 35s', '3389.5KM', '3.7')
const jupiter = new Planets ('jupiter', './img/Jupiter.jpg', '9h 55m 30s', '71492.0KM', '24.8')
const saturno = new Planets ('saturno', './img/Saturno.jpg', '10h 33m 38s', '58232.0KM', '10.44')
const urano = new Planets ('urano', './img/Urano.jpg', '-17h 14m', '51.118KM', '8.87')
const neptuno = new Planets ('neptuno', './img/Neptuno.jpg', '16h 6m 14s', '24622KM', '11.15')
const pluton = new Planets ('pluton', './img/Pluton.jpg', '153hs','1185KM','0.62')
const la_luna = new Planets ('la luna', './img/Luna.jpg', '27d 7h 43,7min', '384.403KM', '1.62')

planets_data.push(mercurio, venus, marte, jupiter, saturno, urano, neptuno, pluton, la_luna)

document.getElementById("section-B").style.display = "none"
document.getElementById("section-C").style.display = "none"

const i_weight = document.getElementById('input_weight')
i_weight.addEventListener('click', () => { 
u_weight = document.getElementById('user_weight').value;

document.getElementById("section-A").style.display = "none"
document.getElementById("section-B").style.display = "grid"

})

planets_data.forEach((Planets) => {

    planets = 
    `       
            <label for=${Planets.name}>
                <img src=${Planets.picture} alt=${Planets.name} class='img_planet'/>
                ${Planets.name}
                <input type='radio' value=${Planets.gravity} name='planet' id=${Planets.name}/>
            </label>
    `
    document.getElementById('grid').innerHTML += planets
    
    })

const e = document.getElementById('calculate')
e.addEventListener('click', gravity)

function gravity () {

    let planet = document.getElementsByName('planet')

    for (let i = 0; i < planet.length; i++) {
        if (planet [i].checked) {

    } 

    if (u_weight != null) {
        final_weight = parseInt(u_weight * planets_data[i].gravity / g_earth)
        document.getElementById("section-B").style.display = "none"
        document.getElementById("section-C").style.display = "block"

        }
    }
}


///////////////////////////////////////////////////////////////////////////


        result = 
`
        <p> En ${planets_data[i].name} los dias duran ${planets_data[i].rotation} 
        y su radio es de ${planets_data[i].radio}. La fuerza de gravedad en 
        ${planets_data[i].name} es de ${planets_data[i].gravity} m/s</p> 
        <img class= img_planet src = ${planets_data[i].picture}>

        <h2> Tu peso en ${planets_data[i].name} seria de: ${final_weight} Kg </h2>      
`
        document.getElementById('section-C').innerHTML = result
