import {DataTypes, Model, Sequelize} from "sequelize";
import {InscritoEntityApplication} from "../../../domain/entities/inscrito.entity";

interface CrearInscritos extends Partial<InscritoEntityApplication>{}

class Inscritos extends Model<InscritoEntityApplication, CrearInscritos> implements InscritoEntityApplication {


    public id!: number
    public curso_id!: number
    public user_id!: number
    public inscrito!: boolean
    public fecha_cr!: Date
    public fecha_at!: Date


    static initModel(sequelize: Sequelize) {
        Inscritos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            curso_id: {
              field: "curso_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Cursos",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
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
              },
              inscrito: {
                type: DataTypes.BOOLEAN,
                allowNull: false
              },
              fecha_cr: {
                type: DataTypes.DATE,
                allowNull: false
              },
              fecha_at: {
                type: DataTypes.DATE,
                allowNull: false
              },

          },
          {
            sequelize,
            modelName: "Inscritos",
          }
        );
      }


}

export default Inscritos;