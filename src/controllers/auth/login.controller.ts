// import saveUser from '../core/interactors'

// import {Request, Response, NextFunction} from 'express'
// import respuesta from '../../helpers/respuesta'
// import IUser from '../../core/entities/User';
// import {auth} from '../../core/interactors'
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import AuthRepository from '../../core/repositories/authRepository';
import UserRepository from '../../core/repositories/userRepository';


// const loginUser = async(req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user: any = req.user
//     const data: IUser = {
//       ...user.dataValues
//     }
//     const payload = {
//       sub: data.id,
//       role: data.roleId
//     }

//     const token = auth.generateToken(payload)
//     const userLogin = await auth.changeLogin(data.id, true )

//     return respuesta(res, true, 200, 'Registro completado', {user: userLogin, token} )

//   } catch (error) {
//     next(error)
//   }
// }

export default class LoginUser implements Controller {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly userRepository: UserRepository,
    ) {
      this.authRepository = authRepository
      this.userRepository = userRepository
    }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const user: any = httpRequest.user

            const payload = {
              sub: user.dataValues.id,
              role: user.dataValues.roleId
            }
            const token = this.authRepository.signToken(payload)
            const userLogin = await this.userRepository.update(user.dataValues.id, {login: true})
            return success({user: userLogin, token}, 'Login exitoso')
        } catch (error) {
            console.log("🚀 ~ file: login.controller.ts:56 ~ LoginUser ~ handle ~ error:", error)
            return serverError(error)
        }
    }
}

