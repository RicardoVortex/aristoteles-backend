import { RoleEntity } from "../../../domain/entities/role.entity";
import { RoleRepository } from "../../../domain/repositories/role.repository";

import { HttpHelper } from "../../../shared/helpers/http-helper";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

export class CreateRoleController implements Controller {
  constructor(private readonly roleRepository: RoleRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, description } = httpRequest.body;

      const role = await this.roleRepository.create({ name, description });

      return HttpHelper.success<RoleEntity>(role, "Rol creado exitosamente");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
