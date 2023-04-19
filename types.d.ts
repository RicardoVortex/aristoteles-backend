import IUser from './src/core/entities/User';

declare namespace Express {
  export interface Request {
    user?: IUser
  }
}
