import { CreateRoleDto, UpdateRoleDto } from "../dtos";

import { RoleEntityApplication } from "../entities/role.entity";

// export abstract class RoleRepository {
//   abstract create(role: CreateRoleDto): Promise<RoleEntityApplication>;
//   abstract getOne(id: number): Promise<RoleEntityApplication>;
//   abstract getAll(): Promise<RoleEntityApplication[]>;
//   abstract update(id: number, change: UpdateRoleDto): Promise<RoleEntityApplication>;
//   abstract delete(id: number): Promise<number>;
// }



export interface RoleRepository {
  create(role: CreateRoleDto): Promise<RoleEntityApplication>;
  getOne(id: number): Promise<RoleEntityApplication>;
  getAll(): Promise<RoleEntityApplication[]>;
  update(id: number, change: UpdateRoleDto): Promise<RoleEntityApplication>;
  delete(id: number): Promise<number>;
}
