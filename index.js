const Server = require("./models/server");
require('dotenv').config()

const server = new Server();

server.execute()

//socket cliente que se conecto,(del lado del servidor)
//io.on("connection", (socket) => {
//	//usualmente se envian objetos
//	//	socket.emit("mensaje-bienvenida", {
//	//		msg: "Bienvenido al server",
//	//		fecha: new Date(),
//	//	});

//	socket.on("mensaje-to-server", (data) => {
//		console.log(data);
//		//Socket cliente que disparo el mensaje
//		//socket.emit("mensaje-from-server", data)

//		//io global en todo el mismo namespace
//		io.emit("mensaje-from-server", data);
//	});
//});
