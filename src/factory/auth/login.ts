import LoginUser from '../../controllers/auth/login.controller';
import AuthDataSource from '../../dataSources/auth.datasource';
import UserDataSource from '../../dataSources/user.datasource';



export const makeLoginUserController = (): LoginUser => {

  const authRepository = new AuthDataSource()
  const userRepository = new UserDataSource()
  const login = new LoginUser(authRepository, userRepository)

  return login
}
