import {DataTypes, Model, Sequelize} from "sequelize";
import {CategoriaHasCursosEntityApplication} from "../../../domain/entities/categoria_has_cursos.entity";

interface CrearCategoriaHasCursos extends Partial<CategoriaHasCursosEntityApplication>{}

class CategoriasCursos extends Model<CategoriaHasCursosEntityApplication, CrearCategoriaHasCursos> implements CategoriaHasCursosEntityApplication {


    public id!: number;
    public curso_id!: number;
    public categoria_id!: number;


    static initModel(sequelize: Sequelize) {
        CategoriasCursos.init(
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
            categoria_id: {
              field: "categoria_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Categorias",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
              }
          },
          {
            sequelize,
            modelName: "Categorias_cursos",
          }
        );
      }


}

export default CategoriasCursos;