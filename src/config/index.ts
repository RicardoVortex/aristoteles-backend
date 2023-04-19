
import dotenv from 'dotenv'
dotenv.config()

export const config = {
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD as string,
  dbHost: process.env.DB_HOST as string,
  dbPort: process.env.DB_PORT as string,
  dbName: process.env.DB_NAME as string,
  emailUser: process.env.EMAIL_USER as string,
  emailPass: process.env.EMAIL_PASS as string,
  secret: process.env.SECRET as string,
  secretPassword: process.env.SECRET_PASSWORD as string,


}


export const roles = {
  admin: 1,
  customer: 2,

}
