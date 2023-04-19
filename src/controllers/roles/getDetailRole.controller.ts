import {Request, Response, NextFunction} from 'express'
import respuesta from '../../helpers/respuesta'
import { Controller } from '../../core/interfaces/controllers';
import RoleRepository from '../../core/repositories/roleRepository';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import Role from '../../db/models/role.model';


export default class GetDetailRole implements Controller {

  constructor(
    private readonly roleRepository: RoleRepository
  ) {
    this.roleRepository = roleRepository

  }


  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const id = httpRequest.params.rolId
      const rol = await this.roleRepository.getOne(id)
      return success<Role>(rol, 'Detalle del rol')
    } catch (error) {
      return serverError(error)
    }
  }
}
