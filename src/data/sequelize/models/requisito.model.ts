import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {RequisitoEntityApplication} from "../../../domain/entities/requisito.entity";

interface CrearRequisito extends Partial<RequisitoEntityApplication>{}

class Requisitos extends Model<RequisitoEntityApplication, CrearRequisito> implements RequisitoEntityApplication {


    public id!: number;
    public requisito!: string;



    static associate(models: { [key: string]: SequelizeModel }) {
        Requisitos.belongsToMany(models.Cursos, {
            as: "curso",
            through: "Requisitos_cursos",
            foreignKey: "requisito_id",
            otherKey: "curso_id"
          }

        );
      }
    


    static initModel(sequelize: Sequelize) {
        Requisitos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            requisito: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
            }
          },
          {
            sequelize,
            modelName: "Requisitos"
          }
        );
      }


}

export default Requisitos;