import GetUsers from "../../controllers/users/getUsers.controller";
import UserDataSource from '../../dataSources/user.datasource';


export const makeGetUsersController = (): GetUsers => {

  const userRepository = new UserDataSource()
  const getUsers = new GetUsers(userRepository)

  return getUsers
}
