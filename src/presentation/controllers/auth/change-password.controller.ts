import { Controller } from "../../../infraestructure/interfaces/controllers";

import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

import { AuthRepository, UserRepository } from "../../../domain/repositories";

import { HttpHelper } from "../../../shared/helpers";

export class ChangePasswordController implements Controller {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { token, newPassword, code } = httpRequest.body;

      const { id } = this.authRepository.verifyToken(token);

      const user = await this.userRepository.getOne(id);

      await this.authRepository.changePassword({
        token,
        newPassword,
        user,
        code,
      });

      return HttpHelper.success({}, "Cambio de contraseña exitoso");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
