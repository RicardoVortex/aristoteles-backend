import UserDataSource from '../../dataSources/user.datasource';
import UpdatePassword from '../../controllers/users/updatePassword.controller';


export const makeUpdatePasswordController = (): UpdatePassword => {

  const userRepository = new UserDataSource()

  const user = new UpdatePassword(userRepository)

  return user
}
