import { UserEntity } from "../entities";

export class SignTokenDto {
  private constructor(
    public readonly id: number,
    public readonly role_id: number
  ) {}
}

export class ChangePasswordDto {
  private constructor(
    public readonly token: string,
    public readonly newPassword: string,
    public readonly user: UserEntity,
    public readonly code: string
  ) {}
}
