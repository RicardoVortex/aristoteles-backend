import { ChangePasswordDto, SignTokenDto } from "../dtos";

import { UserEntityApplication } from "../entities";

export interface AuthRepository {
  signToken(payload: SignTokenDto): string;
  signTokenRecovery(user_id: number, code: string): Promise<string>;
  changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
  refreshToken(token: string): Promise<string>;
  compare(password: string, hash: string): boolean;
  validateCode(user: UserEntityApplication, code: string): Promise<boolean>;
  verifyToken(token: string): SignTokenDto;
}
