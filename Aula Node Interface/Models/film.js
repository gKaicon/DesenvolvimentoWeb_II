import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Film = sequelize.define('Film', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    release_year: {
        type: DataTypes.INTEGER
    }
});

export default Film;