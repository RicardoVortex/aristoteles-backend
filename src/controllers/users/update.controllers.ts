
import IUser from '../../core/entities/User';
import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse, HttpNext } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import UserRepository from '../../core/repositories/userRepository';





export default class UpdateUser implements Controller {

  constructor(
    private readonly userRepository: UserRepository
  ){
    this.userRepository = userRepository
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const user = await this.userRepository.update(httpRequest.params.id, httpRequest.body)

    try {

      return success<IUser>(user, 'Usuario actualizado')
    } catch (error) {

      return serverError(error)
    }
  }
}
