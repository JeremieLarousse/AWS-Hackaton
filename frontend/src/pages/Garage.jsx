import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import CardVehicule from '../components/CardVehicule';
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';
import GiSave from '@meronex/icons/gi/GiSave';
import '../styles/PageGarage.scss';

const Garage = ({
    setModal,
    selectedMission,
    setSelectedMission,
    selectedDestination,
    setSlectedDestination }) => {
    // Voitures :
    const [marque, setMarque] = useState('Marque inconnue');
    const [modele, setModele] = useState('Modèle inconnu');
    const [immatriculation, setImmatriculation] = useState('Immatriculation inconnue');
    const [type, setType] = useState('Type inconnu');
    const [date, setDate] = useState('Date inconnue');
    const [disponible, setDisponible] = useState(false);
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
    const handleAvailable = () => {
        setDisponible(!disponible);
        if (disponible == false) {
            setDistance(selectedDestination[1]);
        } else {
            setDistance(0);
        }
        console.log(distance);
    };
    useEffect(() => {
        displayVoiture();
    },);

    return (
        <div className='container'>
            <img src='https://cdn.pixabay.com/photo/2018/08/25/22/32/autos-3631086_1280.jpg' alt='Background' className='background'></img>
            <div className='page'>
                <div className='fixe'>
                    <div className='return'>
                        <button type="submit" onClick={() => setModal("")} className='button_return'><TiArrowBack /></button>
                    </div>
                    <div className='title'>
                        <h1>Parc Automobile</h1>
                    </div>
                    <div className='options'>
                        <div className='texte'>
                            <p>Mission : {selectedMission[0]}</p>
                            <p>Destination : {selectedDestination[0]} ({selectedDestination[1]}km)</p>
                        </div>
                        <div className='label'>
                            <p>Disponible</p>
                            <div class="flipswitch">
                                <input type="checkbox" id="fs" class="flipswitch-cb" name="flipswitch" onClick={handleAvailable}></input>
                                <label for="fs" class="flipswitch-label">
                                    <div class="flipswitch-inner"></div>
                                    <div class="flipswitch-switch"></div>
                                </label>
                            </div>
                        </div>
                        <div className='save'>
                            <button type='submit' className='button'><GiSave /></button>
                        </div>
                    </div>
                </div>
                <div className='pool'>
                    {data
                        .filter((e) =>
                            (parseInt(e.autonomie) >= distance)
                        )
                        .filter((e) =>
                            (e.disponible == disponible || e.disponible == true)
                        )
                        .map((element) => {
                            return (
                                <div>
                                    <CardVehicule
                                        image={element.image_voiture}
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

export default Garage;
