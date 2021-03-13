'use strict'

const configserve = require('./src/config/config')
const configpostgres = configserve().configpostgres
const PORT = configserve().port
const key = configserve().key
const cert = configserve().cert
const keyruta = configserve().keyruta
const certruta = configserve().certruta
const ca_root = configserve().ca_root
const ca_bundle = configserve().ca_bundle
const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const https = require('https')
const http = require('http').Server(app)

// const db = require('./Model/dbConnectionModel')
const auth = require('./src/middlewares/auth').auth
const routes = require('./src/routes')
const bodyParser = require('body-parser')
const morgan = require('morgan')

let io

if (process.env.NODE_ENV == 'production') {
  https.createServer({
    ca: [fs.readFileSync(ca_root), fs.readFileSync(ca_bundle)],
    key: fs.readFileSync(keyruta),
    cert: fs.readFileSync(certruta)
  }, app).listen(PORT, function () {
    console.log(`App listening on ${PORT} !`)
  })
  io = require('socket.io')(https)
} else {
  io = require('socket.io')(http)
  http.listen(PORT, async function () {
    console.log(`App listening on ${PORT} !`)
  })
}

const ioConect = require('./microservices/socket_io')
const conection = ioConect.start(io)

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(morgan('dev'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  // intercepts OPTIONS method
  if (req.method === 'OPTIONS') {
    console.log('metodoptions')
    // respond with 200
    res.send(200)
  } else {
    // move on
    next()
  }
})

app.use('/static', express.static(path.join(__dirname, './public')))

app.use('/', routes)

app.use((err, req, res, next) => {
  console.log('Error dice: ', err)
  return res.status(500).json({
    exitoso: false,
    codigo: 500,
    mensaje: 'Hubo un error inténtelo mas tarde.',
    novedad: err.message,
    resultado: null
  })
})
