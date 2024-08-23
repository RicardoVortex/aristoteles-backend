export interface CreateUserDto {

    readonly names: string,
    readonly surnames: string,
    readonly email: string,
    readonly password: string,
    readonly date_birth: Date | null,
    readonly role_id: number

}

export interface UpdateUserDto {

    readonly names?: string,
    readonly surnames?: string,
    readonly email?: string,
    readonly password?: string,
    readonly date_birth?: Date | null,
    readonly last_login?: Date | null,
    readonly role_id?: number

}
