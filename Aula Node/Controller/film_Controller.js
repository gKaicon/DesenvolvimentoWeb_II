import Film from "../Models/film.js";
import Gender from "../Models/gender.js";

async function createFilm(req, res) {
    const newFilm = await Film.create({
        title: req.body.title,
        description: req.body.description,
        release_year: req.body.release_year,
        genderId: req.body.genderId
    });
    res.status(201).json(newFilm);
}

async function listFilms(req, res) {
    const films = await Film.findAll();
    res.json(films);
}

async function updateFilm(req, res){
    const { title, description, release_year, id }  = req.body
    const updateFilm = await Film.update({ title, description, release_year } , {where: {id: id}})
    res.status(200).json(updateFilm)
}

async function deleteFilm(req, res){
    const id = req.body.id
    await Film.destroy({where: {id: id}})
    res.status(200).json({message : "Registro: " + id + " removido"})
}

export { createFilm, listFilms, updateFilm, deleteFilm };