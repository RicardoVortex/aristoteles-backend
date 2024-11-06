import { RegisterUserController } from "../../../presentation/controllers/users";

import { EmailDataSource, UserDataSource } from "../../../domain/datasource";

export const makeRegisterUserController = (): RegisterUserController => {
  const userRepository = new UserDataSource();
  const notifierRepository = new EmailDataSource();

  const userRegister = new RegisterUserController(
    userRepository,
    notifierRepository
  );

  return userRegister;
};
