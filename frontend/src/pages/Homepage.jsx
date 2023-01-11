import React from 'react';
import { NavLink } from "react-router-dom";

import "../../styles/homepage.css";
const Homepage = () => {
    return (


        <div class="loop-wrapper">
            <div class="mountain"></div>
            <div class="hill"></div>
            <div class="tree"></div>
            <div class="tree"></div>
            <div class="tree"></div>
            <div class="rock"></div>
            <div class="truck"></div>
            <div class="wheels"></div>

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
        </div>
    );
};

export default Homepage;