//inicia io
'use strict'
const config = require('../../src/config/config')
const db = require('../../src/models/dbConnectionModel');
const { asyncMiddleware } = require('../../src/middlewares/errorHandle');
const configpostgres = config().configpostgres;

let Usuarios
let Emprendedores

var postgres = asyncMiddleware(async function () {
	const services = await db(configpostgres)
	Usuarios = services.Usuarios
	Emprendedores = services.Emprendedores
})

postgres()

module.exports = {
	start: async function (io) {

		return io.on('connection', function (socket) {

			console.log('cliente conectado - socket:', socket.id)

			socket.on('prueba', (data) => {
				console.log(`el cliente: ${socket.id} envia `, data)
			})

			socket.on('registrar', async (empr_id) => {
				let emprendedor = await Emprendedores.findById(empr_id)

				if (emprendedor) {
					let usuario = await Usuarios.findById(emprendedor.usuario_id)

					let usuarioUpdate = {
						usuario_id: usuario.usuario_id,
						idsocket: socket.id
					}

					await Usuarios.update(usuarioUpdate);
					
					io.to(socket.id).emit('log', { msj: 'registro correcto' })
				}else{
					io.to(socket.id).emit('log', { msj: 'no existe emprendedor' })
				}
			})

			io.to(socket.id).emit('pedirregistro', " conectado al servidor correctamente")

			io.to(socket.id).emit('log', " conectado al servidor: " + Date() + " " + socket.id)

			socket.on('disconnect', async()=>{
				let usuario = await Usuarios.findBySocket(socket.id)

				if(usuario){
					let usuarioUpdate = {
						usuario_id: usuario.usuario_id,
						idsocket: null
					}

					await Usuarios.update(usuarioUpdate);
				}

				console.log('cliente desconectado - socket:', socket.id)
			})
		})


	}
}
