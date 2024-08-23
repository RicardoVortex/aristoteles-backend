import { UserEntityApplication } from "../entities";

export interface SignTokenDto {
  
    readonly id: number,
    readonly role_id: number
  
}

export interface ChangePasswordDto {

    readonly token: string,
    readonly newPassword: string,
    readonly user: UserEntityApplication,
    readonly code: string
  
}
