        //Instalar Node.js: web Node.js
    //Inicio npm desde consola: npm init
    //Instalar Express desde consola: npm install express
    //Instalar Cors desde consola: npm install cors
    //Levantar el servidor desde la carpeta correspondiente: node 'nombre del archivo servidor'
    
    const express = require('express') //Importo la libreria de express en una var
    const cors = require('cors') //Con al funcion 'require' puedo usar las librerias de npm
    const app = express() //Creo una aplicacion con express.js e invoco a express como funccion

    app.use(cors()) //Llama a la libreria cors que evita errores de este tipo
    app.use(express.static('public'))
    app.use(express.json()) //Habilita a express para trabajar con JSON

    const players = [] //Declaro un array donde se van a ir cargando los datos

    class Player {
        constructor(id) {
            this.id = id
        }

        mokeponAsigned(mokepon) { //El metodo asigna un argumento
            this.mokepon = mokepon
        }

        positionUpdate(x,y) {
            this.x = x,
            this.y = y
        }

        attacksAsigned(attacks) {
            this.attacks = attacks
        }
    }

    class Mokepon { //Levanta el nombre del mokepon seleccionado
        constructor(mokeponName) {
            this.mokeponName = mokeponName
        }  
    }

    app.get('/join', (req, res) => { //Le indico a expess que cuando reciba una peticion en el endpoint indicado responda:

        const id = `${Math.random()}` //Genera un ID random para el jugador
        const player = new Player(id) //En el JSON Player genero un objeto key:value el resultado del math.random

        players.push(player)
        res.setHeader('Access-Control-Allow-Origin', '*') //Envio un header para abrir la conexion universalmente (*)
        res.send(id) //Envia el argumento
    })

    app.post('/mokepon/:playerID',(req,res) => { //Envio datos (post)
        const playerID = req.params.playerID || '' //Extrae de la URL los parametros o devuelve un valor vacio
        const mokeponName = req.body.mokepon || '' //Extrae el body de lo enviado
        const mokepon = new Mokepon(mokeponName) //Crea el objeto y le da el argumento
        const playerIndex = players.findIndex((player) => playerID === player.id) //Busca en el ARRAY, en caso de no existir el dato trae un -1
        
        if(playerIndex >= 0) {
            players[playerIndex].mokeponAsigned(mokepon) //Asocia una posicion del ARRAY con el argumento devuelto
        }
        console.log(players)
        console.log(playerID)
        res.end() //Finalizo la respuesta para que el servidor no quede loopeando
    })

    app.post('/mokepon/:playerID/localitation', (req, res) => {
        const playerID = req.params.playerID || ''
        const x = req.body.x || 0
        const y = req.body.y || 0

        const playerIndex = players.findIndex((player) => playerID === player.id)
        
        if(playerIndex >= 0) {
            players[playerIndex].positionUpdate(x, y)
        }

        const enemys = players.filter((player) => playerID !== player.id)

        res.send({
            enemys
        })
    })

    app.post('/mokepon/:playerID/attacks',(req,res) => {
        const playerID = req.params.playerID || ''
        const attacks = req.body.attacks || []

        const playerIndex = players.findIndex((player) => playerID === player.id)
        
        if(playerIndex >= 0) {
            players[playerIndex].attacksAsigned(attacks)
        }

        res.end()
    })

    app.get('/mokepon/:playerID/attacks', (req, res) => {
        const playerID = req.params.playerID || ''
        const player = players.find((player) => player.id === playerID)
        res.send({
            attacks: player.attacks || []
        })
    })

    app.listen(8080, () => { //Le pido al servidor que este activo en un determiado puerto
        console.log('Of corpse, papà. It`s alive')
    })
