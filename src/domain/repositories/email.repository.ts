import { SendEmailOptionsDto, SendRecoveryDto } from "../dtos";

import { UserEntity } from "../entities/user.entity";

export abstract class EmailRepository {
  abstract notifyUser(user: UserEntity): Promise<void>;
  abstract notifyRecoveryPassword(data: SendRecoveryDto): Promise<void>;
  abstract sendMail(data: SendEmailOptionsDto): Promise<void>;
}
