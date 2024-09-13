import { CreateUserDto, UpdateUserDto } from "../dtos";

import { UserEntityApplication } from "../entities/user.entity";

// export abstract class UserRepository {
//   abstract create(userDto: CreateUserDto): Promise<UserEntityApplication>;
//   abstract getOne(id: number): Promise<UserEntityApplication>;
//   abstract getByEmail(email: string): Promise<UserEntityApplication>;
//   abstract getAll(): Promise<UserEntityApplication[]>;
//   abstract update(id: number, change: UpdateUserDto): Promise<UserEntityApplication>;
//   abstract delete(id: number): Promise<number>;
// }


export interface UserRepository {
  create(userDto: CreateUserDto): Promise<UserEntityApplication>;
  getOne(id: number): Promise<UserEntityApplication>;
  getByEmail(email: string): Promise<UserEntityApplication>;
  getAll(): Promise<UserEntityApplication[]>;
  update(id: number, change: UpdateUserDto): Promise<UserEntityApplication>;
  delete(id: number): Promise<number>;
}
