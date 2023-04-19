
import { Controller } from '../../core/interfaces/controllers';
import RoleRepository from '../../core/repositories/roleRepository';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';



export default class DeleteRole implements Controller {

  constructor(
    private readonly roleRepository: RoleRepository
  ) {
    this.roleRepository =roleRepository

  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const id = httpRequest.params.rolId
      const role = await this.roleRepository.delete(id)
      return success(role, 'Rol eliminado')
    } catch (error) {
      return serverError(error)
    }
  }
}
