import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Homepage.scss';

const Homepage = () => {
    return (
        <div className='Homepage'>
            <NavLink to='mission'>
                <button type='submit'>Mission</button>
            </NavLink>
            <NavLink to='destination'>
                <button type='submit'>Destination</button>
            </NavLink>
            <NavLink to='garage'>
                <button type='submit'>Garage</button>
            </NavLink>
        </div>
    );
};

export default Homepage;