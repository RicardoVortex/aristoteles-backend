import { DataTypes, Model, Sequelize } from "sequelize";

import { SequelizeModel } from "../../../infraestructure/types/sequelize";

import { UserEntity } from "../../../domain/entities/user.entity";

interface UserCreationAttributes extends Partial<UserEntity> {}

class User extends Model<UserEntity, UserCreationAttributes> {
  public id!: number;
  public names!: string;
  public surnames!: string;
  public email!: string;
  public password!: string;
  public date_birth!: Date | null;
  public last_login!: Date | null;
  public code!: string | null;
  public recoveryToken!: string | null;

  static associate(models: { [key: string]: SequelizeModel }) {
    User.belongsTo(models.Role, {
      foreignKey: "role_id",
      as: "role",
    });
  }

  static initModel(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        names: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        surnames: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        date_birth: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        last_login: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        recoveryToken: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "roles",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
      },
      {
        sequelize,
        modelName: "User",
        paranoid: true,
      }
    );
  }
}

export default User;
