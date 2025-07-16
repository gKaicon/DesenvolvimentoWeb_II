import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'pratica_node'
});

//const sequelize = new Sequelize('postgresql://pratica_filmes_user:ebrLzg8EuqTHcoWqeRntcRs6u4q53sYN@dpg-d1dva83e5dus73e16bpg-a/pratica_filmes_db_2shr');

export default sequelize;