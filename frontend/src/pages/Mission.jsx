import React from 'react';
import { NavLink } from "react-router-dom";

const Mission = () => {
    return (
        <div>
            <NavLink to='/'>
                <button type='submit'>Retour</button>
            </NavLink>
            <h1>Mission</h1>
        </div>
    );
};

export default Mission;