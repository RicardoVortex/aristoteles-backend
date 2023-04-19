import RecoveryPassword from '../../controllers/auth/recoveryPassword.controller';
import AuthDataSource from '../../dataSources/auth.datasource';
import UserDataSource from '../../dataSources/user.datasource';


export const makeRecoveryPasswordController = (): RecoveryPassword => {

  const authRepository = new AuthDataSource()
  const userRepository = new UserDataSource()

  const recovery = new RecoveryPassword(authRepository, userRepository)

  return recovery


}
