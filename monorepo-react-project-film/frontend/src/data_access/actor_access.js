import { API_PATH } from "../constants/constants";


async function createActor() {

}

async function listActors() {
    const res = await fetch(`${API_PATH}/actor/list`);
    const actors = await res.json();
    return actors;
}

async function editActor() {}

async function deleteActor() {}


export { createActor, listActors, editActor, deleteActor };