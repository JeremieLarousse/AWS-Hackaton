const voituresModel = require("../models/voitures.model");

const getAllVoitures = async (req, res) => {
    const voitures = await voituresModel.getModelVoitures();
    res.status(200).send(voitures);
};

module.exports = {
    getAllVoitures,
};