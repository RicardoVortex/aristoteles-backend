import { CreateRoleController } from "../../../presentation/controllers/roles";

import { RoleDataSource } from "../../datasource";

export const makeCreateRoleController = (): CreateRoleController => {
  const roleRepository = new RoleDataSource();

  const roleCreate = new CreateRoleController(roleRepository);

  return roleCreate;
};
