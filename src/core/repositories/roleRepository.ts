import Role from '../../db/models/role.model';
import { IUpdateRole } from '../entities/Role';




export default interface RoleRepository {
  create(role: Role): Promise<Role>;
  getOne(id: Role['id']): Promise<Role>;
  get(): Promise<Role[]>;
  update(id: Role['id'], change: IUpdateRole): Promise<Role>;
  delete(id: Role['id']): Promise<number>
}
