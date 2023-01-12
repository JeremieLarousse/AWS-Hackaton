import React from "react";
// import "../styles/CardVehicule.scss";

function CardMission({ nom_mission, duree, setSelectedMission }) {
  return (
    <div onClick={() => setSelectedMission([nom_mission, duree])}>
      <div>
        <p>
          <span>Type de mission :</span> {nom_mission}
        </p>
        <p><br></br>
          <span>Durée :</span> {duree}
        </p>
      </div>
    </div>
  );
}

export default CardMission;
