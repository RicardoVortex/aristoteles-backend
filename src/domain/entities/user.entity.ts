// export class UserEntity {
//   constructor(
//     public id: number,
//     public names: string,
//     public surnames: string,
//     public email: string,
//     public date_birth: Date | null,
//     public role_id: number,
//     public code: string | null,
//     public recoveryToken: string | null,
//     public last_login: Date | null,
//     public password?: string
//   ) {}

//   static fromObject(object: { [key: string]: any }): UserEntity {
//     const {
//       id,
//       names,
//       surnames,
//       email,
//       password,
//       date_birth,
//       code,
//       role_id,
//       last_login,
//       recoveryToken,
//     } = object;

//     return new UserEntity(
//       id,
//       names,
//       surnames,
//       email,
//       date_birth,
//       role_id,
//       code,
//       recoveryToken,
//       last_login,
//       password
//     );
//   }
// }


export interface UserEntityApplication{

  id: number,
  names: string,
  surnames: string,
  email: string,
  date_birth: Date | null,
  role_id: number,
  code: string | null,
  recoveryToken: string | null,
  last_login: Date | null,
  password?: string

}
