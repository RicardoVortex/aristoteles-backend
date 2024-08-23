import {DataTypes, Model, Sequelize} from "sequelize";
import {ModuloHasCursosEntity} from "../../../domain/entities/modulos_has_cursos.entity";

interface CrearModuloHasCursos extends Partial<ModuloHasCursosEntity>{}

class ModulosCursos extends Model<ModuloHasCursosEntity, CrearModuloHasCursos> implements ModuloHasCursosEntity {


    public id!: number;
    public curso_id!: number;
    public modulo_id!: number;


    static initModel(sequelize: Sequelize) {
        ModulosCursos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            curso_id: {
              field: "curso_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Modulos",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL",
            },
            modulo_id: {
              field: "modulo_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Modulos",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL",
              }
          },
          {
            sequelize,
            modelName: "Modulos_cursos",
          }
        );
      }


}

export default ModulosCursos;