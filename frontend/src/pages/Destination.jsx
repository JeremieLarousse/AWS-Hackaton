import React from 'react';
import SelectDestination from '@components/SelectDestination';
import "../styles/destination.scss"
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';
import SearchDestination from '@components/SearchDestination';

function Destination({ setModal, selectedDestination, setSelectedDestination }) {
    
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <div className='destinationContainer'>
            <img src='https://cdn.pixabay.com/photo/2018/08/25/22/32/autos-3631086_1280.jpg' alt='Background' className='background'></img>
            <div className='destinationPage'>
                <button className='returnButton' type='submit' ><TiArrowBack onClick={() =>
                    setModal("")
                } /></button>
                <h1 className='destinationTitle'>Destinations</h1>
                <SearchDestination searchValue={searchValue} setSearchValue={setSearchValue} />
                <SelectDestination selectedDestination={selectedDestination} setSelectedDestination={setSelectedDestination} searchValue={searchValue} />
            </div>
        </div>
    );
};

export default Destination;