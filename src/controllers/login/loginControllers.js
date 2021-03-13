const { respuesta, errorCliente } = require('../../respuestas/respuestas');
const db = require('../../models/dbConnectionModel');
const config = require('../../config/config');
const configpostgres = config().configpostgres;
const { asyncMiddleware } = require('../../middlewares/errorHandle');
const { generateTokenJWT } = require('../../middlewares/auth')
const bcrypt = require('bcrypt')

let Emprendedores
let Usuarios

var postgres = asyncMiddleware(async function () {
    const services = await db(configpostgres)
    Emprendedores = services.Emprendedores
    Usuarios = services.Usuarios
})

postgres()

let login = asyncMiddleware(async (req, res) => {

    let { correo, contrasena } = req.body

    if (!correo || !contrasena) {
        return errorCliente(req, res, null, 400, false, 'hubo un error intentalo mas tarde', 'Debe enviar todos los parametros', 400);
    }

    let usuario = await Usuarios.findByEmail(correo)

    if (usuario == null) {
        return errorCliente(req, res, null, 401, false, 'hubo un error intentalo mas tarde', 'El correo no existe.', 401);
    }
    
    if(!usuario.cuenta_activa){
        return errorCliente(req, res, null, 401, false, 'hubo un error intentalo mas tarde', 'La cuenta no está activa. No puede iniciar sesion hasta que se verifique el Pin.', 401);
    }

    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!contrasenaValida) {
        return errorCliente(req, res, null, 401, false, 'hubo un error intentalo mas tarde', 'Contraseña incorrecta.', 401);
    }

    if (contrasenaValida) {
        let usuarioUpdate = {
            usuario_id: usuario.usuario_id,
            sesion_activa: true
        }
        await Usuarios.update(usuarioUpdate)

        let emprendedor = await Emprendedores.findAllByUsuarioId(usuario.usuario_id)

        let empr = {
            empr_id: emprendedor.empr_id,
            usuario_id: usuario.usuario_id
        }

        let token = generateTokenJWT(empr)

        emprendedor = await Emprendedores.findEmprendedorById(empr.empr_id)

        return respuesta(req, res, { token, emprendedor }, 200, true, null, null, 200)
    }
})


module.exports = { login };