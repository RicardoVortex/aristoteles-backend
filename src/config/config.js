'use strict'
const nodemailer = require('nodemailer')
module.exports = function config () {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const configEmail = nodemailer.createTransport({
    // host: 'smtp.gmail.com', // account.smtp.host,
    // port: 465, // account.smtp.port,
    // secure: true, // account.smtp.secure,
    service: 'gmail',
    auth: {
      user: 'cesar.garzon@parquesoftbogota.com',
      pass: 'bcxhqldqdzfrvqbi'
    }//
    // debug: true, // show debug output
  // logger: true // log information in console
  })
  /*
    const configEmail = nodemailer.createTransport({
    host: 'mail.vortexsoluciones.com', // account.smtp.host,
    port: 465, // account.smtp.port,
    secure: true, // account.smtp.secure,
    auth: {
      user: 'cesar.garzon@vortexsoluciones.com',
      pass: '**l)qQA$kHvG'
    }
  })
*/
  /*  const configEmail = nodemailer.createTransport({
    host: 'smtp.mailtrap.io', // account.smtp.host,
    port: 2525, // account.smtp.port,
    secure: false, // account.smtp.secure,
    auth: {
      user: '72c7d610e98d24',
      pass: 'a32014f88e8f85'
    }
  }) */

  const config = {
    encryptionMethod: 'AES-256-CBC',
    secretEncript: 'My32charPasswordAndInitVectorStr',
    desarrollo: true,
    inTestEnvironment: true,
    port: 3000,
    portArchivos: 3001,
    hostArchivos: 'localhost',
    host: 'localhost',
    secure: false,
    charset: 'utf8',
    configpostgres: {
      database: process.env.DB_NAME || 'aristoteles_db',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'root',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      dialect: 'postgres',
      logging: false,
      freezeTableName: false,
      // logging: s => console.log(s), //muestra todo lo de la base de datos
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
      },
      dialectOptions: {
        useUTC: false // for reading from database
      },
      timezone: '-05:00' // for writing to database
    },
    transporter: configEmail,
    secret: 'secretoJWT',
    keyruta: '/etc/httpd/ssl/server.key',
    certruta: '/etc/httpd/ssl/server.crt',
    ca_root: '/etc/httpd/ssl/ca_root.ctr',
    ca_bundle: '/etc/httpd/ssl/ca_bundle.ctr',
    // Rango de paginacion
    rango: 15,
    // rounds bycript
    saltRounds: 10
  }

  return config
}
