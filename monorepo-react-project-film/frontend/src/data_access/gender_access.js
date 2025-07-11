import { API_PATH } from "../constants/constants";

async function createOrEditGender(dataGender) {
    const res = await fetch(`${API_PATH}/gender`, {
        method: dataGender.id == null ? 'POST' : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataGender)
    });
    return await res.json();
}

async function listGenders() {
    const res = await fetch(`${API_PATH}/gender/list`);
    const genders = await res.json();
    return genders;
}

async function deleteGender(id) {
    const res = await fetch(`${API_PATH}/gender`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    });
    return await res.json();
}

export { createOrEditGender, listGenders, deleteGender };