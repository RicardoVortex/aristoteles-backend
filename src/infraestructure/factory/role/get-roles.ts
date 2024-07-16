import { GetRolesController } from "../../../presentation/controllers/roles";

import { RoleDataSource } from "../../datasource";

export const makeGetRolesController = (): GetRolesController => {
  const roleRepository = new RoleDataSource();

  const roleDetail = new GetRolesController(roleRepository);

  return roleDetail;
};
