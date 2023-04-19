import RegisterUser from '../../controllers/users/register.controller';
import UserDataSource from '../../dataSources/user.datasource';
import EmailNotifier from '../../dataSources/emailNotify.datasource';

export const  makeRegisterUserController = (): RegisterUser => {

  const userRepository = new UserDataSource()
  const notifierRepository = new EmailNotifier()
  const userRegister = new RegisterUser(userRepository, notifierRepository)

  return userRegister
}
