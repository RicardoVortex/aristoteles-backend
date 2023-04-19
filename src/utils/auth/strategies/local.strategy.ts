
import { Strategy } from 'passport-local'
import AuthDataSource from '../../../dataSources/auth.datasource'

const authDataSource = new AuthDataSource()
const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (email, password, done) => {
  try {
    const user = await authDataSource.getUser(email, password)
    done(null, user)
  } catch (error) {
    done(error, false)
  }
})

export default localStrategy
