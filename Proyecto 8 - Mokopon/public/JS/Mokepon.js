const btnMokepon = document.getElementById('btn-mokepon');
const btnAttack = document.getElementById('btn-attack');
const btnRefresh = document.getElementById('btn-refresh');
const ymokepon = document.getElementById('your-mokepon');
const outptMsj = document.getElementById('output');
const playerMsj = document.getElementById('player-attack');
const enemyMsj = document.getElementById('enemy-attack');
const yourLifes = document.getElementById('player-lifes');
const enemyLifes = document.getElementById('enemy-lifes');
const mokeponCards = document.getElementById('mokeponcards');
const sectionMap = document.getElementById('game-map')
const map = document.getElementById('map')

let playerID = null;
let enemyID = null;
let mokepones = []; // contiene los objetos Mokepon
let savageMokepones = [];
let playerAttack = []; // contiene los atq. del PJ
let enemyAttack = []; // contiene los atq. del enemigo
let mokeponOption; // Publica tarjetas de mokepones en HTML
let antorcher; // ID
let esquarzo; // ID
let vulva; // ID
let langostelvis; // ID
let tuca; // ID
let paython; // ID
let mokeponPlayer;
let myMokepon;
let mokeponAttacks;
let enemyMokeponAttacks;
let btns = [] // contiene los botones de atq.
let indexAttackPlayer; // Contiene un ARRAY que guarda los atq. seleccionados por el PJ para despues publicarlos
let indexAttackEnemy; // Contiene un ARRAY que guarda los atq. seleccionados por el enemigo para despues publicarlos
let playerVictories = 0;
let enemyVictories = 0;
let enemymokepon = document.getElementById('enemy-mokepon');
let canvas = map.getContext('2d')
let interval;
let mokemap = new Image
mokemap.src = './Img/mokemap.png'

let mapHeight;
let mapWidth = window.innerWidth -20
const mapWidthMax = 800

if (mapWidth > mapWidthMax) {
    mapWidth = mapWidthMax -20
}

mapHeight = mapWidth * 600 / 800
map.width = mapWidth
map.height = mapHeight

