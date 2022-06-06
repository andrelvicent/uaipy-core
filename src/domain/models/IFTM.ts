import { DataTypes } from "sequelize";
import { getPostgresConnection } from "../../infra/helpers/DbConnections";

export const IFTM = getPostgresConnection().define('partnerIftm', 
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