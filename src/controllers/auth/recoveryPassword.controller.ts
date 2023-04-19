// import {Request, Response, NextFunction} from 'express'
// import { auth } from '../../core/interactors'
// import respuesta from '../../helpers/respuesta'
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import AuthRepository from '../../core/repositories/authRepository';
import UserRepository from '../../core/repositories/userRepository';
import { codeRandom } from '../../helpers/code-random';



// const recoveryPassword = async(req: Request, res: Response, next: NextFunction) => {
//   try {

//     const {email} = req.body
//     await auth.recovery(email)
//     return respuesta(res, true, 200, 'Correo enviado',{} )
//   } catch (error) {
//     next()
//   }
// }
export default class RecoveryPassword implements Controller {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
  ){
    this.authRepository = authRepository
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const email = httpRequest.body.email
      const user = await this.userRepository.getByEmail(email)

      const code = codeRandom(6)
      await this.authRepository.sendRecovery(user, code)

      return success({}, 'Correo enviado')
    } catch (error) {
      return serverError(error)
    }
  }
}
