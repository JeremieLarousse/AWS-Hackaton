const connection = require("../connection");

const getAllDestinations = async () => {
    try {
        const [res] = await connection.query("SELECT * FROM destination;");
        return res;
    } catch (err) {
        console.log(err);
        return err;
    }

}


const getDestinationById = (id) => {
    connection.query("SELECT * FROM destination WHERE id = ?", [id])
        .then((res))
        .catch((err))
}
module.exports = {
    getAllDestinations,
    getDestinationById
}