import { API_PATH } from "../constants/constants";

async function createUser(dataUser) {
    const res = await fetch(`${API_PATH}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(dataUser)
    });
    const json = await res.json();
    return json.message;
}

async function login(dataUser) {
    const res = await fetch(`${API_PATH}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(dataUser)
    });
    const json = await res.json();
    if (json.user) {
        localStorage.setItem('user_logged', JSON.stringify(json.user));
        return json.user;
    }
    return null;
}

async function logout() {
    const res = await fetch(`${API_PATH}/users/logout`, {
        credentials: 'include',
    });
    const json = await res.json();
    localStorage.setItem('user_logged', '{}');
    return json.message;
}

async function checkUser() {
    const localUser = JSON.parse(localStorage.getItem('user_logged'));
    if (localUser && (new Date(localUser.expires) > new Date(Date.now()))) {
        return localUser;
    } 
    return {};
}

export { createUser, login, logout, checkUser };

// Faltam alguns tratamentos.