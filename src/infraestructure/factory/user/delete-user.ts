import { DeleteUserController } from "../../../presentation/controllers/users";

import { UserDataSource } from "../../datasource";

export const makeDeleteUserController = (): DeleteUserController => {
  const userRepository = new UserDataSource();

  const roleDelete = new DeleteUserController(userRepository);

  return roleDelete;
};
