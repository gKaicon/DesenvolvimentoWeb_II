import express from 'express';
import syncer from './database/syncer.js'

import film_router from './routers/film_router.js'
import actor_router from './routers/actor_router.js'
import gender_router from './routers/gender_router.js'

if (!await syncer()) {
    process.exit();
}

const app = express();

app.use(express.json());

app.use('/film', film_router)
app.use('/actor', actor_router)
app.use('/gender', gender_router)


app.listen(80, () => {
    console.log('Servidor rodando na porta 80')
})
