export class CreateRoleDto {
  private constructor(
    public readonly name: string,
    public readonly description: string | null
  ) {}
}

export class UpdateRoleDto {
  constructor(
    public readonly name?: string,
    public readonly description?: string
  ) {}
}
