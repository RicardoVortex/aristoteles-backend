import Role from "../../data/sequelize/models/rol.model";

import { CreateRoleDto, UpdateRoleDto } from "../../domain/dtos";
import { RoleEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";
import { RoleRepository } from "../../domain/repositories";

export class RoleDataSource implements RoleRepository {
  async create(roleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = await Role.create(roleDto);

    return RoleEntity.fromObject(role);
  }

  async getOne(id: number): Promise<RoleEntity> {
    const role = await Role.findOne({
      attributes: ["id", "name", "description"],
      where: { id },
    });

    if (!role) throw CustomError.badRequest("El Rol no Existe");

    return RoleEntity.fromObject(role);
  }

  async getAll(): Promise<RoleEntity[]> {
    const roles: RoleEntity[] = await Role.findAll({
      attributes: ["id", "name", "description"],
    });

    return roles.map((role) => RoleEntity.fromObject(role));
  }

  async update(id: number, change: UpdateRoleDto): Promise<RoleEntity> {
    await Role.update(change, { where: { id } });

    const role = await this.getOne(id);

    return role;
  }

  async delete(id: number): Promise<number> {
    return await Role.destroy({ where: { id } });
  }
}
