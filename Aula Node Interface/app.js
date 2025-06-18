import express from 'express';
import { create } from 'express-handlebars';
import syncer from './database/syncer.js'

import film_router from './routers/web/film_router.js'
import actor_router from './routers/web/actor_router.js'
import gender_router from './routers/web/gender_router.js'

// import film_router from './routers/api/film_router.js'
// import actor_router from './routers/api/actor_router.js'
// import gender_router from './routers/api/gender_router.js'

if (!await syncer()) {
    process.exit();
}

const app = express();
const hbs = create({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: 'views/layout/',
    partialsDir: 'views/partials/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        eq: function (v1, v2) {
            return v1 === v2;
        },
        contains: function (array, idToFind) {
            return typeof array !== 'undefined' && array.indexOf(idToFind) != -1;
        }
    }
});

app.use(express.urlencoded({ extended: true }));
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

app.use(express.static('public'));

app.listen(80, () => {
    console.log('Servidor rodando...')
})
