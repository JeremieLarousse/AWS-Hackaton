import React from 'react';
import '../styles/CardVehicule.scss';

const CardVehicule = ({ image, marque, modele, immatriculation, type, date, disponible, autonomie }) => {
    return (
        <div className='card'>
            <div className='image'>
                <img src={image} className='img'></img>
            </div>
            <div className='info'>
                <p><span className='categorie'>Marque :</span> {marque}</p>
                <p><span className='categorie'>Modèle :</span> {modele}</p>
                <p><span className='categorie'>Immatriculation :</span> {immatriculation}</p>
                <p><span className='categorie'>Type :</span> {type}</p>
                <p><span className='categorie'>Date de mise en circulation :</span> {date}</p>
                <p><span className='categorie'>Disponible :</span> {disponible ? 'oui' : 'non'}</p>
                <p><span className='categorie'>Autonomie :</span> {autonomie}</p>
            </div>
        </div>
    );
};

export default CardVehicule;