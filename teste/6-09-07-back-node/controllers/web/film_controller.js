import Actor from "../../models/actor.js";
import Director from "../../models/director.js";
import Film from "../../models/film.js";

async function createFilm(req, res) {
    const actors = [];
    for (let i = 0; i < req.body.actors.length; i++) {
        const actor = await Actor.findByPk(req.body.actors[i]);
        actors.push(actor);
    }
    const film = await Film.create({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
        DirectorId: req.body.DirectorId
    });
    await film.addActors(actors);
    res.render('alerts', { title: 'Films', body: 'Film created.' });
}

async function listFilms(req, res) {
    const list = await Film.findAll({ include: [Actor, Director] });
    const list_processed = list.map((film) => { return film.toJSON() });
    console.log(list_processed);
    const directors = await Director.findAll({ raw: true });
    const actors = await Actor.findAll({ raw: true });
    res.render('films/films', { films: list_processed, directors: directors, actors: actors });
}

async function editFilm(req, res) {
    const film = await Film.findOne({ where: { id: req.body.id }, include: Actor });
    const film_editing = film.toJSON();
    const directors = await Director.findAll({ raw: true });
    const actors = await Actor.findAll({ raw: true });
    film_editing.actors = film_editing.Actors.map((ac)=>{
        return ac.id;
    });
    res.render('films/films', {
        action: 'edit',
        film_editing: film_editing,
        directors: directors,
        actors: actors
    });
}

async function saveFilm(req, res) {
    const actors = [];
    for (let i = 0; i < req.body.actors.length; i++) {
        const actor = await Actor.findByPk(req.body.actors[i]);
        actors.push(actor);
    }
    const film = await Film.findOne({ where: { id: req.body.id } });
    film.title = req.body.title;
    film.description = req.body.description;
    film.year = req.body.year;
    film.DirectorId = req.body.DirectorId;
    await film.save();
    await film.setActors(actors);
    res.render('alerts', { title: 'Films', body: 'Film edited.' });
}

async function deleteFilm(req, res) {
    const film = await Film.findOne({ where: { id: req.body.id } });
    await film.destroy();
    res.render('alerts', { title: 'Films', body: 'Film deleted.' });
}

export { createFilm, listFilms, editFilm, saveFilm, deleteFilm };