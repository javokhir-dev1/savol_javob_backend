import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Timer = sequelize.define(
    "Timer",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "timer",
        timestamps: false,
    }
);

export default Timer;
