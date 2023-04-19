
export default interface IRole  {
  id: number,
  name: string,
  description: string | null,
  createdAt: Date,
  updatedAt: Date,
}

export interface ICreateRole extends Omit<IRole, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface IUpdateRole extends Partial<ICreateRole> {}
