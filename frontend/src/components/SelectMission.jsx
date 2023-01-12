import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMission from "./CardMission";
import "../styles/SelectMission.css";

function SelectMission({ selectedMission, setSelectedMission }) {
  const [mission, setMission] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/mission")
      .then((res) => {
        setMission(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <form className="serviceSelection">
        <label htmlFor="service-select">
          <select
            id="service-select"
            value={selectedService}
                
          >
            <option value="">---</option>
            {services.map((service) => (
              <option key={service.id}>{service.nom}</option>
            ))}
          </select>
        </label>
      </form> */}
      <div className="missionSelection">
        {mission.map((info) => (
          <div>
            <CardMission
              nom_mission={info.nom_mission}
              duree={info.duree}
              setSelectedMission={setSelectedMission}
            />
          </div>
        ))}
      </div>
      {/* <div className="selectedMission">{selectedMission || ""}</div> */}
    </div>
  );
}

export default SelectMission;
