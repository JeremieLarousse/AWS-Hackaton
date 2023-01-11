const router = require("express").Router();

const destinationController = require("../controllers/destination.controller")

router.get("/", destinationController.getDestination);
router.get("/:id", destinationController.getDestinationById);
// router.post("/", destinationController.edit);
// router.put("/:id", destinationController.add);
// router.delete("/:id", destinationController.destroy);

module.exports = router;