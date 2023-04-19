import IUser from '../entities/User';
import User from '../../db/models/user.model';

export interface Payload {
  sub: number,
  role: IUser['roleId'],
}

export default interface AuthRepository {
  getUser(email: string, password: string): Promise<IUser>
  signToken(payload: Payload ): string;
  sendRecovery(user: User, code: string): Promise<void>;
  changePassword(token: string, newPassword: IUser['password'], user: User, code: string): Promise<void>
  refreshToken(token: string): Promise<string>;
  // generateToken(payload: Payload): string;
}
