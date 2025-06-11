import express from 'express';
import { create } from 'express-handlebars';
import syncer from './database/syncer.js'


import film_router from './routers/web/film_router.js'
import actor_router from './routers/web/actor_router.js'
import gender_router from './routers/web/gender_router.js'

if (!await syncer()) {
    process.exit();
}

const app = express();
const hbs = create({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: 'views/layout/',
    partialsDir: 'views/partials/'
});

app.use(express.json());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});



app.use('/film', film_router)
app.use('/actor', actor_router)
app.use('/gender', gender_router)

app.use(express.static('resources'));
app.listen(80, () => {
    console.log('Servidor rodando na porta 80')
})
