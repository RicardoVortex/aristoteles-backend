import { UpdateRoleController } from "../../../presentation/controllers/roles";

import { RoleDataSource } from "../../datasource";

export const makeUpdateRoleController = (): UpdateRoleController => {
  const roleRepository = new RoleDataSource();

  const updateRole = new UpdateRoleController(roleRepository);

  return updateRole;
};
