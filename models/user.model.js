import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.STRING,
        },
        full_name: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);

export default User;
