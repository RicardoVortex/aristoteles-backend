import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

import { AuthRepository, UserRepository } from "../../../domain/repositories";

import { CustomError } from "../../../domain/errors/custom.error";
import { HttpHelper } from "../../../shared/helpers";

export class ValiodateCodeController implements Controller {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { code, token } = httpRequest.body;

      const decodedToken = await this.authRepository.verifyToken(token);

      const user = await this.userRepository.getOne(decodedToken.id);

      const validateCode = await this.authRepository.validateCode(user, code);

      if (!validateCode) {
        throw CustomError.badRequest("El código no es el correcto.");
      }

      return HttpHelper.success({}, "Código validado correctamente.");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
