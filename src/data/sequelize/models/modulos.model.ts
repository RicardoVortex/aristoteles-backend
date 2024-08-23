import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {ModuloEntity} from "../../../domain/entities/modulo.entity";

interface CrearModulo extends Partial<ModuloEntity>{}

class Modulos extends Model<ModuloEntity, CrearModulo> implements ModuloEntity {


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