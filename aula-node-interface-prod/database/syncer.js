import sequelize from "./mysql.js";
import Film from "../Models/film.js";
import Actor from "../Models/actor.js";
import Gender from "../Models/gender.js";

async function syncer() {
    try {
        await sequelize.authenticate();

        Gender.hasMany(Film, {
            foreignKey: 'genderId', // Explicitando o nome da chave estrangeira
            as: 'films' // Alias para incluir filmes ao consultar gêneros
        });
        Film.belongsTo(Gender, {
            foreignKey: 'genderId', // Explicitando o nome da chave estrangeira
            as: 'gender' // Alias para incluir gênero ao consultar filmes
        });

        Film.belongsToMany(Actor, { through: 'Film_Actor' });
        Actor.belongsToMany(Film, { through: 'Film_Actor' });

    
        await sequelize.sync();
    }
    catch (error) {
        console.log('Erro ao acessar a base de dados.');
        console.log(error);
        return false;
    }
    return true;
}

export default syncer