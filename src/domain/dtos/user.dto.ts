export class CreateUserDto {
  private constructor(
    public readonly names: string,
    public readonly surnames: string,
    public readonly email: string,
    public readonly password: string,
    public readonly date_birth: Date | null,
    public readonly role_id: number
  ) {}
}

export class UpdateUserDto {
  constructor(
    public readonly names?: string,
    public readonly surnames?: string,
    public readonly email?: string,
    public readonly password?: string,
    public readonly date_birth?: Date | null,
    public readonly last_login?: Date | null,
    public readonly role_id?: number
  ) {}
}
