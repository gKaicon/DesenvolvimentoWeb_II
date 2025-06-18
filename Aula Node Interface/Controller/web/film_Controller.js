import Film from "../../Models/film.js";
import Gender from "../../Models/gender.js";
import Actor from "../../Models/actor.js";
import { NOW } from "sequelize";

async function createFilm(req, res) {
    const actors = [];

    for (let i = 0; i < req.body.actors.length; i++) {
        const actor = await Actor.findByPk(req.body.actors[i]);
        actors.push(actor);
    }

    const newFilm = await Film.create({
        title: req.body.title,
        description: req.body.description,
        release_year: req.body.release_year,
        genderId: req.body.genderId
    });
    await newFilm.addActors(actors);
    res.render('alerts', { title: 'Films', body: 'Film created.' });
}

async function listFilms(req, res) {
    const films = await Film.findAll({ include: [{ model: Gender, as: 'gender' }, Actor] });
    const actors = await Actor.findAll();
    const genders = await Gender.findAll();
    res.render('film/film', { film: films, actor: actors, gender: genders });
}

async function editFilm(req, res) {
    const film = await Film.findOne({ where: { id: req.body.id }, include: [{ model: Gender, as: 'gender' }, Actor] });
    const films = await Film.findAll({ include: [{ model: Gender, as: 'gender' }, Actor] });
    const genders = await Gender.findAll();
    const actors = await Actor.findAll();
    film.dataValues.actors = film.Actors.map((actor) => actor.id);
    res.render('film/film', { action: 'edit', film_editing: film.dataValues, gender: genders, actor: actors, noRenderActors: 'true', film: films });
}

async function updateFilm(req, res) {
    const actors = [];

    for (let i = 0; i < req.body.actors.length; i++) {
        const actor = await Actor.findByPk(req.body.actors[i]);
        actors.push(actor);
    }

    const { title, description, release_year, id, genderId } = req.body

    const updateFilm = await Film.update({ title, description, release_year, genderId }, { where: { id: id } })
    const film_actor_editing = await Film.findOne({ where: { id: id } });
    await film_actor_editing.setActors(actors);

    res.render('alerts', { title: 'film', body: 'Film edited.' });
}

async function deleteFilm(req, res) {
    const id = req.body.id
    await Film.destroy({ where: { id: id } })
    res.render('alerts', { title: 'Films', body: 'Film ' + id + 'deleted.' });
}

export { createFilm, listFilms, editFilm, updateFilm, deleteFilm };