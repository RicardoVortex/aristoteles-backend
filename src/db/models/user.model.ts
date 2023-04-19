import { Model, Sequelize, DataTypes, ModelStatic, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, NOW } from 'sequelize'

import Role, { ROLE_TABLE } from './role.model';


export const USER_TABLET = 'users'





export class User extends Model<InferAttributes<User, { omit: 'rol' }>, InferCreationAttributes<User, { omit: 'rol' }>> {
  declare id: CreationOptional<number>
  declare name: string
  declare lastName: string
  declare email: string
  declare password: string
  declare dateBirth: Date | null
  declare roleId: number
  declare status: boolean
  declare login: boolean
  declare recoveryToken: string | null
  declare code: string | null
  declare rol?: NonAttribute<Role[]>;

  // timestamps!
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  // declare readonlydeletedAt!: Date // activar paranoid



  //methods
  static associate(model: ModelStatic<Role>) {
    //models associate
    this.belongsTo(model, { as: 'role' })
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLET,
      modelName: 'User',
      timestamps: true
    }
  }

}


export const initUser = (sequelize: Sequelize) => {
  return User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateBirth: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'date_birth'
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      login: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      recoveryToken: {
        allowNull: true,
        field: 'recovery_token',
        type: DataTypes.STRING,
      },
      code: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },
      roleId: {
        field: 'role_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: ROLE_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'

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
    }, User.config(sequelize)
  )
}




export default User
