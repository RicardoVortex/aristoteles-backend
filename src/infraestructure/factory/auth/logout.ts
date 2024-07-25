import { LogOutController } from "../../../presentation/controllers/auth";

// import { UserDataSource } from "../../datasource";

export const makeLogOutUserController = (): LogOutController => {
  // const userRepository = new UserDataSource();

  const logout = new LogOutController();

  return logout;
};
