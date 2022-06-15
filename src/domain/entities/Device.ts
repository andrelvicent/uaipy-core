import { DataTypes } from "sequelize";
import { getPostgresConnection } from "../../infra/helpers/DbConnections";

export const device = getPostgresConnection().define('devices', 
{
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    securityKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    freezeTableName: true
});