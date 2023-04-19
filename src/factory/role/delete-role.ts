import RoleDataSource from '../../dataSources/role.datasource';
import DeleteRole from '../../controllers/roles/deleteRole.controller';


export const  makeDeleteRoleController = (): DeleteRole => {

  const roleRepository = new RoleDataSource()
  const roleDelete = new DeleteRole(roleRepository)

  return roleDelete
}
