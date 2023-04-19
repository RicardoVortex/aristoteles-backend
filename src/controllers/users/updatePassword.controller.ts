import { Controller } from '../../core/interfaces/controllers';
import UserRepository from '../../core/repositories/userRepository';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { success, serverError } from '../../helpers/http-helper';
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';






export default class UpdatePassword implements Controller {

  constructor(
    private readonly userRepository: UserRepository
  ){
    this.userRepository = userRepository
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.id
      const { oldPassword, newPassword } = httpRequest.body
      const user = await this.userRepository.getById(id)
      const isMatch = await bcrypt.compare(oldPassword, user.password)
      if ( !isMatch ) {
        throw Boom.unauthorized('no puede cambiar la contraseña')
      }
      const password = await bcrypt.hash(newPassword, 10)
      await this.userRepository.update(id, {password})
      return success<{}>({}, 'Contraseña cambiada')
    } catch (error) {
      return serverError(error)
    }
  }
}
