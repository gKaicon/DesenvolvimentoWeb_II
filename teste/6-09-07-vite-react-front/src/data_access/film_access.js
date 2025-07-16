import { API_PATH } from "../constants/constants";

async function createOrEditFilm(dataFilm) {
    const res = await fetch(`${API_PATH}/films`, {
        method: dataFilm.id == null ? 'POST' : 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(dataFilm)
    });
    return await res.json();
}

async function listFilms() {

    const res = await fetch(`${API_PATH}/films`, {
        credentials: 'include'
    });
    if(res.status == 401) {
        return [];
    } else {
        const films = await res.json();
        return films;
    }
}

async function deleteFilm(id) {
    const res = await fetch(`${API_PATH}/films`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id: id })
    });
    return await res.json();
}

export { createOrEditFilm, listFilms, deleteFilm };