import { API_PATH } from "../constants/constants";

async function createOrEditFilm(dataFilm) {
    const method = dataFilm.id == null ? 'POST' : 'PUT'
    const typeRoute = dataFilm.id == null ? 'create' : 'update';
    const res = await fetch(`${API_PATH}/film/${typeRoute}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataFilm)
    });
    return await res.json();
}

async function listFilms() {
    const res = await fetch(`${API_PATH}/film/list`);
    const films = await res.json();
    return films;
}

async function deleteFilm(id) {
    const res = await fetch(`${API_PATH}/film/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    });
    return await res.json();
}

export { createOrEditFilm, listFilms, deleteFilm };