const aleatory = (min, max) =>{
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

class Mokepon { // Declaro la clase y le doy un nombre

constructor (name, picture, id = null) { // Declaro el constructor y le doy atributos
    this.id = id
    this.name = name; // le indico que este (this) abriburo Y de es igual al parametro X
    this.picture = picture;
    this.attacks = []; // Declaro el ARRAY pero no lo incluyo en los parametros
    this.w = 75
    this.h = 75
    this.x = aleatory(0,map.width - this.w)
    this.y = aleatory(0,map.height - this.h)
    this.pictureMokepon = new Image();
    this.pictureMokepon.src = picture;
    this.speedOnX = 0
    this.speedOnY = 0
    }

  drawMokepon() {
    canvas.drawImage(
      this.pictureMokepon,
      this.x,
      this.y,
      this.h,
      this.w
    )
  }
}

let antorcherpon = new Mokepon('Antorcher', './Img/Antorcher.png'); // Genero los objetos
let esquarzopon = new Mokepon('Esquarzo', './Img/Esquarzo.png');
let vulvapon = new Mokepon('Vulva', './Img/Vulva.png');
let langostelvispon = new Mokepon('Langostelvis', './Img/Langostelvis.png');
let tucapon = new Mokepon('Tuca', './Img/Tuca.png');
let paythonpon = new Mokepon('Paython', './Img/Paython.png');

const mokepon_attacks = [    
{ name: 'Lavame-Sucio', id: 'btn-water' },
{ name: '420-Pa-Lo-Pibe', id: 'btn-plant' },
{ name: 'Se-desconocen', id: 'btn-fight' },
{ name: 'Chorro-Garrafa', id: 'btn-fire' },
{ name: 'Asalta-Tumbas', id: 'btn-earth' }
]

// Con el metodo PUSH agrego al final del ARRAY dentro de la CLASS Mokepon los datos de los ataques
antorcherpon.attacks.push(...mokepon_attacks); //Los 3 pts hacen que se pasen los valores no como lista
esquarzopon.attacks.push(...mokepon_attacks);
vulvapon.attacks.push(...mokepon_attacks);
langostelvispon.attacks.push(...mokepon_attacks);
tucapon.attacks.push(...mokepon_attacks);
paythonpon.attacks.push(...mokepon_attacks);

mokepones.push(antorcherpon, esquarzopon, vulvapon, langostelvispon, tucapon, paythonpon); 
// El metodo PUSH hace que los elementos se agreguen al final del ARRAY al que esta asociado.

window.addEventListener('load', startGame); // inicia el juego tras el evento load

function startGame() { // Incorporo todos los escuchadores de eventos
  
document.getElementById('select-attack').style.display = 'none';
document.getElementById('btn-refresh').style.display = 'none';
document.getElementById('combat-log').style.display = 'none';
sectionMap.style.display = 'none';

mokepones.forEach((Mokepon) => { // forEach es la forma de iterar un ARRAY

// Esto es un TEMPLATE es una forma de incluir blosques de codigo desde JS a HTML
  mokeponOption = 
  ` <div class=${Mokepon.name}>
  <input type='radio' name='mokepon' id=${Mokepon.name} class=cards hidden>
  <label for=${Mokepon.name}>
    <p>${Mokepon.name}</p>
    <div id=mokepon-image>
    <img src=${Mokepon.picture} alt=${Mokepon.name} >
    </div>
  </label>
</div>` //${ARRAY.Atributo} le indico que atributo de que ARRAY quiero que se imprima en ese lugar

mokeponCards.innerHTML += mokeponOption 
// El + delante del = genera que se itere el ciclo imprimiento el TEMPLATE tantas veces como posiciones haya en el ARRAY

// Asocia los bloques de codigo generados por el TEMPLATE con un ID en HTML creado por el propio TEMPLATE id=${Mokepon.name}
antorcher = document.getElementById('Antorcher'); 
esquarzo = document.getElementById('Esquarzo');
vulva = document.getElementById('Vulva');
langostelvis = document.getElementById('Langostelvis');
tuca = document.getElementById('Tuca');
paython = document.getElementById('Paython');

});

  //Escuchador de eventos para la seleccion del MOKEPON por parte del jugador
  btnMokepon.addEventListener('click', selectYourMokepon);
  //Escuchador el evento de click sobre el boton reset
  btnRefresh.addEventListener('click', restart);

  joinGame() //Traigo la funcion que consume la API

}

function joinGame() {
  fetch('http://localhost:8080/join') //En el fetch indico la URI desde donde sale la informacion
    .then(function(res) { //Utilizamos la propiedad THEN quien recibe una funcion que es un call back que se ejecuta al recibir la respuesta 
        if (res.ok) { //Le indico que si la respuesta es OK
          res.text() //Me devuelva la respuesta convertida en formato txt
              .then(function(response) { 
                playerID = response
            })
        } 
    })
  }

// Seleccion de MOKEPON por el jugador
const selectYourMokepon = () => { 

  document.getElementById('select-mokepon').style.display = 'none';
  document.getElementById('your-mokepon').style.display = 'none';

if (antorcher.checked) {
    ymokepon.innerHTML = 'Your '+ antorcher.id; // Llamo al elemento id de dentro input que es un objeto
    mokeponPlayer = antorcher.id; // Guarda en la var mokeponPlayer el valor asociado al id dentro del input

} else if (esquarzo.checked) {
    ymokepon.innerHTML = 'Your '+ esquarzo.id;
    mokeponPlayer = esquarzo.id;

} else if (vulva.checked) {
    ymokepon.innerHTML = 'Your '+ vulva.id;
    mokeponPlayer = vulva.id;

} else if (langostelvis.checked) {
    ymokepon.innerHTML = 'Your '+ langostelvis.id;
    mokeponPlayer = langostelvis.id;

} else if (tuca.checked) {
    ymokepon.innerHTML = 'Your '+ tuca.id;
    mokeponPlayer = tuca.id;

} else if (paython.checked) {
    ymokepon.innerHTML = 'Your '+ paython.id;
    mokeponPlayer = paython.id;

} else {
    alert('SELECT YOUR MOKEPON') 
    location.reload();
  }

  mokeponSelection(mokeponPlayer)

  attackOutput(mokeponPlayer) // Le doy a la funcion attackOutput el valor mokeponPlayer como parametro para extaer dicho valor
  sectionMap.style.display = 'flex'
  startMap()
}

function mokeponSelection(mokeponPlayer) {
  fetch(`http://localhost:8080/mokepon/${playerID}`, {
    method: 'post', //Declaro el metodo, en caso de ser GET no es necesario
    headers: { //Como es un method: 'post' necesita headers
      'Content-Type': 'application/json' //Le indico el tipo de contenido
    }, 
    body: JSON.stringify({ //Declaro el body y le indico que tipo de dato es
      mokepon: mokeponPlayer //Declaro el parametro que me devolvera
    }) 
  })
}

const attackOutput = (mokeponPlayer) => {
  let attack;
  for (let i = 0; i < mokepones.length; i++) { // Mientras i sea menor que la LONG del ARRAY suma 1 a i siendo i el indice
    
// Si mokeponPlayer es igual al nombre asociado a la posicion marcada por i la var i pasa a tomar el valor un valor igual a los ataques dentro de dicha posicion del ARRAY mokepones
      if (mokeponPlayer === mokepones[i].name) { 
        attack = mokepones[i].attacks 
    }   
  }
  showAttack (attack)
}

  const showAttack = (attack) => {
    attack.forEach((attacks) => {
      mokeponAttacks = `<button id= ${attacks.id} class= attack-btn> ${attacks.name}</button>`
      btnAttack.innerHTML += mokeponAttacks
    })
      btns = document.querySelectorAll('.attack-btn') // Trae todos los elementos relacioados con el parametro . (class) # (id)
  }

const attackSequence = () => {
  btns.forEach((btn) => { // Le digo que recorra el ARRAY de btns y que identifique cada elemento como un btn
      btn.addEventListener ('click',(e) => { // A cada elemento btn le doy un listener asociado a un click que ejecuta un evento (e)
        // console.log(e) para llegar al objeto que contiene estos metodos puedo hacer un console.log(e)
        if(e.target.textContent === ' Chorro-Garrafa') { // e esta asociado a los metodos target - textContent
          playerAttack.push('Chorro-Garrafa') //El sistema registra el nombre y agrega mediante un push el atq. al ARRAY playerAttack
          document.getElementById('btn-fire').disabled = true;

        } else if (e.target.textContent === ' Lavame-Sucio') {
          playerAttack.push('Lavame-Sucio') 
          document.getElementById('btn-water').disabled = true;

        } else if (e.target.textContent === ' Asalta-Tumbas') {
        playerAttack.push('Asalta-Tumbas') 
        document.getElementById('btn-earth').disabled = true;

        } else if (e.target.textContent === ' 420-Pa-Lo-Pibe') {
        playerAttack.push('420-Pa-Lo-Pibe') 
        document.getElementById('btn-plant').disabled = true;

        } else if (e.target.textContent === ' Se-desconocen') {
        playerAttack.push('Se-desconocen') 
        document.getElementById('btn-fight').disabled = true;
      }
      if (playerAttack.length === 5) {
          sendAttacks() 
      }
    })
  })
}

const sendAttacks = () => {
    fetch(`http://localhost:8080/mokepon/${playerID}/attacks`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify ({
        attacks: playerAttack
      })
  })
  interval = setInterval(getAttacks, 50)
}

