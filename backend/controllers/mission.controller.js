const missionModel = require("../models/mission.model");

//create
const createMission = (req, res) => {
    missionModel.create(req.body.nom_mission, req.body.duree)
        .then(([result]) => {
          res.status(200).send([result]);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error saving the mission");
        });
    };

//read
const getAllMissions = (req, res) => {
    missionModel
      .findAll()
      .then(([result]) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getMissionsById = (req, res) => {
    missionModel
      .findById(req.params.id)
      .then(([result]) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

// const updateMission = (req, res) => {
//     const {nom_mission, duree } = req.body;
//     const id = parseInt(req.params.id);
//     missionModel
//       .update(nom_mission, duree, id)
//       .then(([result]) => {
//         res.status(200).send(result);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };


const deleteMission = (req, res) => {
    missionModel
      .remove(req.params.id)
      .then(([result]) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

module.exports = {
    createMission: createMission,
  getAllMissions: getAllMissions,
  getMissionsById: getMissionsById,
//   updateMission: updateMission,
deleteMission: deleteMission
}