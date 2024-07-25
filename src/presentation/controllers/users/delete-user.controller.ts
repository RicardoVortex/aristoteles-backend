import { UserRepository } from "../../../domain/repositories/user.repository";

import { HttpHelper } from "../../../shared/helpers";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

export class DeleteUserController implements Controller {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    await this.userRepository.delete(id);

    try {
      return HttpHelper.success({}, "Usuario eliminado correctamente");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
