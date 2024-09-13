import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {CursosEntityApplication} from "../../../domain/entities/cursos.entity";

interface CrearCurso extends Partial<CursosEntityApplication>{}

class Cursos extends Model<CursosEntityApplication, CrearCurso> implements CursosEntityApplication {


    public id!: number
    public titulo!: string
    public descripcion!: string
    public objetivos!: string
    public duracion!: number
    public nivel_id!: number
    public instructor_id!: number
    public fecha_inicio!: Date
    public resena_id!: number
    public cupos!: number
    public foto_id!: number


    static associate(models: { [key: string]: SequelizeModel }) {
        Cursos.belongsToMany(models.Modulos, {
            as: "modulo",
            through: "Modulos_cursos",
            foreignKey: "curso_id",
            otherKey: "modulo_id"
          }
        );
        Cursos.belongsToMany(models.User, {
            as: "user",
            through: "Lista_deseos",
            foreignKey: "curso_id",
            otherKey: "user_id"
          }
        );
        Cursos.belongsToMany(models.User, {
          as: "userInscritos",
          through: "Inscritos",
          foreignKey: "curso_id",
          otherKey: "user_id"
        }
        );
        Cursos.belongsToMany(models.Requisitos, {
          as: "requisito",
          through: "Requisitos_cursos",
          foreignKey: "curso_id",
          otherKey: "requisito_id"
        }
        );
        Cursos.belongsToMany(models.Categorias, {
          as: "categoria",
          through: "Categorias_cursos",
          foreignKey: "curso_id",
          otherKey: "categoria_id"
        }
        );
        Cursos.belongsTo(models.Niveles, {
            as: "nivel"
          }
        );
        Cursos.belongsTo(models.Instructores, {
            as: "instructor"
          }
        );
        Cursos.belongsTo(models.Resenas, {
            as: "resena"
          }
        );
        Cursos.belongsTo(models.Fotos, {
          as: "foto"
        }
      );
      }
    


    static initModel(sequelize: Sequelize) {
        Cursos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            titulo: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false
            },
            objetivos: {
                type: DataTypes.STRING,
                allowNull: false
            },
            duracion: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            nivel_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            instructor_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            fecha_inicio: {
                type: DataTypes.DATE,
                allowNull: false
            },
            resena_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
            cupos: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            foto_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            }
          },
          {
            sequelize,
            modelName: "Cursos",
          }
        );
      }


}

export default Cursos;