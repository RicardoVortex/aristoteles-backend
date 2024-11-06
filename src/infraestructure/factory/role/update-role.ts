import { UpdateRoleController } from "../../../presentation/controllers/roles";

import { RoleDataSource } from "../../../domain/datasource";

export const makeUpdateRoleController = (): UpdateRoleController => {
  const roleRepository = new RoleDataSource();

  const updateRole = new UpdateRoleController(roleRepository);

  return updateRole;
};
