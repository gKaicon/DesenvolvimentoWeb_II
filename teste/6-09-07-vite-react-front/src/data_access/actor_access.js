import { API_PATH } from "../constants/constants";

async function createActor(dataActor) { }

async function listActors() {
    const res = await fetch(`${API_PATH}/Actors`, {
        credentials: 'include',
    });
    if (res.status == 401) {
        return [];
    } else {
        const actors = await res.json();
        return actors;
    }
}

async function editActor() { }

async function deleteActor() { }

export { createActor, listActors, editActor, deleteActor };