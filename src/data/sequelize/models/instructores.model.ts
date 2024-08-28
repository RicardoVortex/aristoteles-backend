import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {InstructorEntityApplication} from "../../../domain/entities/instructor.entity";

interface CrearNivel extends Partial<InstructorEntityApplication>{}

class Instructores extends Model<InstructorEntityApplication, CrearNivel> implements InstructorEntityApplication {


    public id!: number;
    public nombre!: string;
    public apellido!: string;




    static associate(models: { [key: string]: SequelizeModel }) {
      Instructores.hasMany(models.Cursos, {
            as: "curso",
            foreignKey: "instructor_id"
          }
        );
      }
    


    static initModel(sequelize: Sequelize) {
        Instructores.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            nombre: {
              type: DataTypes.STRING,
              allowNull: false
            },
            apellido: {
                type: DataTypes.STRING,
                allowNull: false
              }
          },
          {
            sequelize,
            modelName: "Instructores",
          }
        );
      }


}

export default Instructores;