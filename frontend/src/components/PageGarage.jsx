import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import CardVehicule from './CardVehicule';
import '../styles/PageGarage.scss';
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';
import GiSave from '@meronex/icons/gi/GiSave';
import { element } from 'prop-types';

const PageGarage = () => {
    // Voitures :
    const [marque, setMarque] = useState('Marque inconnue');
    const [modele, setModele] = useState('Modèle inconnu');
    const [immatriculation, setImmatriculation] = useState('Immatriculation inconnue');
    const [type, setType] = useState('Type inconnu');
    const [date, setDate] = useState('Date inconnue');
    const [disponible, setDisponible] = useState('Disponibilité inconnue');
    const [autonomie, setAutonomie] = useState('Autonomie inconnue');

    // Mission et destination :
    const [mission, setMission] = useState('Livraison');
    const [destination, setDestination] = useState('Sud');
    const [distance, setDistance] = useState(0);

    // Axios :                                      
    const [data, setData] = useState([]);

    const displayVoiture = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/parc`)
            .then((res) => {
                setData(res.data);
            })
    };
    // const handleDistance = (e) => {
    //     setDistance(e.target.value);
    // };
    useEffect(() => {
        displayVoiture();
    }, [])

    return (
        <div className='container'>
            <img src='https://cdn.pixabay.com/photo/2018/08/25/22/32/autos-3631086_1280.jpg' alt='Background' className='background'></img>
            <div className='page'>
                <div className='fixe'>
                    <div className='return'>
                        <NavLink to='/'>
                            <button type='submit' className='button_return'><TiArrowBack /></button>
                        </NavLink>
                    </div>
                    <div className='title'>
                        <h1>Parc Automobile</h1>
                    </div>
                    <div className='options'>
                        <div className='texte'>
                            <p>Mission : {mission}</p>
                            <p>Destination : {destination} ({distance}km)</p>
                        </div>
                        {/* <input onChange={handleDistance}></input> */}
                        <div className='save'>
                            <button type='submit' className='button'><GiSave /></button>
                        </div>
                    </div>
                </div>
                <div className='pool'>
                    {data
                        .filter((e) =>
                            (e.autonomie >= distance)
                        )
                        .map((element) => {
                            return (
                                <div>
                                    <CardVehicule
                                        marque={element.marque}
                                        modele={element.modele}
                                        immatriculation={element.immatriculation}
                                        type={element.type}
                                        date={element.date}
                                        disponible={element.disponible}
                                        autonomie={element.autonomie} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    );
};

export default PageGarage;