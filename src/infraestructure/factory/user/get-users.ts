import { GetUsersController } from "../../../presentation/controllers/users";

import { UserDataSource } from "../../datasource";

export const makeGetUsersController = (): GetUsersController => {
  const userRepository = new UserDataSource();

  const getUsers = new GetUsersController(userRepository);

  return getUsers;
};
