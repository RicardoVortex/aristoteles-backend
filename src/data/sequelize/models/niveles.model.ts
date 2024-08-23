import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {NivelEntityApplication} from "../../../domain/entities/nivel.entity";

interface CrearNivel extends Partial<NivelEntityApplication>{}

class Niveles extends Model<NivelEntityApplication, CrearNivel> implements NivelEntityApplication {


    public id!: number;
    public nivel!: string;



    static associate(models: { [key: string]: SequelizeModel }) {
        Niveles.hasMany(models.Cursos, {
            as: "curso",
            foreignKey: "nivel_id"
          }
        );
      }
    


    static initModel(sequelize: Sequelize) {
        Niveles.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            nivel: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            }
          },
          {
            sequelize,
            modelName: "Niveles",
          }
        );
      }


}

export default Niveles;