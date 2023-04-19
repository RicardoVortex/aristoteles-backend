import { Router } from 'express'
import passport from 'passport'

import validatorHandler from '../middlewares/validator.handler';
import { recoveryPassSchema, changePasswordSchema } from '../schemas/auth.schema';
import changePassword from '../controllers/auth/changePassword.controller';
import { AdapterRoute } from '../adapters/express-adapter';
import { makeChangePasswordController } from '../factory/auth/change-password';
import { makeLoginUserController } from '../factory/auth/login';
import { makeLogOutUserController } from '../factory/auth/logout';
import { makeRecoveryPasswordController } from '../factory/auth/recovery-password';


const router = Router()


// Ruta para iniciar sesión
router.post('/login',
  passport.authenticate('local', {session: false}),
  AdapterRoute(makeLoginUserController())
)


//Ruta para cerrar sesión
router.get('/logout',
  passport.authenticate('jwt', { session: false }),
  AdapterRoute(makeLogOutUserController())
)

//Ruta para recuperar contraseña (envio de correo)
router.post('/recovery', validatorHandler(recoveryPassSchema, 'body'), AdapterRoute(makeRecoveryPasswordController()) )


//Ruta para cambiar la contraseña
router.post('/change-password', validatorHandler(changePasswordSchema, 'body'), AdapterRoute(makeChangePasswordController()))


//Ruta para refrescar token
// router.get('/refresh-token', passport.authenticate('jwt', {session: false} ), refreshToken )

export default router


