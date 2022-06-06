import { Sequelize } from "sequelize";

export const postgresConnection = () : Sequelize =>  {
  return new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432
  });
}