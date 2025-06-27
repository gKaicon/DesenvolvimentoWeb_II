import { Router } from "express";
import { promptUser, createUser, login, logout, promptLogin } from "../../Controller/web/user_Controller.js";

const user_router = Router();

user_router.get('/register', promptUser);
user_router.post('/register', createUser);
user_router.get('/login', promptLogin);
user_router.post('/login', login);
user_router.get('/logout', logout);

export default user_router;