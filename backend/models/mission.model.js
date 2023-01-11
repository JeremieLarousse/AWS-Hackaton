const connection = require("../connection");


//create
const create = (nom_mission, duree ) => {
    
    return connection.query("INSERT INTO mission (nom_mission, duree) VALUES (?,?)",[nom_mission, duree])
}

//read
const findAll = () => {
    return connection.query("SELECT * FROM  mission;");
  };
  
  const findById = (id) => {
    return connection.query("SELECT * FROM mission WHERE idMission=?", [id]);
  };

// //update
// const update = (nom_mission, duree, id) => {
//     return connection.query("UPDATE mission SET nom_mission = ?, duree = ?, where idMission = ?", [nom_mission, duree, id])
// }

// //delete
const remove = (id) => {
  return connection.query("DELETE FROM mission where idMission = ?", [id])
}

module.exports = {
    create: create,
  findAll: findAll,
  findById: findById,
//   update: update,
  remove: remove
}