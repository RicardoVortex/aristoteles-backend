import { ChangePasswordController } from "../../../presentation/controllers/auth";

import { AuthDataSource, UserDataSource } from "../../../domain/datasource";

export const makeChangePasswordController = (): ChangePasswordController => {
  const authRepository = new AuthDataSource();
  const userRepository = new UserDataSource();

  const user = new ChangePasswordController(authRepository, userRepository);

  return user;
};
