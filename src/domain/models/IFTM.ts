import { DataTypes } from "sequelize";
import { postgresConnection } from "../../infra/helpers/DbConnections";

export const IFTM = postgresConnection().define('partnerIftm', 
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, 
{
    freezeTableName: true
});