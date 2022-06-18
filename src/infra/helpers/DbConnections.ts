import { Sequelize } from "sequelize";
import 'dotenv/config'

export const getPostgresConnection = () : Sequelize =>  {
  return new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  //  DISABLE ON BRANCH MAIN BEFORE DEPLOYING  
  //  dialectOptions: {
  //    ssl: {
  //      require: true,
  //      rejectUnauthorized: false
  //    }
  //  },
    port: 5432
  });
}