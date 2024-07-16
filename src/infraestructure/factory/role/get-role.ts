import { GetRoleController } from "../../../presentation/controllers/roles";

import { RoleDataSource } from "../../datasource";

export const makeDetailRoleController = (): GetRoleController => {
  const roleRepository = new RoleDataSource();

  const roleDetail = new GetRoleController(roleRepository);

  return roleDetail;
};
