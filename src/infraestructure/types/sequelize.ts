import { Model, ModelStatic, Sequelize } from "sequelize";

export interface SequelizeModel extends ModelStatic<Model> {
  associate?: (models: { [key: string]: SequelizeModel }) => void;
  initModel?: (sequelize: Sequelize) => void;
}
