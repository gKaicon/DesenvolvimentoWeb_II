import express from 'express';
import { create } from 'express-handlebars';
import session from 'express-session';
import css from 'connect-session-sequelize';

import syncer from './database/syncer.js'

import sequelize from './database/mysql.js';

import { checkLogged } from './Controller/web/user_Controller.js';

import user_router from './routers/web/user_router.js';
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

const SequelizeStore = css(session.Store);

const sequelizeStore = new SequelizeStore({
    db: sequelize,
    tableName: 'sessions',
    checkExpirationInterval: 5 * 60 * 1000,
    expiration: 1 * 60 * 60 * 1000 
});

app.use(session({
    secret: '*&long+and+secure+secret=%445',
    name: 'sess_cookie_param',
    store: sequelizeStore,
    cookie: {
        maxAge: 1 * 60 * 60 * 1000,
        secure: false, // if using HTTPS
        httpOnly: true // somente browsers
    },
    saveUninitialized: false, 
    resave: false
}));

await sequelizeStore.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/film', checkLogged, film_router)
app.use('/actor', checkLogged, actor_router)
app.use('/gender', checkLogged, gender_router)
app.use('/user', user_router)

app.use(express.static('public'));

app.listen(80, () => {
    console.log('Servidor rodando...')
})
