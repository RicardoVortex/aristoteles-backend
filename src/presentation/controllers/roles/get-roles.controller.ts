import { RoleEntity } from "../../../domain/entities/role.entity";
import { RoleRepository } from "../../../domain/repositories/role.repository";

import { HttpHelper } from "../../../shared/helpers";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import { HttpResponse } from "../../../infraestructure/interfaces/http-interface";

export class GetRolesController implements Controller {
  constructor(private readonly roleRepository: RoleRepository) {}

  async handle(): Promise<HttpResponse> {
    try {
      const roles = await this.roleRepository.getAll();

      return HttpHelper.success<RoleEntity[]>(
        roles,
        "Roles obtenidos correctamente"
      );
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
