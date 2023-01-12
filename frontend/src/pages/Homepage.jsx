import React, { useState } from "react";
import "../styles/Homepage.scss";
import Destination from "./Destination";

import Mission from "./Mission";
import Garage from "./Garage";

function Homepage() {
  const [selectedMission, setSelectedMission] = useState();
  const [modal, setModal] = useState();

  return (
    <div className="Homepage">
      <button onClick={() => setModal("mission")} className={((modal == "mission" || modal == "destination" || modal == "garage") && 'hide')}>Mission</button>
      {modal == "mission" && (
        <Mission
          selectedMission={selectedMission}
          setSelectedMission={setSelectedMission}
          setModal={setModal}
        />
      )}
      <button onClick={() => setModal("destination")} className={((modal == "mission" || modal == "destination" || modal == "garage") && 'hide')}>Destination</button>
      {modal == "destination" && <Destination
        setModal={setModal} />}
      <button onClick={() => setModal("garage")} className={((modal == "mission" || modal == "destination" || modal == "garage") && 'hide')}>Garage</button>
      {modal == "garage" && <Garage setSelectedMission={setSelectedMission} setModal={setModal} />}
      <div className="selectedMission">
        {selectedMission && (
          <p>
            {selectedMission[0]} {selectedMission[1]}
          </p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
