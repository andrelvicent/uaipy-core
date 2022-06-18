import { Sequelize } from "sequelize";
import 'dotenv/config'

export const getPostgresConnection = () : Sequelize =>  {
  return new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    "dialectOptions": {
      "ssl": true
    },
    port: 5432
  });
}