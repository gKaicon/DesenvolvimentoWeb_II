import { Op } from "sequelize";
import User from "../../models/user.js";
import bcrypt from "bcrypt";

async function createUser(req, res) {
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: password
    });
    res.json({ message: "Usuário registrado com sucesso.", user: user });
}

async function login(req, res) {
    console.log(req.body);
    const user = await User.findOne(
        { where: { [Op.or]: { email: req.body.user_name_or_email, user_name: req.body.user_name_or_email } } }
    );
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
            req.session.regenerate(async (err) => {
                req.session.user = user;
                req.app.locals.user = user;
                res.json({ message: "Usuário autenticado.", user: { 
                    name: user.name, 
                    email: user.email, 
                    expires: req.session.cookie.expires }
                });
            });
        }
    } else {
        res.json({ message: "Usuário ou senha inválidos." });
    }
}

async function logout(req, res) {
    req.session.regenerate(err => console.error(err));
    req.session.destroy();
    req.app.locals.user = null;
    res.json({ message: "Sessão encerrada." });
}

async function checkLogged(req, res, next) {
    if (req.session && req.session.user) {
        req.app.locals.user = req.session.user;
        next();
    } else {
        req.app.locals.user = null;
        res.status(401).json({ message: "Usuário não autenticado." });
    }
}

export { createUser, login, logout, checkLogged };