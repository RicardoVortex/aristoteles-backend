import {DataTypes, Model, Sequelize} from "sequelize";
import {SequelizeModel} from "../../../infraestructure/types/sequelize";
import {FotoEntityApplication} from "../../../domain/entities/foto.entity";

interface CrearFoto extends Partial<FotoEntityApplication>{}

class Fotos extends Model<FotoEntityApplication, CrearFoto> implements FotoEntityApplication {


    public id!: number;
    public url!: string;
    public public_id!: string;



    static associate(models: { [key: string]: SequelizeModel }) {
        Fotos.hasOne(models.Cursos, {
            as: "curso",
            foreignKey: "foto_id"
          }
        );
      }
    


    static initModel(sequelize: Sequelize) {
        Fotos.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            url: {
              type: DataTypes.STRING,
              allowNull: false
            },
            public_id: {
                type: DataTypes.STRING,
                allowNull: false
              }
          },
          {
            sequelize,
            modelName: "Fotos",
          }
        );
      }


}

export default Fotos;