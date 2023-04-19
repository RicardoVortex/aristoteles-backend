import { Sequelize } from 'sequelize';
import {  User, initUser } from './user.model';
import Role from './role.model';
import { initRole } from './role.model';




export default function setupModels(sequelize: Sequelize){
  initUser(sequelize)
  initRole(sequelize)


  //associates
  Role.associate(User)
  User.associate(Role)
}

