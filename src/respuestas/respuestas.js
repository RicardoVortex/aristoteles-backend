/*
Repuesta con los parametros resultado, status, exitoso, novedad, mensaje, codigo
 */
exports.respuesta = function (req, res, resultado, status, exitoso, novedad, mensaje, codigo) {
  return res.status(status || 200).json({
    exitoso: exitoso || true,
    codigo: codigo || 200,
    mensaje: mensaje || 'Proceso realizado Correctamente.',
    resultado: resultado || null,
    novedad: novedad || null
  })
}

exports.errorCliente = function (req, res, resultado, status, exitoso, novedad, mensaje, codigo) {
  return res.status(status || 401).json({
    exitoso: exitoso || false,
    codigo: codigo || 401,
    mensaje: mensaje || 'hubo un error inténtelo mas tarde.',
    resultado: resultado || null,
    novedad: novedad || null
  })
}

exports.notificacionGeneral = function (socket, event, data, usuario) {
  const notifiacion = {
    empr_id: usuario,
    resultado: data
  }
  socket.emit(event, notifiacion)
}

exports.notificacionPersonal = function (io, socketId, event, data, usuario, mensaje) {
  const notifiacion = {
    mensaje,
    empr_id: usuario,
    resultado: data
  }
  io.to(socketId).emit(event, notifiacion)
}
