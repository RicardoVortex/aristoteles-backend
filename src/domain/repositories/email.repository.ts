import { SendEmailOptionsDto, SendRecoveryDto } from "../dtos";

import { UserEntityApplication } from "../entities/user.entity";

export interface EmailRepository {
  notifyUser(user: UserEntityApplication): Promise<void>;
  notifyRecoveryPassword(data: SendRecoveryDto): Promise<void>;
  sendMail(data: SendEmailOptionsDto): Promise<void>;
}
