import { Router } from 'express'
import passport from 'passport'

import validatorSession from '../middlewares/validate.sesion'
import validatorHandler from '../middlewares/validator.handler'
import { changeStatusUserSchema, createUserSchema, getUserSchema, updateUserSchema, updatePasswordSchema } from '../schemas/user.schema';
import { checkRoles } from '../middlewares/auth.handler'
import { roles } from '../config'
import { AdapterRoute } from '../adapters/express-adapter';
import { makeRegisterUserController } from '../factory/user/create-user';
import { makeGetUsersController } from '../factory/user/get-users';
import { makeUpdateUserController } from '../factory/user/update-user';
import { makeUpdatePasswordController } from '../factory/user/update-password';

const router = Router()

//Ruta para registrar usuarios
//!V2
router.post('/register', validatorHandler(createUserSchema, 'body'), AdapterRoute(makeRegisterUserController()))


//Ruta para editar usuarios
router.put('/update/:id',
  // passport.authenticate('jwt', { session: false }),
  // validatorSession(userRepository),
  // checkRoles(roles.admin),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  AdapterRoute(makeUpdateUserController())
)

//Ruta para listar usuarios
//!V2
router.get('/list', AdapterRoute(makeGetUsersController()))



//Ruta pra deshabilitar usuarios
router.put('/change-status/:id',
  // passport.authenticate('jwt', {session: false} ),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(changeStatusUserSchema, 'body'),
  AdapterRoute(makeUpdateUserController())
)

router.patch('/change-password/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updatePasswordSchema, 'body'),
  AdapterRoute(makeUpdatePasswordController())
)


export default router


