import path from "path";
import fs from "fs";
import { Sequelize } from "sequelize";

import { SequelizeModel } from "../../infraestructure/types/sequelize";

interface Options {
  database: string;
  username: string;
  password: string;
  host: string;
  port: number;
}

export class SequelizeDatabase {
  private static sequelize: Sequelize;

  static async connect(options: Options) {
    const { database, password, username, host, port } = options;

    const url = `postgres://${username}:${password}@${host}:${port}/${database}`;

    try {
      this.sequelize = new Sequelize(url, {
        dialect: "postgres",
        define: {
          underscored: true,
          timestamps: true,
        },
        logging: false,
      });

      this.initModels();

      await this.sequelize.sync({ force: false, alter: true });

      console.log(
        "Connection to the database has been established successfully."
      );
    } catch (error) {
      console.log("Sequelize connection error");

      throw error;
    }
  }

  private static initModels() {
    const modelsPath = path.resolve(__dirname, "models");

    fs.readdirSync(modelsPath).forEach((file) => {
      if (file.endsWith(".ts") || file.endsWith(".js")) {
        const model: SequelizeModel = require(path.join(
          modelsPath,
          file
        )).default;

        if (typeof model.initModel === "function") {
          model.initModel(this.sequelize);
        }

        if (!this.sequelize.models[model.name]) {
          this.sequelize.models[model.name] = model;
        }
      }
    });

    Object.keys(this.sequelize.models).forEach((modelName) => {
      const model = this.sequelize.models[modelName] as SequelizeModel;

      if (model.associate) {
        model.associate(this.sequelize.models);
      }
    });
  }

  static getSequelizeInstance(): Sequelize {
    return this.sequelize;
  }
}
