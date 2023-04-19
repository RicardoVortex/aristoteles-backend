
import { Strategy, ExtractJwt } from 'passport-jwt'
import  { config } from'../../../config'
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret,
}

const jwtStrategy = new Strategy(options, (payload, done) => {

  return done(null, payload)
})

export default jwtStrategy
