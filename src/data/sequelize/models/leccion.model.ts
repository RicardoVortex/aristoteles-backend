import {DataTypes, Model, Sequelize} from "sequelize";
// import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {LeccionEntityApplication} from "../../../domain/entities/leccion.entity";

interface CrearLeccion extends Partial<LeccionEntityApplication>{}

class Lecciones extends Model<LeccionEntityApplication, CrearLeccion> implements LeccionEntityApplication {


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