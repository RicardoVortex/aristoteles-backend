

import IUser from '../../core/entities/User';

import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import UserRepository from '../../core/repositories/userRepository';
import { NextFunction } from 'express';



export default class GetUsers implements Controller {

  constructor(
    private readonly userRepository: UserRepository
  ){
    this.userRepository = userRepository
  }
  async handle(httpRequest: HttpRequest, httpNext: NextFunction): Promise<HttpResponse> {


    try {
      const users = await this.userRepository.find()

      return success<IUser[]>(users, 'Lista de usuarios')
    } catch (error) {
      httpNext(error)
      return serverError(error)
    }
  }
}
