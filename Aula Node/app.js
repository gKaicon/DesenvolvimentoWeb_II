import express from 'express';
import film_router from './routers/film_router.js'
import actor_router from './routers/actor_router.js'
import database from './database/mysql.js'


const app = express();

app.use(express.json());

app.use('/film', film_router)
app.use('/actor', actor_router)


database.sync().then(
    app.listen(80, () => { 
        console.log('Servidor rodando na porta 80') 
    })
);