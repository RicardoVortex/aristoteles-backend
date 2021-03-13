'use strict'

module.exports = function setupUsuario(Usuarios) {

    function findAll(cond) {
        return Usuarios.findAll(cond)
    }

    function findById(id) {
        const cond = {
            where: {
                usuario_id: id
            }
        }
        return Usuarios.findOne(cond)
    }

    function findAllByRolId(id) {
        const cond = {
            where: {
                rol_id: id
            }
        }
        return Usuarios.findAll(cond);
    }

    async function create(usuario) {
        const result = await Usuarios.create(usuario)
        return result.toJSON()
    }

    async function update (usuario) {
        const cond = {
            where: {
                usuario_id: usuario.usuario_id
            }
        }
        const update = await Usuarios.update(usuario, cond)
        return update
    }

    function findByEmail(correo) {
        const cond = {
            where: {
                correo: correo
            }
        }
        return Usuarios.findOne(cond);
    }

    function findBySocket(idsocket) {
        const cond = {
            where: {
                idsocket
            }
        }
        return Usuarios.findOne(cond);
    }

    function findByEmailAndPin(correo, pin) {
        const cond = {
            where: {
                correo,
                pin_verificacion: pin
            }
        }
        return Usuarios.findOne(cond);
    }

    function test() { return Usuarios.findOne({ limit: 1 }) }

    return {
        findAll,
        findById,
        test,
        create,
        findAllByRolId,
        update,
        findByEmail,
        findByEmailAndPin,
        findBySocket
    }
}