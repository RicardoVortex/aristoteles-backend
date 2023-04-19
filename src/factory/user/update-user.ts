import UpdateUser from "../../controllers/users/update.controllers"
import UserDataSource from '../../dataSources/user.datasource';

export const makeUpdateUserController = (): UpdateUser => {

  const userRepository = new UserDataSource()

  const userUpdate = new UpdateUser(userRepository)

  return userUpdate
}
