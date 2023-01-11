import React from 'react';
import { NavLink } from "react-router-dom";
import SelectDestination from '@components/SelectDestination';
import "../styles/destination.scss"

const Destination = () => {
    return (
        <div>
            <NavLink to='/'>
                <button type='submit'>Retour</button>
            </NavLink>
            <h1>Destination</h1>
            <SelectDestination />
        </div>
    );
};

export default Destination;