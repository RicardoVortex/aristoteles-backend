import {DataTypes, Model, Sequelize} from "sequelize";
import {ModuloHasLeccionEntity} from "../../../domain/entities/modulo_has_leccion.entity";

interface CrearModuloHasLeccion extends Partial<ModuloHasLeccionEntity>{}

class ModulosLeccion extends Model<ModuloHasLeccionEntity, CrearModuloHasLeccion> implements ModuloHasLeccionEntity {


    public id!: number;
    public modulo_id!: number;
    public leccion_id!: number;


    static initModel(sequelize: Sequelize) {
      ModulosLeccion.init(
          {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
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
            },
            leccion_id: {
              field: "leccion_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Lecciones",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL",
              }
          },
          {
            sequelize,
            modelName: "Modulos_lecciones",
          }
        );
      }


}

export default ModulosLeccion;