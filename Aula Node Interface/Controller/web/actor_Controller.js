import Actor from "../../Models/actor.js";

async function createActor(req, res) {
    const { first_name, last_name, birthDate, phoneNumber, email } = req.body;
    const newActor = await Actor.create({
        first_name, last_name, birthDate, phoneNumber, email
    });
    res.render('alerts', { title: 'Actors', body: 'Actor created.' });
}

async function listActors(req, res) {
    const actors = await Actor.findAll();
    res.render('actor/actor', { actor: actors });
}

async function updateActor(req, res){
    const { first_name, last_name, birthDate, phoneNumber, email, id }  = req.body
    const updateActor = await Actor.update({ first_name, last_name, birthDate, phoneNumber, email } , {where: {id: id}})
    res.render('alerts', { title: 'Actors', body: 'Actor edited.' });
}

async function deleteActor(req, res){
    const id = req.body.id
    await Actor.destroy({where: {id: id}})
    res.render('alerts', { title: 'Actors', body: 'Actor '+ id +'deleted.' });
}

async function editActor(req, res) {
    const actor = await Actor.findOne({ where: { id: req.body.id }});
    const actors = await Actor.findAll();
    res.render('actor/actor', { action: 'edit', actor_editing: actor.dataValues, actor: actors });
}


export { createActor, listActors, updateActor, deleteActor, editActor };