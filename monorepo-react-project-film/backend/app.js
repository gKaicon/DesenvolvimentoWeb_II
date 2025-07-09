import express from 'express';
import session from 'express-session';
import css from 'connect-session-sequelize';

import cors from 'cors';

import syncer from './database/syncer.js'

import sequelize from './database/mysql.js';

import film_router from './routers/film_router.js'
import actor_router from './routers/actor_router.js'
import gender_router from './routers/gender_router.js'

if (!await syncer()) {
    process.exit();
}

const app = express();

const SequelizeStore = css(session.Store);

const sequelizeStore = new SequelizeStore({
    db: sequelize,
    tableName: 'sessions',
    checkExpirationInterval: 5 * 60 * 1000,
    expiration: 1 * 60 * 60 * 1000
});

app.use(cors({
    allowOrigin: '*',
    methods: 'GET,PUT,POST,DELETE',
}));

app.use(session({
    secret: '*&long+and+secure+secret=%445',
    name: 'sess_cookie_param',
    store: sequelizeStore,
    cookie: {
        maxAge: 1 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    },
    saveUninitialized: false,
    resave: false
}));

await sequelizeStore.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/film', film_router)
app.use('/api/actor', actor_router)
app.use('/api/gender', gender_router)
//app.use('/user', user_router)

app.listen(80, () => {
    console.log('Servidor rodando...')
})
