

import { Controller } from '../../core/interfaces/controllers';
import { HttpRequest, HttpResponse } from '../../core/interfaces/http-interface';
import { serverError, success } from '../../helpers/http-helper';
import UserRepository from '../../core/repositories/userRepository';
import NotifierRepository from '../../core/repositories/notifierRespository';

//*Controlador que se encarga de tener la respuesta http, y se hace inyección de dependencias.
export default class RegisterUser implements Controller {

  //* Inyección de dependencias
  constructor(
    private readonly userRepository: UserRepository,
    private readonly notifierRepository: NotifierRepository) {
      this.notifierRepository = notifierRepository
      this.userRepository = userRepository
  }

  //* Método para formar respuesta (req, res)
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {


    try {
      const {name, lastName, dateBirth, email, roleId, password } = httpRequest.body

      //* Se usa repositorio para crear el usuario
      const user = await this.userRepository.create({
        dateBirth,
        email,
        lastName,
        login: false,
        name,
        password,
        roleId,
        status: false,
        recoveryToken: null
      })

      //* Se usa repositorio para notificaciones por correo
      await this.notifierRepository.notifyUser(user)


      //* se da respuesta
      return success(user, 'Usuario Creado')


    } catch (error) {
      return serverError(error)


    }

  }
}
