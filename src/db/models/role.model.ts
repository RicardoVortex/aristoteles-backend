import {Model, DataType, Sequelize, DataTypes, ModelStatic,  InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, NOW} from 'sequelize'
import IRole, {ICreateRole} from '../../core/entities/Role';
import User from './user.model';

export const ROLE_TABLE = 'roles'

export default class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>>{
  declare id: CreationOptional<IRole['id']>
  declare name: string
  declare description: string | null

   // timestamps!
   declare createdAt: CreationOptional<Date>
   declare updatedAt: CreationOptional<Date>


  //methods
  static associate(model: ModelStatic<User>) {
    //models associate
    this.hasMany(model, {as: 'users', foreignKey: 'roleId'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: true
    }
  }


}


export const initRole = (sequelize: Sequelize) => {
  return Role.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: NOW
    }

  }, Role.config(sequelize))
}


