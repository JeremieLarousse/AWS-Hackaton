import React from 'react';
import { NavLink } from "react-router-dom";

const Garage = () => {
    return (
        <div>
            <NavLink to='/'>
                <button type='submit'>Retour</button>
            </NavLink>
            <h1>Garage</h1>
        </div>
    );
};

export default Garage;