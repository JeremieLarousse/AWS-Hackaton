import React, { useState } from "react";
import "../styles/Homepage.scss";
import Destination from "./Destination";

import Mission from "./Mission";
import Garage from "./Garage";

function Homepage() {
    const [selectedMission, setSelectedMission] = useState();
    const [selectedDestination, setSelectedDestination] = useState();
    const [modal, setModal] = useState();


    return (
        <div className="Homepage">
            <button onClick={() => setModal("mission")}>Mission</button>
            {modal == "mission" && (
                <Mission
                    selectedMission={selectedMission}
                    setSelectedMission={setSelectedMission}
                    setModal={setModal}
                />
            )}
            <button onClick={() => setModal("destination")}>Destination</button>
            {modal == "destination" && <Destination setModal={setModal} setSelectedDestination={setSelectedDestination} selectedDestination={selectedDestination} />}
            <button onClick={() => setModal("garage")}>Garage</button>
            {modal == "garage" && <Garage setSelectedMission={setSelectedMission} />}
            <div className="selectedMission">
                {selectedMission && (
                    <p>
                        {selectedMission[0]} {selectedMission[1]}
                    </p>
                )}
            </div>
            <div className="selectedDestination">
                {selectedDestination && (
                    <p>
                        {selectedDestination[0]} {selectedDestination[1]}
                    </p>
                )}
            </div>
        </div>
    );

}

export default Homepage;
