import LogOut from '../../controllers/auth/logout.controller';
import UserDataSource from '../../dataSources/user.datasource';

export const makeLogOutUserController = (): LogOut => {

  const userRepository = new UserDataSource()
  const logout = new LogOut( userRepository)

  return logout
}
