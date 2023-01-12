import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import SelectDestination from '@components/SelectDestination';
import "../styles/destination.scss"
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';

function Destination() {
    return (
        <div className='destinationContainer'>

            <div className='destinationPage'>
                <NavLink to='/'>
                    <button className='returnButton' type='submit'><TiArrowBack /></button>
                </NavLink>
                <h1 className='destinationTitle'>Destination</h1>

                <SelectDestination />

                <button className="buttonValidation" type="submit">
                    Valider
                </button>
            </div>
        </div>
    );
};

export default Destination;