import CreateRole from '../../controllers/roles/createRole.controller';
import RoleDataSource from '../../dataSources/role.datasource';


export const  makeCreateRoleController = (): CreateRole => {

  const roleRepository = new RoleDataSource()
  const roleCreate = new CreateRole(roleRepository)

  return roleCreate
}
