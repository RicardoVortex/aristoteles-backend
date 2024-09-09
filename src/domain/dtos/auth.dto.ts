import { UserEntity } from "../entities";

export interface SignTokenDto {
  
    readonly id: number,
    readonly role_id: number
  
}

export interface ChangePasswordDto {

    readonly token: string,
    readonly newPassword: string,
    readonly user: UserEntity,
    readonly code: string
  
}
