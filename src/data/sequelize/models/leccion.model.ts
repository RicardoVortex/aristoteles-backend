import {DataTypes, Model, Sequelize} from "sequelize";
// import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {LeccionEntity} from "../../../domain/entities/leccion.entity";

interface CrearLeccion extends Partial<LeccionEntity>{}

class Lecciones extends Model<LeccionEntity, CrearLeccion> implements LeccionEntity {


    public id!: number;
    public leccion!: string;



    // static associate(models: { [key: string]: SequelizeModel }) {
    //   Lecciones.belongsToMany(models.Modulos, {
    //       as: "modulo",
    //       through: models.ModulosLeccion,
    //       foreignKey: "leccion_id",
    //       otherKey: "modulo_id"
    //     }

    //   );
    // }
  


    static initModel(sequelize: Sequelize) {
        Lecciones.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            leccion: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            }
          },
          {
            sequelize,
            modelName: "Lecciones",
          }
        );
      }


}

export default Lecciones;