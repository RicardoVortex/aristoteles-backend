'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config/config')
const secret = config().secret
const { respuesta, errorCliente } = require('../respuestas/respuestas')
const db = require('../models/dbConnectionModel')
const { asyncMiddleware } = require('../middlewares/errorHandle')
const configpostgres = config().configpostgres

let Usuarios

const postgres = asyncMiddleware(async function () {
  const services = await db(configpostgres)
  Usuarios = services.Usuarios
})

postgres()

const middelwares = {
  validateTokenJWT: async function (req, res, next) {
    const auth = req.headers.authorization
    if (auth) {
      const token = auth.split(' ')[1]
      let usuario
      try {
        usuario = jwt.verify(token, secret)
      } catch (error) {
        usuario = false
      }

      if (!usuario.usuario_id) {
        usuario = false
      }

      if (usuario) {
        const usuario_id = usuario.usuario_id
        const usuarioBD = await Usuarios.findById(usuario_id)

        if (!usuarioBD.sesion_activa) {
          return errorCliente(req, res, null, 401, false, 'hubo un error intentalo mas tarde', 'El usuario no tiene sesion iniciada', 401)
        } else {
          req.user = usuario
          next()
        }
      } else {
        return errorCliente(req, res, null, 401, false, 'hubo un error intentalo mas tarde', 'token invalido', 401)
      }
    } else {
      return errorCliente(req, res, null, 401, false, 'hubo un error intentalo mas tarde', 'token faltante', 401)
    }
  },
  generateTokenJWT: (info) => {
    const token = jwt.sign(info, secret)
    return token
  }
}
module.exports = middelwares
