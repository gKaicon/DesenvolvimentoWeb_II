import { Op } from "sequelize";
import User from "../../Models/user.js";
import bcrypt from "bcrypt";

async function promptUser(req, res) {
    res.render('user/register');
}

async function createUser(req, res) {
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: password
    });
    res.redirect('/user/login');
}

async function promptLogin(req, res) {
    res.render('user/login');
}

async function login(req, res) {
    const user = await User.findOne(
        { where: { [Op.or]: { email: req.body.user_name_or_email, user_name: req.body.user_name_or_email } } }
    );
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
            req.session.regenerate(async (err) => {
                req.session.user = user;
                req.app.locals.user = user;
                res.redirect('/');
            });
        }
    } else {
        res.redirect('/user/login');
    }
}

async function logout(req, res) {
    req.session.regenerate(err => console.error(err));
    req.session.destroy();
    req.app.locals.user = null;
    res.redirect('/user/login');
}



async function checkLogged(req, res, next) {
    if (req.session && req.session.user) {
        req.app.locals.user = req.session.user;
        next();
    } else {
        req.app.locals.user = null;
        res.redirect('/user/login');
    }
}

export { promptUser, createUser, promptLogin, login, logout, checkLogged };