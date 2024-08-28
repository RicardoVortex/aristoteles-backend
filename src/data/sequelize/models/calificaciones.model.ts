import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {CalificacionEntityApplication} from "../../../domain/entities/calificacion.entity";

interface CrearCalificacion extends Partial<CalificacionEntityApplication>{}

class Calificaciones extends Model<CalificacionEntityApplication, CrearCalificacion> implements CalificacionEntityApplication {


    public id!: number;
    public calificacion!: string;



    static associate(models: { [key: string]: SequelizeModel }) {
        Calificaciones.hasMany(models.Resenas, {
            as: "resena",
            foreignKey: "calificacion_id"
          }
        );
      }
    


    static initModel(sequelize: Sequelize) {
        Calificaciones.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            calificacion: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
            }
          },
          {
            sequelize,
            modelName: "Calificaciones",
          }
        );
      }


}

export default Calificaciones;