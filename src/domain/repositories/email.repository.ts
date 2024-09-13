import { SendEmailOptionsDto, SendRecoveryDto } from "../dtos";

import { UserEntityApplication } from "../entities/user.entity";

// export abstract class EmailRepository {
//   abstract notifyUser(user: UserEntityApplication): Promise<void>;
//   abstract notifyRecoveryPassword(data: SendRecoveryDto): Promise<void>;
//   abstract sendMail(data: SendEmailOptionsDto): Promise<void>;
// }


export interface EmailRepository {
  notifyUser(user: UserEntityApplication): Promise<void>;
  notifyRecoveryPassword(data: SendRecoveryDto): Promise<void>;
  sendMail(data: SendEmailOptionsDto): Promise<void>;
}