const getAttacks = () => {
  fetch(`http://localhost:8080/mokepon/${enemyID}/attacks`)
    .then(function(res) {
      if (res.ok) {
        res.json()
          .then(function ({ attacks}) {
              if (attacks.length === 5) {
                enemyAttack = attacks
                combat() 
              }
          })
      }
    })  
}

const selectEnemyMokepon = (enemy) => { // Seleccion de MOKEPON por el enemigo
    enemymokepon.innerHTML = 'Savage ' + enemy.name;
    enemyMokeponAttacks = enemy.attacks;
    attackSequence()
}

/*  enemymokepon que es una var asoc. a un ID imprime del ARRAY mokepones segun la posicion 
    devuelta por la var enemySpawn que devuelve un numero aleatorio dentro de los comprendidos 
    por el ARRAY el nombre asociado a dicha posicion    */

    const aleatoryEnemyAttack = () => {// Utilizando la funcion aleatoria basica selecciona un ataque para el enemigo
        
    let aleatoryAttack = aleatory(0,enemyMokeponAttacks.length -1)
    if (aleatoryAttack == 0) {
        enemyAttack.push ('Chorro-Garrafa');
      } else if (aleatoryAttack == 1) {
        enemyAttack.push ('Lavame-Sucio');
      } else if (aleatoryAttack == 2) {
        enemyAttack.push ('Asalta-Tumbas');
      } else if (aleatoryAttack == 3) {
        enemyAttack.push ('420-Pa-Lo-Pibe');
      } else if (aleatoryAttack == 4) {
        enemyAttack.push ('Se-desconocen');
  }
  startfight()
}

const startfight = () => {
  if(playerAttack.length === 5) { // Ejecuta Combat si el jugador ya eligio sus 5 ataques
    combat()
  }
}

