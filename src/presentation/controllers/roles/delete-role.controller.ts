import { RoleRepository } from "../../../domain/repositories/role.repository";

import { HttpHelper } from "../../../shared/helpers";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

export class DeleteRoleController implements Controller {
  constructor(private readonly roleRepository: RoleRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      await this.roleRepository.delete(id);

      return HttpHelper.success({}, "Rol eliminado correctamente");
    } catch (error) {
      console.log(error);

      return HttpHelper.serverError(error);
    }
  }
}
