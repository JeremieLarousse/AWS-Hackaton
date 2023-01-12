import React from "react";
import SelectMission from "@components/SelectMission";

function Mission({ selectedMission, setSelectedMission, setModal }) {
  return (
    <div>
      <button type="submit" onClick={() => setModal("")}>
        Retour
      </button>
      <h1>Mission</h1>
      <SelectMission
        selectedMission={selectedMission}
        setSelectedMission={setSelectedMission}
      />
    </div>
  );
}

export default Mission;
