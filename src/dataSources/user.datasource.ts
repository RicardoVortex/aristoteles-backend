import bcrypt from 'bcrypt'
import  { UpdateUser } from '../core/entities/User';
import UserRepository from '../core/repositories/userRepository';
// import sequelize from '../libs/sequelize'
import UserModel, { User } from '../db/models/user.model'
import { CreateUser } from '../core/entities/User';
import Boom from '@hapi/boom';



export default class UserDataSource implements UserRepository {

  public async create(user: User): Promise<User> {


    const hash = await bcrypt.hash(user.password, 10)
    const userHash = {
      ...user,
      password: hash
    }
    const newUser = await UserModel.create(userHash)
    return newUser

  }
  async getByEmail(email: string): Promise<User> {
    const user = await UserModel.findOne({
      where: {
        email
      }
    })
    if (!user) {
      throw Boom.badRequest()
    }
    return user
  }
  async getById(id: number): Promise<User> {

    const user = await UserModel.findByPk(id)

    if (!user) {

      throw Boom.badRequest('Este usuario no existe en la base de datos')

    }
    return user
  }

  async update(id: number, changes: User): Promise<User> {
    const user = await this.getById(id)

    const userUpdate = await user.update(changes)

    return userUpdate
  }
  async find(): Promise<User[]> {
    const user = await UserModel.findAll({
      include: ['role']
    })

    return user

  }
}
