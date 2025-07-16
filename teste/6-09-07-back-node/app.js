import express from 'express';
import { create } from 'express-handlebars';

import session from 'express-session';
import css from 'connect-session-sequelize';

import cors from 'cors';

import film_router from './routers/api/film_router.js';
import film_web_router from './routers/web/film_router.js';
import actor_router from './routers/api/actor_router.js';
import director_router from './routers/api/director_router.js';
import syncer from './database/syncer.js';

import user_web_router from './routers/web/user_router.js';
import sequelize from './database/mysql.js';
import { checkLogged } from './controllers/web/user_controller.js';
import { checkLogged as checkLoggedApi } from './controllers/api/user_controller.js';
import user_router from './routers/api/user_router.js';

if(!await syncer()){
    process.exit();
}

const app = express();

// Logo após a criação da constante app.
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true
}));

const hbs = create({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/'
});

hbs.handlebars.registerHelper('eq', (a, b) => {
    return a == b;
});
hbs.handlebars.registerHelper('contains', (a, b) => {
    return typeof a != 'undefined' && a.indexOf(b) != -1;
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
app.use(express.urlencoded());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});
app.use('/films', checkLogged, film_web_router);
app.use('/actors', checkLogged, actor_router);
app.use('/directors', checkLogged, director_router);
app.use('/users', user_web_router);

// Logo após as rotas web.
app.use('/api/films', checkLoggedApi, film_router);
app.use('/api/actors', checkLoggedApi, actor_router);
app.use('/api/directors', checkLoggedApi, director_router);
app.use('/api/users', user_router);

app.listen(80, () => {
    console.log('Listening...');
});