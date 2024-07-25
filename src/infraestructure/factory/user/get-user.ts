import { GetUserController } from "../../../presentation/controllers/users";

import { UserDataSource } from "../../datasource";

export const makeGetUserController = (): GetUserController => {
  const userRepository = new UserDataSource();

  const getUsers = new GetUserController(userRepository);

  return getUsers;
};
