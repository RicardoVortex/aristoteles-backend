import { ValiodateCodeController } from "../../../presentation/controllers/auth";

import { AuthDataSource, UserDataSource } from "../../datasource";

export const makeValidateCodeController = (): ValiodateCodeController => {
  const authRepository = new AuthDataSource();
  const userRepository = new UserDataSource();

  const code = new ValiodateCodeController(authRepository, userRepository);

  return code;
};
