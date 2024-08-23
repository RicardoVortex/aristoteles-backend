import { CreateRoleDto, UpdateRoleDto } from "../dtos";

import { RoleEntityApplication } from "../entities/role.entity";

export interface RoleRepository {
  create(role: CreateRoleDto): Promise<RoleEntityApplication>;
  getOne(id: number): Promise<RoleEntityApplication>;
  getAll(): Promise<RoleEntityApplication[]>;
  update(id: number, change: UpdateRoleDto): Promise<RoleEntityApplication>;
  delete(id: number): Promise<number>;
}
