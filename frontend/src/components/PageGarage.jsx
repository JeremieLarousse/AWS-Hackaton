import React from 'react';
import { NavLink } from "react-router-dom";
import CardVehicule from './CardVehicule';
import '../styles/PageGarage.scss';

const PageGarage = () => {
    return (
        <div className='container'>
            <div className='return'>
                <NavLink to='/'>
                    <button type='submit'>Retour</button>
                </NavLink>
            </div>
            <div className='title'>
                <h1>GARAGE</h1>
            </div>
            <div className='options'>
                <p>Mission : /mission</p>
                <p>Destination : /destination (/100km)</p>
            </div>
            <div className='pool'>
                <CardVehicule />
            </div>
            <div className='save'>
                <button type='submit' className='button'>Enregistrer</button>
            </div>
        </div>
    );
};

export default PageGarage;