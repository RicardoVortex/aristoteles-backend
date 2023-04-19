import UpdateRole from '../../controllers/roles/updateRole.controller';
import RoleDataSource from '../../dataSources/role.datasource';



export const makeUpdateRoleController = (): UpdateRole => {

  const roleRepository = new RoleDataSource()

  const updateRole = new UpdateRole(roleRepository)
  return updateRole
}
