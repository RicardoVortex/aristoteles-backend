import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

import { HttpHelper } from "../../../shared/helpers";

import { EmailRepository, UserRepository } from "../../../domain/repositories";

export class RegisterUserController implements Controller {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly notifierRepository: EmailRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { names, surnames, email, password, date_birth, role_id } =
        httpRequest.body;

      const user = await this.userRepository.create({
        names,
        surnames,
        email,
        password,
        date_birth,
        role_id,
      });

      await this.notifierRepository.notifyUser(user);

      return HttpHelper.success(user, "Usuario Creado");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
