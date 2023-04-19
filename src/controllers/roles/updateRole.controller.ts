import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import RoleRepository from '../../core/repositories/roleRepository';
import { serverError, success } from '../../helpers/http-helper';


export default class UpdateRole implements Controller {

  constructor(
    private readonly roleRepository: RoleRepository
  ) {
    this.roleRepository = roleRepository

  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const id = httpRequest.params.rolId
      const role = await this.roleRepository.update(id, httpRequest.body)
      return success(role, 'Rol actualizado')
    } catch (error) {
      return serverError(error)
    }
  }
}
