import React from 'react';
import { NavLink } from "react-router-dom";

const Destination = () => {
    return (
        <div>
            <NavLink to='/'>
                <button type='submit'>Retour</button>
            </NavLink>
            <h1>Destination</h1>
        </div>
    );
};

export default Destination;