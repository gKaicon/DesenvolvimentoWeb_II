import { Router } from "express";

import { createUser, login, logout } from "../../controllers/api/user_controller.js";

const user_router = Router();
user_router.post('/register', createUser);
user_router.post('/login', login);
user_router.get('/logout', logout);

export default user_router;