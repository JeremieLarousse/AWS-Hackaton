import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import SelectDestination from '@components/SelectDestination';
import "../styles/destination.scss"
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';
import SearchDestination from '@components/SearchDestination';

function Destination({ setModal, selectedDestination, setSelectedDestination }) {

    const [searchValue, setSearchValue] = React.useState('');


    return (
        <div className='destinationContainer'>

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