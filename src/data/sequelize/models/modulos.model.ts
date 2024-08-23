import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {ModuloEntityApplication} from "../../../domain/entities/modulo.entity";

interface CrearModulo extends Partial<ModuloEntityApplication>{}

class Modulos extends Model<ModuloEntityApplication, CrearModulo> implements ModuloEntityApplication {


    public id!: number;
    public modulo!: string;



    static associate(models: { [key: string]: SequelizeModel }) {
        Modulos.belongsToMany(models.Lecciones, {
            as: "leccion",
            through: "Modulos_lecciones",
            foreignKey: "modulo_id",
            otherKey: "leccion_id"
          }

        );
      }
    


    static initModel(sequelize: Sequelize) {
        Modulos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            modulo: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            }
          },
          {
            sequelize,
            modelName: "Modulos",
          }
        );
      }


}

export default Modulos;