const indexBothOpponents = (player, enemy) => { // guarda en las VAR la lista de atq. del PJ y el enemigo
  indexAttackPlayer = playerAttack[player]
  indexAttackEnemy = enemyAttack[enemy]
}

const combat = () => { // Logica de victoria, derrota o empata
  clearInterval(interval)

// Compara los atq. del jugador contra los del enemigo en base a la posicion del ARRAY que estos ocupan
for (let index = 0; index < playerAttack.length; index++) {
  if (playerAttack[index] === enemyAttack[index]) { 
      indexBothOpponents (index, index)
      sendMensaje('DRAW')
  } else if (playerAttack[index] === 'Chorro-Garrafa' && enemyAttack[index] === 'Asalta-Tumbas') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Chorro-Garrafa' && enemyAttack[index] === 'Se-desconocen') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Lavame-Sucio' && enemyAttack[index] === 'Chorro-Garrafa') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Lavame-Sucio' && enemyAttack[index] === '420-Pa-Lo-Pibe') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Asalta-Tumbas' && enemyAttack[index] === 'Lavame-Sucio') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Asalta-Tumbas' && enemyAttack[index] === 'Se-desconocen') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === '420-Pa-Lo-Pibe' && enemyAttack[index] === 'Asalta-Tumbas') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === '420-Pa-Lo-Pibe' && enemyAttack[index] === 'Chorro-Garrafa'){
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Se-desconocen' && enemyAttack[index] === ' Lavame-Sucio') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else if (playerAttack[index] === 'Se-desconocen' && enemyAttack[index] === ' 420-Pa-Lo-Pibe') {
      indexBothOpponents (index, index)
      sendMensaje('YOU WIN')
      playerVictories++
      yourLifes.innerHTML = playerVictories
  } else {
      indexBothOpponents (index, index)
      sendMensaje('YOU LOSE')
      enemyVictories++
      enemyLifes.innerHTML = enemyVictories
    }
  }
    lifescount();
}

const lifescount = () => { // Hace una comprobacion de los resultados y printea un mensaje

if (playerVictories < enemyVictories) {
    endGame('<h4>🗿 YOU ARE DEFEAT 🗿</h4>');
} else if (playerVictories > enemyVictories) {
    endGame('<h5>👁‍🗨 YOU ARE VICTORY 👁‍🗨</h4>');
} else {
  endGame('<h5>🎩 YOU ARE DRAW 🎩</h4>');
}

}

const sendMensaje = (result) => { // Imprime los datos de los ataques
    let attackPj = document.createElement('p'); // Crea una nueva etiqueta P por cada interaccion
    let attackEnemy = document.createElement('p'); // Crea una nueva etiqueta P por cada interaccion

    outptMsj.innerHTML = '<b>' + result + '</b>';
    attackPj.innerHTML = indexAttackPlayer
    attackEnemy.innerHTML = indexAttackEnemy
    
    playerMsj.appendChild(attackPj);
    enemyMsj.appendChild(attackEnemy);
}

const endGame = (endResult) => { // Imprime los datos de los ataques

    outptMsj.innerHTML = endResult;

    btnRefresh.style.display = 'flex';

    document.getElementById('btn-fire').disabled = true;
    document.getElementById('btn-water').disabled = true;
    document.getElementById('btn-earth').disabled = true;
    document.getElementById('btn-mokepon').disabled = true;
}

const restart = () => { // Restartea al juego
    location.reload(); 
}

const drawGame = () => {
  myMokepon.x = myMokepon.x + myMokepon.speedOnX
  myMokepon.y = myMokepon.y + myMokepon.speedOnY
  canvas.clearRect(0,0, map.width, map.height)
  canvas.drawImage(
    mokemap,
    0,
    0,
    map.width,
    map.height
  )
  myMokepon.drawMokepon()

  sendLocalitation(myMokepon.x, myMokepon.y)

  savageMokepones.forEach(function (mokepon) {
    mokepon.drawMokepon()
    collision(mokepon)
  })
}

