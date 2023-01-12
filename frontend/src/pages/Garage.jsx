import React from "react";
import { NavLink } from "react-router-dom";
import PageGarage from "../components/PageGarage";

function Garage() {
  return (
    <div>
      <NavLink to="/">
        <PageGarage />
      </NavLink>
    </div>
  );
}


export default Garage;
