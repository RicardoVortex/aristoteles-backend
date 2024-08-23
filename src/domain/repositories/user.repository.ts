import { CreateUserDto, UpdateUserDto } from "../dtos";

import { UserEntityApplication } from "../entities/user.entity";

export interface UserRepository {
  create(userDto: CreateUserDto): Promise<UserEntityApplication>;
  getOne(id: number): Promise<UserEntityApplication>;
  getByEmail(email: string): Promise<UserEntityApplication>;
  getAll(): Promise<UserEntityApplication[]>;
  update(id: number, change: UpdateUserDto): Promise<UserEntityApplication>;
  delete(id: number): Promise<number>;
}
