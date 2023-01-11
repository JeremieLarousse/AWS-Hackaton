const connection = require("../connection");

const getModelVoitures = async () => {
    const [result] = await connection.query("SELECT marque, modele, immatriculation, type, DATE_FORMAT(date, \"%d %M %Y\") AS date, disponible, autonomie FROM voiture;");
    return result;
};



module.exports = {
    getModelVoitures,

};