import { RoleRepository } from "../../../domain/repositories/role.repository";

import { HttpHelper } from "../../../shared/helpers";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

export class UpdateRoleController implements Controller {
  constructor(private readonly roleRepository: RoleRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const role = await this.roleRepository.update(id, httpRequest.body);

      return HttpHelper.success(role, "Rol actualizado correctamente");
    } catch (error) {
      return HttpHelper.serverError(error);
    }
  }
}
