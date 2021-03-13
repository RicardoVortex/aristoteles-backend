'use strict'

const Sequalize = require('sequelize')
const setupDatabase = require('../DAOS/db')

module.exports = function(config) {
    const sequalize = setupDatabase(config)

    return sequalize.define('Usuarios', {

        usuario_id: {
            type: Sequalize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        correo: {
            type: Sequalize.STRING,
            allowNull: false
                
        },
        contrasena: {
            type: Sequalize.STRING,
            allowNull: false
        },
        rol_id: {
            type: Sequalize.INTEGER,
            allowNull: false
            // llave foranea
        },
        pin_verificacion: {
            type: Sequalize.INTEGER,
            allowNull: true
        },
        cuenta_activa: {
            type: Sequalize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sesion_activa: {
            type: Sequalize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        idsocket: {
            type: Sequalize.STRING,
            allowNull: true
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        freezeTableName: false,
        tableName: 'Usuarios',
        timestamps: false
    });
}