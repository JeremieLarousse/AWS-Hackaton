const destinationModel = require("../models/destination.model");

const getDestination = (req, res) => {
    destinationModel.getAllDestinations()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.error(err);
        })
}

const getDestinationById = (req, res) => {
    destinationModel.getDestinationById(req.params.id)
        .then((res))
        .catch((err));
}

module.exports = {
    getDestination,
    getDestinationById
}