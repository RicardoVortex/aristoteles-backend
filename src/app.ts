import { envs } from "./config";

import { SequelizeDatabase } from "./data/sequelize/sequelize";

import { AppRoutes } from "./presentation/routes";

import Server from "./server";

(() => {
  main();
})();

async function main() {
  const database = envs.DB_NAME;
  const username = envs.DB_USER;
  const password = envs.DB_PASSWORD;
  const host = envs.DB_HOST;
  const port = envs.DB_PORT;

  await SequelizeDatabase.connect({ database, password, username, host, port });

  const server = new Server({ port: envs.PORT, routes: AppRoutes.routes });

  server.start();
}
