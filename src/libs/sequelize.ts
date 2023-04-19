import { Sequelize } from "sequelize";

import { config } from '../config'
import setupModels  from '../db/models'



const { dbName, dbHost, dbPassword, dbPort, dbUser } = config
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);


const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});
// const sequelize = new Sequelize(dbName, dbUser, 'vortex22', {
//   host: dbHost,
//   port: dbPort
//   dialect: 'postgres',
//   logging: false,
// });
setupModels(sequelize)


export default sequelize;