function sendLocalitation(x, y) {
  fetch(`http://localhost:8080/mokepon/${playerID}/localitation`, {
   method: 'post',
   headers: {
     'Content-Type': 'application/json'
   }, 
   body: JSON.stringify({
     x,
     y
   }) 
 })
 .then(function(res) {
   if (res.ok)
       res.json()
           .then(function({ enemys }) {
              console.log(enemys)
              let savageMokepones = enemys.map(function(enemy){
               let savageMokepon = null
               const mokeName = enemy.mokepon.name || ''
                 if (mokeName === 'Antorcher') {
                     savageMokepon = new Mokepon('Antorcher', './Img/Antorcher.png', enemy.id);
                 } else if (mokeName === 'Esquarzo') {
                     savageMokepon = new Mokepon('Esquarzo', './Img/Esquarzo.png', enemy.id);
                 } else if (mokeName === 'Vulva') {
                     savageMokepon = new Mokepon('Vulva', './Img/Vulva.png', enemy.id);
                 } else if (mokeName === 'Langostelvis') {
                     savageMokepon = new Mokepon('Langostelvis', './Img/Langostelvis.png', enemy.id);
                 } else if (mokeName === 'Tuca') {
                     savageMokepon = new Mokepon('Tuca', './Img/Tuca.png', enemy.id);
                 } else if (mokeName === 'Paython') {
                     savageMokepon = new Mokepon('Paython', './Img/Paython.png', enemy.id);
                 }

                 savageMokepon.x = enemy.x
                 savageMokepon.y = enemy.y
                 
                 return savageMokepones

             })   
        })
   })
}

const mokeponMoveRight = () => {
  myMokepon.speedOnX = 5
}

const mokeponMoveLeft = () => {
  myMokepon.speedOnX = -5
}
const mokeponMoveUp = () => {
  myMokepon.speedOnY = -5
}
const mokeponMoveDown = () => {
  myMokepon.speedOnY = 5
}

function stopMove() { 
  myMokepon.speedOnX = 0
  myMokepon.speedOnY = 0
}

const startMoving = (e) => { 
switch (e.key) { // Evento disparador
  case 'ArrowUp': // 'Cuando pase X'
    mokeponMoveUp() // Quiero que...
    break; // break = cortar sucedion de eventos posteriores
  case 'ArrowDown':
    mokeponMoveDown()
    break;
  case 'ArrowLeft':
    mokeponMoveLeft()
    break;
  case 'ArrowRight':
    mokeponMoveRight()
    break;
  default:
    break;
  }
}

const startMap = () => {
  myMokepon = getMokeponObjet(mokeponPlayer)
  interval = setInterval(drawGame, 50) // El setInterval ejecuta la funcion drawGame cada 50 mili seg.
  window.addEventListener('keydown', startMoving)
  window.addEventListener('keyup', stopMove)
}

const getMokeponObjet = () => { 
for (let i = 0; i < mokepones.length; i++) { // Mientras i sea menor que la LONG del ARRAY suma 1 a i siendo i el indice
  // Si mokeponPlayer es igual al nombre asociado a la posicion marcada por i la var i pasa a tomar el valor un valor igual a los ataques dentro de dicha posicion del ARRAY mokepones
        if (mokeponPlayer === mokepones[i].name) { 
          return mokepones[i]
      }   
    }
  }

  const collision = (enemy) => {

    const upEnemy = enemy.y
    const bottonEnemy = enemy.y + enemy.h
    const leftEnemy = enemy.x
    const rigthEnemy = enemy.x + enemy.w

    const upPlayer = myMokepon.y
    const bottonPlayer = myMokepon.y + myMokepon.h
    const leftPlayer = myMokepon.x
    const rightPlayer = myMokepon.x + myMokepon.w

    if (
        bottonPlayer < upEnemy ||
        upPlayer > bottonEnemy ||
        rightPlayer < leftEnemy ||
        leftPlayer > rigthEnemy
    ) {
      return;
    
    } else {
      stopMove()
      clearInterval(interval)
      enemyID = enemy.id
      document.getElementById('combat-log').style.display = 'flex';
      document.getElementById('your-mokepon').style.display = 'flex';
      document.getElementById('enemy-mokepon').style.display = 'flex';
      document.getElementById('select-attack').style.display = 'flex';
      sectionMap.style.display = 'none';
      selectEnemyMokepon(enemy)
    }
  }

//ANOTACIONES AL MARGEN//

// innerHTML: reemplaza o imprime un texto en el documento HTML

// createElement(''): crear una etiqueta en documento HTML
// EJ.  let p = document.createElement('p') crea un elemento P enlazado con una la var P

// appendChild (): agrega los elementos creados por createElement como hijos directos de la etiqueta indicada
// EJ. sectionmsj.appendChild(p) = agrega el elemento P como hijo de la etiqueta asociada a la var sectionmsj que esta relacionada con el ID 'msj' del HTML
