import React from 'react';
import { NavLink } from "react-router-dom";
import SelectDestination from '@components/SelectDestination';
import "../styles/destination.css"

const Destination = () => {
    return (
        <div>
            <NavLink to='/'>
                <button className='returnButton' type='submit'>Retour</button>
            </NavLink>
            <h1 className='destinationTitle'>Destination</h1>
            <SelectDestination />

            <button className="buttonValidation" type="submit">
                Valider
            </button>

        </div>
    );
};

export default Destination;