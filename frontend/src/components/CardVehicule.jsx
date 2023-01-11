import React from 'react';
import '../styles/CardVehicule.scss';

const CardVehicule = () => {
    return (
        <div className='card'>
            <div className='image'>
                <img src='https://im.qccdn.fr/node/actualite-renault-clio-e-tech-hybrid-2020-premieres-impressions-80915/original-60267.jpg' alt='Clio' className='img'></img>
            </div>
            <div className='info'>
                <p><span className='categorie'>Marque :</span> /marque</p>
                <p><span className='categorie'>Modèle :</span> /modèle</p>
                <p><span className='categorie'>Immatriculation :</span> /immatriculation</p>
                <p><span className='categorie'>Type :</span> /type</p>
                <p><span className='categorie'>Date de mise en circulation :</span> //////</p>
                <p><span className='categorie'>Disponible :</span> oui</p>
                <p><span className='categorie'>Autonomie :</span> /autonomie</p>
            </div>
        </div>
    );
};

export default CardVehicule;