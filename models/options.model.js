import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Option = sequelize.define(
    "Option",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        option_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_correct: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        tableName: "options",
        timestamps: false,
    }
);

export default Option;
