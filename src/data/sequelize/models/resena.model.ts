import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {ResenaEntityApplication} from "../../../domain/entities/reseña.entity";

interface CrearResena extends Partial<ResenaEntityApplication>{}

class Resenas extends Model<ResenaEntityApplication, CrearResena> implements ResenaEntityApplication {


    public id!: number
    public calificacion_id!: number
    public resena!: string
    public user_id!: string



    static associate(models: { [key: string]: SequelizeModel }) {
        Resenas.belongsTo(models.Calificaciones, {
            as: "calificacion"
          }
        );
        Resenas.belongsTo(models.User, {
          as: "user"
        }
      );
      Resenas.hasMany(models.Cursos, {
        as: "curso",
        foreignKey: "resena_id"
      }
    );
      }
    


    static initModel(sequelize: Sequelize) {
        Resenas.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            calificacion_id: {
                field: "calificacion_id",
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Calificaciones",
                    key: "id"
                  },
                  onUpdate: "CASCADE",
                  onDelete: "SET NULL"
              },
            resena: {
              type: DataTypes.STRING,
              allowNull: false
            },
            user_id: {
                field: "user_id",
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "User",
                    key: "id"
                  },
                  onUpdate: "CASCADE",
                  onDelete: "SET NULL"
              }
          },
          {
            sequelize,
            modelName: "Resenas",
          }
        );
      }


}

export default Resenas;