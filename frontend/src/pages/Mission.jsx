import React from "react";
import SelectMission from "@components/SelectMission";
import TiArrowBack from "@meronex/icons/ti/TiArrowBack";

function Mission({ selectedMission, setSelectedMission, setModal }) {
  return (
    <div className="containerMission">
      <img
        src="https://cdn.pixabay.com/photo/2018/08/25/22/32/autos-3631086_1280.jpg"
        alt="Background"
        className="background"
      />
      <div className="pageMission">
        <button className="returnButton" type="submit">
          <TiArrowBack onClick={() => setModal("")} />
        </button>
        <h1 className="missionTitle">Mission</h1>
        <SelectMission
          selectedMission={selectedMission}
          setSelectedMission={setSelectedMission}
        />
      </div>
    </div>
  );
}

export default Mission;
