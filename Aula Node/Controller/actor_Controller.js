import Actor from "../Models/actor.js";

async function createActor(req, res) {
    const { first_name, last_name, birthDate, phoneNumber, email } = req.body;
    const newActor = await Actor.create({
        first_name, last_name, birthDate, phoneNumber, email
    });
    res.status(201).json(newActor);
}

async function listActors(req, res) {
    const actors = await Actor.findAll();
    res.json(actors);
}

async function updateActor(req, res){
    const { first_name, last_name, birthDate, phoneNumber, email, id }  = req.body
    const updateActor = await Actor.update({ first_name, last_name, birthDate, phoneNumber, email } , {where: {id: id}})
    res.status(200).json(updateActor)
}

async function deleteActor(req, res){
    const id = req.body.id
    await Actor.destroy({where: {id: id}})
    res.status(200).json({message : "Registro: " + id + " removido"})
}

export { createActor, listActors, updateActor, deleteActor };