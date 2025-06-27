import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'root',
//     database: 'atividade_node'
// });

const sequelize = new Sequelize('postgresql://pratica_filmes_user:AlRBW7UiuLNaSxxhv9YtCTFFeEHrmdoM@dpg-d1fhbn2dbo4c73fjc9ag-a/pratica_filmes_db_tfu1');

export default sequelize;