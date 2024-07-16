export class RoleEntity {
  constructor(
    public id: number,
    public name: string,
    public description?: string | null
  ) {}

  static fromObject(object: { [key: string]: any }): RoleEntity {
    const { id, name, description } = object;

    return new RoleEntity(id, name, description);
  }
}
