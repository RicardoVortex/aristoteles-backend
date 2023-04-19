import boom from '@hapi/boom'
import { NextFunction, Response, Request } from 'express';
import {ObjectSchema} from 'joi';
import UserRepository from '../core/repositories/userRepository';


const validatorSession = (userRepository: UserRepository ) =>
  async (req: Request, res: Response, next: NextFunction) => {

  const user: any = req.user
  const {login} = await userRepository.getById(user.sub)


  if(!login){
    next(boom.badRequest(`Error en la petición - no tiene sesión iniciada`))
  }
  next()
}


export default validatorSession
