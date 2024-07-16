import bcrypt from "bcrypt";

import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos/user.dto";

import User from "../../data/sequelize/models/user.model";
import Role from "../../data/sequelize/models/rol.model";

export class UserDataSource implements UserRepository {
  async create(userDto: CreateUserDto): Promise<UserEntity> {
    const passwordHash: string = await bcrypt.hash(userDto.password, 10);

    try {
      const user = await User.create({ ...userDto, password: passwordHash });

      const { password, ...userCreated } = UserEntity.fromObject(user);

      return userCreated;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async getOne(id: number): Promise<UserEntity> {
    const user = await User.findOne({
      attributes: [
        "id",
        "names",
        "surnames",
        "email",
        "date_birth",
        "code",
        "recoveryToken",
      ],
      include: {
        as: "role",
        attributes: ["id", "name", "description"],
        model: Role,
      },
      where: { id },
    });

    if (!user) throw CustomError.badRequest("El Usuario no Existe");

    return UserEntity.fromObject(user);
  }

  async getByEmail(email: string): Promise<UserEntity> {
    const user = await User.findOne({
      attributes: [
        "id",
        "names",
        "surnames",
        "email",
        "date_birth",
        "password",
      ],
      include: {
        as: "role",
        attributes: ["id", "name", "description"],
        model: Role,
      },
      where: { email },
    });

    if (!user) throw CustomError.badRequest("El Usuario no Existe");

    return UserEntity.fromObject(user);
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await User.findAll({
      attributes: [
        "id",
        "names",
        "surnames",
        "email",
        "date_birth",
        "last_login",
      ],
      include: {
        as: "role",
        attributes: ["id", "name", "description"],
        model: Role,
      },
    });

    return users.map((user) => UserEntity.fromObject(user));
  }

  async update(id: number, change: UpdateUserDto): Promise<UserEntity> {
    const { email, password, role_id, ...dataUpdate } = change;

    try {
      await User.update(dataUpdate, { where: { id } });
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }

    const user = await this.getOne(id);

    return user;
  }

  async delete(id: number): Promise<number> {
    return await User.destroy({ where: { id } });
  }
}
