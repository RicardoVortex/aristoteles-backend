import { ChangePasswordDto, SignTokenDto } from "../dtos";

import { UserEntityApplication } from "../entities";

// export abstract class AuthRepository {
//   abstract signToken(payload: SignTokenDto): string;
//   abstract signTokenRecovery(user_id: number, code: string): Promise<string>;
//   abstract changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
//   abstract refreshToken(token: string): Promise<string>;
//   abstract compare(password: string, hash: string): boolean;
//   abstract validateCode(user: UserEntityApplication, code: string): Promise<boolean>;
//   abstract verifyToken(token: string): SignTokenDto;
// }




export interface AuthRepository {
  signToken(payload: SignTokenDto): string;
  signTokenRecovery(user_id: number, code: string): Promise<string>;
  changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
  refreshToken(token: string): Promise<string>;
  compare(password: string, hash: string): boolean;
  validateCode(user: UserEntityApplication, code: string): Promise<boolean>;
  verifyToken(token: string): SignTokenDto;
}
