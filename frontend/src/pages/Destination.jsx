import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import SelectDestination from '@components/SelectDestination';
import "../styles/destination.scss"
import TiArrowBack from '@meronex/icons/ti/TiArrowBack';
import SearchDestination from '@components/SearchDestination';

function Destination() {

    const [searchValue, setSearchValue] = React.useState('');


    return (
        <div className='destinationContainer'>

            <div className='destinationPage'>
                <NavLink to='/'>
                    <button className='returnButton' type='submit'><TiArrowBack /></button>
                </NavLink>
                <h1 className='destinationTitle'>Destination</h1>

                <SearchDestination searchValue={searchValue} setSearchValue={setSearchValue} />
                <SelectDestination searchValue={searchValue} />

                <button className="buttonValidation" type="submit" onClick={(e) => {
                    display(e);
                }}>
                    Valider
                </button>
            </div>
        </div>
    );
};

export default Destination;