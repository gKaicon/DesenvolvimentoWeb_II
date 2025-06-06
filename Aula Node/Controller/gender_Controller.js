import Gender from "../Models/gender.js";

async function createGender(req, res) {
    const newGender = await Gender.create({
        name: req.body.name,
    });
    res.status(201).json(newGender);
}

async function listGenders(req, res) {
    const genders = await Gender.findAll();
    res.json(genders);
}

async function updateGender(req, res) {
    const { name, id } = req.body;
    const updateGender = await Gender.update({ name }, { where: { id: id } });
    res.status(200).json(updateGender);
}

async function deleteGender(req, res) {
    const id = req.body.id;
    await Gender.destroy({ where: { id: id } });
    res.status(200).json({ message: "Registro: " + id + " removido" });
}

export { createGender, listGenders, updateGender, deleteGender };