import { DeleteRoleController } from "../../../presentation/controllers/roles";

import { RoleDataSource } from "../../datasource";

export const makeDeleteRoleController = (): DeleteRoleController => {
  const roleRepository = new RoleDataSource();

  const roleDelete = new DeleteRoleController(roleRepository);

  return roleDelete;
};
