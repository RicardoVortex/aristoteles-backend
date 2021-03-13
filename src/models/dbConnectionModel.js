'use strict'

// sequelize
const setupDatabase = require('./DAOS/db')

// modelos

const setupUsuModel = require('./modelsVO/usuarios')

// funciones

const setupUsuario = require('./DAOS/usuarios')
// const setupMetric = require('./lib/metric')

const defautls = require('defaults')

// const setup = require('./setup')

let Usuarios

async function cargarBaseDatos (config) {
  /* config = defautls(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  }) */

  // inicia la base de datos
  const sequelize = setupDatabase(config)
  const setupModUsuarios = setupUsuModel(config)

  // llaves foranes emprendedores

  // Crea la base de datos si no esta creada con los valores
  // await sequelize.authenticate()

  // if (config.setup) {
  // }
  // await sequelize.sync({ force: true })

  sequelize.sync()

  Usuarios = setupUsuario(setupModUsuarios)

  // llave primaria o forenea realacion de modelos y agentes por un dato en especial
  //  const Agent = setupAgent(AgenteModel)
  //  const Metric = setupMetric(MetricsModel, AgenteModel)
  // llave primaria o forenea realacion de modelos y agentes por un dato en especial
  //  const Agent = setupAgent(AgenteModel)
  //  const Metric = setupMetric(MetricsModel, AgenteModel)
  //  const Agent = setupAgent(AgenteModel)
  //  const Metric = setupMetric(MetricsModel, AgenteModel)
}

module.exports = async function (config) {
  if (!Usuarios) {
    await cargarBaseDatos(config)
  }

  return {

    Usuarios

  }
}
