const router = require('express').Router();
//const publicacionRouter = require('./publicacionRoutes');

const { validateTokenJWT } = require('../middlewares/auth')

//router.use('/login',  publicacionRouter);

router.get('/prueba', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Socket.IO Example</title>
    </head>
    <body>
      
      <label for="mensaje" >mensaje</label>
      <input class="inputMessage" name="mensaje" id="mensaje" placeholder="mensaje..."/>
      <label for="evento" >evento</label>
      <input class="inputMessage" name="evento" id="evento" placeholder="evento..."/>
      <button type="button" onclick="enviar()" >Enviar</button>
      
      <script src="/socket.io/socket.io.js"></script>
    
      <script type="text/javascript">
         var socket = io();


         socket.on('notificacion',(data)=>{
           console.log("notificacion- ",data)
         })

         socket.on('log',(data)=>{
          console.log("log- ",data)
        })

        function enviar(){
          let msg = document.getElementById('mensaje').value
          let evento = document.getElementById('evento').value

          socket.emit(evento,msg)
        }
      
        socket.on('error', (error)=> {
          console.log('WebSocket Error - ' + error);
        });

        socket.on('pedirregistro', ()=> {
          console.log('toca registrarse');
        });


      </script>
    </body>
    </html>
    `)

})

module.exports = router;
