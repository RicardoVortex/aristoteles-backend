import {DataTypes, Model, Sequelize} from "sequelize";
import {RequisitoHasCursosEntityApplication} from "../../../domain/entities/requisito_has_cursos.entity";

interface CrearRequisitoHasCursos extends Partial<RequisitoHasCursosEntityApplication>{}

class RequisitosCursos extends Model<RequisitoHasCursosEntityApplication, CrearRequisitoHasCursos> implements RequisitoHasCursosEntityApplication {


    public id!: number;
    public curso_id!: number;
    public requisito_id!: number;


    static initModel(sequelize: Sequelize) {
        RequisitosCursos.init(
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
            requisito_id: {
              field: "requisito_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Requisitos",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
              }
          },
          {
            sequelize,
            modelName: "Requisitos_cursos",
          }
        );
      }


}

export default RequisitosCursos;