import { UpdateUserController } from "../../../presentation/controllers/users";

import { UserDataSource } from "../../datasource";

export const makeUpdateUserController = (): UpdateUserController => {
  const userRepository = new UserDataSource();

  const userUpdate = new UpdateUserController(userRepository);

  return userUpdate;
};
