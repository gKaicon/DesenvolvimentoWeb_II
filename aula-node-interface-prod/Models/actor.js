import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Actor = sequelize.define('Actor', {
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATE
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
});

export default Actor;