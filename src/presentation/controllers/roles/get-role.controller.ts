import { RoleEntity } from "../../../domain/entities/role.entity";
import { RoleRepository } from "../../../domain/repositories/role.repository";

import { HttpHelper } from "../../../shared/helpers";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

export class GetRoleController implements Controller {
  constructor(private readonly roleRepository: RoleRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const rol = await this.roleRepository.getOne(id);

      return HttpHelper.success<RoleEntity>(rol, "Rol obtenido correctamente");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
