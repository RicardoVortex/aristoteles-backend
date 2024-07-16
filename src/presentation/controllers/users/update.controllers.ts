import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";

import { HttpHelper } from "../../../shared/helpers";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

export class UpdateUserController implements Controller {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    const data = httpRequest.body;

    const user = await this.userRepository.update(id, data);

    try {
      return HttpHelper.success<UserEntity>(
        user,
        "Usuario actualizado correctamente"
      );
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
