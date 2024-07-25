import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

// import { UserRepository } from "../../../domain/repositories";

import { HttpHelper } from "../../../shared/helpers";

export class LogOutController implements Controller {
  constructor(/*private readonly userRepository: UserRepository*/) {}

  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // const { id } = httpRequest.params;

      // await this.userRepository.update(id);

      return HttpHelper.success({}, "Sesión cerrada");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
