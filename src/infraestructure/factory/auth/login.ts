import { LoginUserController } from "../../../presentation/controllers/auth";

import { AuthDataSource, UserDataSource } from "../../../domain/datasource";

export const makeLoginUserController = (): LoginUserController => {
  const authRepository = new AuthDataSource();
  const userRepository = new UserDataSource();

  const login = new LoginUserController(authRepository, userRepository);

  return login;
};
