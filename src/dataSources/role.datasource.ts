import { ICreateRole, IUpdateRole } from '../core/entities/Role';
import RoleRepository from '../core/repositories/roleRepository';
import RoleModel from '../db/models/role.model';
import boom from '@hapi/boom';
import Role from '../db/models/role.model';


export default class RoleDataSource implements RoleRepository {
  async create(role: Role): Promise<Role> {

    const newRole = await RoleModel.create(role)

    return newRole

  }
  async getOne(id: number): Promise<Role> {
    const role = await RoleModel.findByPk(id, {include: ['users']})
    if(!role){
      throw boom.notFound('No se encuentra el rol')
    }

    return role
  }
  async get(): Promise<Role[]> {
    const roles = await RoleModel.findAll()
    return roles
  }
  async update(id: number, change: IUpdateRole): Promise<Role> {
    const roleUpdate = await RoleModel.update(change, {
      where: {
        id
      },
      returning: true
    })
    return roleUpdate[1][0]

  }

  async delete(id: number): Promise<number> {

    return await RoleModel.destroy({where: {id}})

  }

}
