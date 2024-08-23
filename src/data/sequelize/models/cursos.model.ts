import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {CursosEntity} from "../../../domain/entities/cursos.entity";

interface CrearCurso extends Partial<CursosEntity>{}

class Cursos extends Model<CursosEntity, CrearCurso> implements CursosEntity {


    public id!: number
    public titulo!: string
    public descripcion!: string
    public objetivos!: string
    public duracion!: number
    public nivel_id!: number
    public requisitos!: Array<string>
    public instructor_id!: number
    public fecha_inicio!: Date
    public resena_id!: number
    public foto!: string


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

      }
    


    static initModel(sequelize: Sequelize) {
        Cursos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            titulo: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            objetivos: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            duracion: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
            nivel_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
            requisitos: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            instructor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
            fecha_inicio: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
                unique: true,
            },
            resena_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
            foto: {
                type: DataTypes.STRING,
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