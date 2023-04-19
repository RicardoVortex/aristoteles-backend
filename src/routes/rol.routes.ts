import { Router } from 'express'

import validatorHandler from '../middlewares/validator.handler';
import { createRoleSchema, updateRoleSchema, getRoleSchema } from '../schemas/role.schema';
import updateRole from '../controllers/roles/updateRole.controller';
import { AdapterRoute } from '../adapters/express-adapter';
import { makeCreateRoleController } from '../factory/role/create-role';
import { makeDeleteRoleController } from '../factory/role/delete-role';
import { makeDetailRoleController } from '../factory/role/getOne-role';
import { makeUpdateRoleController } from '../factory/role/update-role';


const router = Router()





//Ruta para crear rol
router.post('/',
  validatorHandler(createRoleSchema, 'body'),
  AdapterRoute(makeCreateRoleController())
)


//Ruta para listar los roles
// router.get('/', changePassword)


//Ruta para ver el detalle de un  rol
router.get('/:rolId',
  validatorHandler(getRoleSchema, 'params'),
  AdapterRoute(makeDetailRoleController())
)

//Ruta para actualizar un rol
router.put('/:rolId',
  validatorHandler(getRoleSchema, 'params'),
  validatorHandler(updateRoleSchema, 'body'),
  AdapterRoute(makeUpdateRoleController())
)

//Ruta para eliminar rol
router.delete('/:rolId',
  validatorHandler(getRoleSchema, 'params'),
  AdapterRoute(makeDeleteRoleController())
)

export default router


