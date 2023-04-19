
import User from '../../db/models/user.model';
import { CreateUser, UpdateUser } from '../entities/User';

export default interface UserRepository {
  create(user: CreateUser): Promise<User>;
  find(): Promise<User[]>;
  getByEmail(email: User['email']): Promise<User>;
  getById(id: User['id']): Promise<User>;
  update(id: User['id'], changes: Partial<User> ): Promise<User>;

}
