import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import CardVehicule from './CardVehicule';
import '../styles/PageGarage.scss';
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';

const array = [
    {
        marque: 'opel',
        modèle: 'corsa'
    },
    {
        marque: 'bmw',
        modèle: 's3'
    },
    {
        marque: 'bmw',
        modèle: 's3'
    },
    {
        marque: 'bmw',
        modèle: 's3'
    },
    {
        marque: 'bmw',
        modèle: 's3'
    },
];



const PageGarage = () => {

    useEffect(() => {
        console.log('test');
    }, [])

    return (
        <div className='container'>
            <img src='https://cdn.pixabay.com/photo/2018/08/25/22/32/autos-3631086_1280.jpg' alt='Background' className='background'></img>
            <div className='page'>
                <div className='return'>
                    <NavLink to='/'>
                        <button type='submit' className='button_return'><TiArrowBack /></button>
                    </NavLink>
                </div>
                <div className='title'>
                    <h1>Parc Automobile</h1>
                </div>
                <div className='options'>
                    <p>Mission : /mission</p>
                    <p>Destination : /destination (/100km)</p>
                </div>
                <div className='pool'>
                    {array.map((element) => {
                        return (
                            <div>
                                <CardVehicule marque={element.marque} modèle={element.modèle} />
                            </div>
                        )
                    })}
                </div>
                <div className='save'>
                    <button type='submit' className='button'>Enregistrer</button>
                </div>
            </div>
        </div>
    );
};

export default PageGarage;