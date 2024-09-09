import { SendEmailOptionsDto, SendRecoveryDto } from "../dtos";

import { UserEntity } from "../entities/user.entity";

export interface EmailRepository {
  notifyUser(user: UserEntity): Promise<void>;
  notifyRecoveryPassword(data: SendRecoveryDto): Promise<void>;
  sendMail(data: SendEmailOptionsDto): Promise<void>;
}
