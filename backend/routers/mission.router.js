const router = require("express").Router();
const missionController = require("../controllers/mission.controller");

//create
router.post("/", missionController.createMission);

//read
router.get("/", missionController.getAllMissions);

router.get("/:id", missionController.getMissionsById);  

router.delete("/:id", missionController.deleteMission);  

// router.put("/:id", missionController.updateMission);  


module.exports = router