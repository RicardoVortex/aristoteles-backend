import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import Role from '../../db/models/role.model';
import RoleRepository from '../../core/repositories/roleRepository';



export default class CreateRole implements Controller {

  constructor(
    private readonly roleRepository: RoleRepository
  ){
    this.roleRepository = roleRepository
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const role = await this.roleRepository.create(httpRequest.body)
      return success<Role>(role, 'Rol creado')
    } catch (error) {
      console.log(error);
      return serverError(error)
    }
  }
}
