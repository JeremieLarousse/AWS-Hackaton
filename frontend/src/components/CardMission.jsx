import React from "react";
import "../styles/selectMission.css";

function CardMission({ nom_mission, duree, setSelectedMission }) {
  return (
    <div
      className="buttonMission"
      onClick={() => setSelectedMission([nom_mission, duree])}
    >
      <div className="buttonMissionContent">
        <div>
          <span>Type de mission :</span> {nom_mission}
        </div>
        <div>
          {" "}
          <span>Durée :</span> {duree} jour(s)
        </div>
      </div>
    </div>
  );
}

export default CardMission;
