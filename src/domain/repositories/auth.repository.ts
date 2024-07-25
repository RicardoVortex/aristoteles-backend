import { ChangePasswordDto, SignTokenDto } from "../dtos";

import { UserEntity } from "../entities";

export abstract class AuthRepository {
  abstract signToken(payload: SignTokenDto): string;
  abstract signTokenRecovery(user_id: number, code: string): Promise<string>;
  abstract changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
  abstract refreshToken(token: string): Promise<string>;
  abstract compare(password: string, hash: string): boolean;
  abstract validateCode(user: UserEntity, code: string): Promise<boolean>;
  abstract verifyToken(token: string): SignTokenDto;
}
