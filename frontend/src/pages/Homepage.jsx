import React, { useState } from "react";
import "../styles/Homepage.scss";
import Destination from "./Destination";
import Mission from "./Mission";
import Garage from "./Garage";

function Homepage() {
    const [selectedMission, setSelectedMission] = useState(['', '']);
    const [selectedDestination, setSelectedDestination] = useState(['', 0]);
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
            {modal == "destination" && <Destination setModal={setModal} setSelectedDestination={setSelectedDestination} selectedDestination={selectedDestination} />}

            <button onClick={() => setModal("garage")} className={((modal == "mission" || modal == "destination" || modal == "garage") && 'hide')}>Garage</button>
            {modal == "garage" && <Garage
                setModal={setModal}
                selectedMission={selectedMission}
                setSelectedMission={setSelectedMission}
                selectedDestination={selectedDestination}
                setSelectedDestination={setSelectedDestination}
            />}

            <div className={(selectedMission[0] || selectedDestination[0]) ? 'options' : "optionsHide"}>
                <div className="selectedMission">
                    {selectedDestination && (
                        <div>
                            <p>Mission sélectionnée : {selectedMission[0]}</p>
                            <p>Durée : {selectedMission[1]} jour(s)</p>

                        </div>
                    )}
                </div>
                <div className="selectedDestination">
                    {selectedDestination && (
                        <div>
                            <p>Destination : {selectedDestination[0]} </p>
                            <p>Distance : {selectedDestination[1]}Km</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Homepage;
