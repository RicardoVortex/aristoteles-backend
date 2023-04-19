

export default interface IUser {
  id: number,
  name: string,
  lastName: string | null,
  email: string,
  password: string,
  dateBirth: Date | null,
  roleId: number,
  status: boolean,
  login: boolean,
  recoveryToken: string | null,
  createdAt: Date,
  updatedAt: Date,
  // deletedAt?: Date,

}

export interface CreateUser extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface UpdateUser extends Partial<CreateUser> {}
