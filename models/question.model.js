import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Question = sequelize.define(
    "Question",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "questions",
        timestamps: false,
    }
);

export default Question;
