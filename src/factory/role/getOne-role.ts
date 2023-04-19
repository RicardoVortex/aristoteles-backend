import GetDetailRole from '../../controllers/roles/getDetailRole.controller';
import RoleDataSource from '../../dataSources/role.datasource';


export const makeDetailRoleController = (): GetDetailRole => {
  const roleRepository = new RoleDataSource()
  const roleDetail = new GetDetailRole(roleRepository)
  return roleDetail
}
