const express = require('express');
const router = express.Router();
const voituresController = require("../controllers/voitures.controller");

router.get("/", voituresController.getAllVoitures);

module.exports = router;