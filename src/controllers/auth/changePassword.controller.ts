
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import AuthRepository from '../../core/repositories/authRepository';
import jwt from 'jsonwebtoken';
import { config } from '../../config/index';
import UserRepository from '../../core/repositories/userRepository';



// const changePassword = async(req: Request, res: Response, next: NextFunction) => {
//   try {
//     const {token, newPassword} = req.body
//     await auth.changePassword(token, newPassword)
//     return respuesta(res, true, 200, 'Contraseña cambiada')
//   } catch (error) {
//     next(error)
//   }
// }

// export default changePassword

export default class ChangePassword implements Controller {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
  ){
    this.authRepository = authRepository
    this.userRepository = userRepository
  }


  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const {token, newPassword, code} = httpRequest.body

      //Verificar token
      const { sub } = jwt.verify(token, config.secretPassword)

      //Buscar el usuario al que pertenece el token
      const id = parseInt(sub as string)
      const user = await this.userRepository.getById(id)


      //Enviar usuario para cambio de contraseña
      await this.authRepository.changePassword(token, newPassword, user, code)


      return success({}, 'Cambio de contraseña exitoso')
    } catch (error) {
      return serverError(error)
    }
  }
}
