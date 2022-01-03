//Servidor de express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors")

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		//HTTP SERVER

		this.server = http.createServer(this.app);

		//CONFIGURACIONES DE SOCKETS

		//configuracion del socket server
		this.io = socketio(this.server, {
			/* CONFIGURACIONES */
		});
	}


	configurarSockets(){
		new Sockets(this.io)	
	}

	middlewares() {
		//Desplegar el directorio publico
		this.app.use(express.static(path.resolve(__dirname, "../public")));
		
		//CORS
		this.app.use(cors())
	}

	execute() {
		//Inicializar middlewares
		this.middlewares()

		//Inicializar sockets
		this.configurarSockets()
			
		//Inicializar server
		this.server.listen(this.port, () => {
			console.log("Server corriendo en puerto : " + this.port);
		});
	}
}

module.exports = Server;
