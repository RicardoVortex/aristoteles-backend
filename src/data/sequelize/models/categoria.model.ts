import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {CategoriaEntityApplication} from "../../../domain/entities/categoria.entity";

interface CrearCategoria extends Partial<CategoriaEntityApplication>{}

class Categorias extends Model<CategoriaEntityApplication, CrearCategoria> implements CategoriaEntityApplication {


    public id!: number;
    public categoria!: string;



    static associate(models: { [key: string]: SequelizeModel }) {
        Categorias.belongsToMany(models.Cursos, {
            as: "curso",
            through: "Categorias_cursos",
            foreignKey: "categoria_id",
            otherKey: "curso_id"
          }

        );
      }
    


    static initModel(sequelize: Sequelize) {
        Categorias.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            categoria: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
            }
          },
          {
            sequelize,
            modelName: "Categorias"
          }
        );
      }


}

export default Categorias;