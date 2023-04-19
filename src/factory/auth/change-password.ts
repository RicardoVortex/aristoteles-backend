import ChangePassword from "../../controllers/auth/changePassword.controller";
import AuthDataSource from '../../dataSources/auth.datasource';
import UserDataSource from '../../dataSources/user.datasource';


export const makeChangePasswordController = (): ChangePassword => {

  const authRepository = new AuthDataSource()
  const userRepository = new UserDataSource()
  const user = new ChangePassword(authRepository, userRepository)
  return user
}
