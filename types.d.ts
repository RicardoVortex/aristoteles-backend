import { UserEntity } from "./src/domain/entities/user.entity";
declare module "express-serve-static-core" {
  export interface Request {
    user?: UserEntity;
  }
}
