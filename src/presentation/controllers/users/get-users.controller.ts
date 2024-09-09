import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import { HttpResponse } from "../../../infraestructure/interfaces/http-interface";

import { HttpHelper } from "../../../shared/helpers";

export class GetUsersController implements Controller {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.userRepository.getAll();

      return HttpHelper.success<UserEntity[]>(
        users,
        "Usuarios obtenidos correctamente"
      );
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
