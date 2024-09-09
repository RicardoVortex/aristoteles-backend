import { CreateRoleDto, UpdateRoleDto } from "../dtos";

import { RoleEntity } from "../entities/role.entity";

export abstract class RoleRepository {
  abstract create(role: CreateRoleDto): Promise<RoleEntity>;
  abstract getOne(id: number): Promise<RoleEntity>;
  abstract getAll(): Promise<RoleEntity[]>;
  abstract update(id: number, change: UpdateRoleDto): Promise<RoleEntity>;
  abstract delete(id: number): Promise<number>;
}
