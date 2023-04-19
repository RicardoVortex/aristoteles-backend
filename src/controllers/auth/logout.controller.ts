// // import saveUser from '../core/interactors'
// import { userUpdates} from '../../core/interactors'

// import {Request, Response, NextFunction} from 'express'
// import respuesta from '../../helpers/respuesta'
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import UserRepository from '../../core/repositories/userRepository';
import { success, serverError } from '../../helpers/http-helper';


// const logOut = async(req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user: any = req.user


//     await userUpdates.handle(user.sub, {login: false})

//     return respuesta(res, true, 200, 'Logout exitoso', {} )

//   } catch (error) {
//     next(error)
//   }
// }




export default class LogOut implements Controller {

  constructor(
    private readonly userRepository: UserRepository
  ){
    this.userRepository = userRepository
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const userId = httpRequest.params.id
      await this.userRepository.update(userId, { login: false })
      return success({}, 'Sesión cerrada')
    } catch (error) {
      return serverError(error)
    }
  }
}
