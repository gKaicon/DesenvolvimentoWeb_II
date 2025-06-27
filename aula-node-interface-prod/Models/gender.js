import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Gender = sequelize.define("Gender", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

export default Gender;