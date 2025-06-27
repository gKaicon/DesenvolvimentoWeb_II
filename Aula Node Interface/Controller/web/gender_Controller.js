import { raw } from "express";
import Gender from "../../Models/gender.js";

async function createGender(req, res) {
    const newGender = await Gender.create({
        name: req.body.name,
    });
    res.redirect('/gender');
}

async function listGenders(req, res) {
    const genders = await Gender.findAll();
    res.render('gender/gender', { genders: genders });
}

async function editGender(req, res) {
    const gender = await Gender.findOne({ where: { id: req.body.id } });
    const genders = await Gender.findAll();
    res.render('gender/gender', { action: 'edit', gender_editing: gender.dataValues, genders: genders });

}

async function updateGender(req, res) {
    const { name, id } = req.body;
    const updateGender = await Gender.update({ name }, { where: { id: id } });
    res.redirect('/gender');
}

async function deleteGender(req, res) {
    const id = req.body.id;
    await Gender.destroy({ where: { id: id } });
    res.redirect('/gender');
}

export { createGender, editGender, listGenders, updateGender, deleteGender};