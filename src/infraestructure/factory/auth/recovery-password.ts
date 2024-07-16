import { RecoveryPasswordController } from "../../../presentation/controllers/auth";

import {
  AuthDataSource,
  EmailDataSource,
  UserDataSource,
} from "../../datasource";

export const makeRecoveryPasswordController =
  (): RecoveryPasswordController => {
    const authRepository = new AuthDataSource();
    const userRepository = new UserDataSource();
    const emailRepository = new EmailDataSource();

    const recovery = new RecoveryPasswordController(
      authRepository,
      userRepository,
      emailRepository
    );

    return recovery;
  };
