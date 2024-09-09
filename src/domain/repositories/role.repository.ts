import { CreateRoleDto, UpdateRoleDto } from "../dtos";

import { RoleEntity } from "../entities/role.entity";

export interface RoleRepository {
  create(role: CreateRoleDto): Promise<RoleEntity>;
  getOne(id: number): Promise<RoleEntity>;
  getAll(): Promise<RoleEntity[]>;
  update(id: number, change: UpdateRoleDto): Promise<RoleEntity>;
  delete(id: number): Promise<number>;
}
