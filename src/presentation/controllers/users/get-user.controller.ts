import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

import { HttpHelper } from "../../../shared/helpers";

export class GetUserController implements Controller {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const user = await this.userRepository.getOne(id);

      return HttpHelper.success<UserEntity>(
        user,
        "Usuario obtenido correctamente"
      );
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
