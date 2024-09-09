import { CreateUserDto, UpdateUserDto } from "../dtos";

import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  create(userDto: CreateUserDto): Promise<UserEntity>;
  getOne(id: number): Promise<UserEntity>;
  getByEmail(email: string): Promise<UserEntity>;
  getAll(): Promise<UserEntity[]>;
  update(id: number, change: UpdateUserDto): Promise<UserEntity>;
  delete(id: number): Promise<number>;
}
