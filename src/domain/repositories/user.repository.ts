import { CreateUserDto, UpdateUserDto } from "../dtos";

import { UserEntity } from "../entities/user.entity";

export abstract class UserRepository {
  abstract create(userDto: CreateUserDto): Promise<UserEntity>;
  abstract getOne(id: number): Promise<UserEntity>;
  abstract getByEmail(email: string): Promise<UserEntity>;
  abstract getAll(): Promise<UserEntity[]>;
  abstract update(id: number, change: UpdateUserDto): Promise<UserEntity>;
  abstract delete(id: number): Promise<number>;
}
