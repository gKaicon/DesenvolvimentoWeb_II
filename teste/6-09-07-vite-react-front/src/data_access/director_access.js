import { API_PATH } from "../constants/constants";

async function createDirector(dataDirector) { }

async function listDirectors() {
    const res = await fetch(`${API_PATH}/Directors`, {
        credentials: 'include',
    });
    if (res.status == 401) {
        return [];
    } else {
        const directors = await res.json();
        return directors;
    }
}

async function editDirector() { }

async function deleteDirector() { }

export { createDirector, listDirectors, editDirector, deleteDirector };
