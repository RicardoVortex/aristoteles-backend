import { Controller } from "../../../infraestructure/interfaces/controllers";
import {
  HttpRequest,
  HttpResponse,
} from "../../../infraestructure/interfaces/http-interface";

import { codeRandom } from "../../../shared/helpers/code-random";
import { HttpHelper } from "../../../shared/helpers";

import {
  AuthRepository,
  UserRepository,
  EmailRepository,
} from "../../../domain/repositories";

export class RecoveryPasswordController implements Controller {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
    private readonly emailRepository: EmailRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email } = httpRequest.body;

    const code: string = codeRandom(6);

    try {
      const user = await this.userRepository.getByEmail(email);

      const token = await this.authRepository.signTokenRecovery(user.id, code);

      const url = `http://localhost:3000/recovery?token=${token}`;

      await this.emailRepository.notifyRecoveryPassword({
        name: `${user.names} ${user.surnames}`,
        url,
        to: user.email,
        code,
      });

      return HttpHelper.success({}, "Correo enviado");
    } catch (error) {
      console.log(error);

      return HttpHelper.serverError(error);
    }
  }
}
