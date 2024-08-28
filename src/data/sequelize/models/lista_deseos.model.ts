import {DataTypes, Model, Sequelize} from "sequelize";
import {ListaDeseosEntityApplication} from "../../../domain/entities/lista_deseos.entity";

interface CrearListaDeseos extends Partial<ListaDeseosEntityApplication>{}

class ListaDeseos extends Model<ListaDeseosEntityApplication, CrearListaDeseos> implements ListaDeseosEntityApplication {


    public id!: number
    public curso_id!: number
    public user_id!: number
    public favorito!: boolean
    public fecha_cr!: Date
    public fecha_at!: Date


    static initModel(sequelize: Sequelize) {
        ListaDeseos.init(
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
                model: "Modulos",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
            },
            user_id: {
              field: "user_id",
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "User",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
              },
              favorito: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                unique: true
              },
              fecha_cr: {
                type: DataTypes.DATE,
                allowNull: false,
                unique: true
              },
              fecha_at: {
                type: DataTypes.DATE,
                allowNull: false,
                unique: true
              },

          },
          {
            sequelize,
            modelName: "Lista_deseos",
          }
        );
      }


}

export default ListaDeseos;