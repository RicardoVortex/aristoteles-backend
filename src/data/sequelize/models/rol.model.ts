import { DataTypes, Model, Sequelize } from "sequelize";

import { SequelizeModel } from "../../../infraestructure/types/sequelize";

import { RoleEntityApplication } from "../../../domain/entities/role.entity";

interface RoleCreationAttributes extends Partial<RoleEntityApplication> {}

class Role
  extends Model<RoleEntityApplication, RoleCreationAttributes>
  implements RoleEntityApplication
{
  public id!: number;
  public name!: string;
  public description!: string | null;

  static associate(models: { [key: string]: SequelizeModel }) {
    Role.hasMany(models.User, {
      foreignKey: "role_id",
    });
  }

  static initModel(sequelize: Sequelize) {
    Role.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
      },
      {
        sequelize,
        modelName: "Role",
      }
    );
  }
}

export default Role;
