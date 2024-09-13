import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

import { HttpHelper } from "../../../shared/helpers/http-helper";

import { AuthRepository, UserRepository } from "../../../domain/repositories";
import { CustomError } from "../../../domain/errors/custom.error";
import { UserLoginOutput } from "../../../domain/entities";

export class LoginUserController implements Controller {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password: passwordBody } = httpRequest.body;

      const user = await this.userRepository.getByEmail(email);

      const isMatching = this.authRepository.compare(
        passwordBody,
        user.password!
      );

      if (!isMatching) {
        throw CustomError.badRequest("La contraseña no es valida");
      }

      const token: string = this.authRepository.signToken({
        id: user.id,
        role_id: user.role_id,
      });

      await this.userRepository.update(user.id, { last_login: new Date() });

      // const { password, ...userLogin } = UserEntity.fromObject(user);
      const { password, ...userLogin } = user;

      const usertipo = userLogin as UserLoginOutput;

      // return HttpHelper.success({ ...userLogin, token }, "Login exitoso");
      return HttpHelper.success({userLogin: usertipo.dataValues, token }, "Login exitoso");
    } catch (error) {
      console.log(
        "🚀 ~ file: login.controller.ts:56 ~ LoginUser ~ handle ~ error:",
        error
      );

      return HttpHelper.serverError(error);
    }
  }
}
