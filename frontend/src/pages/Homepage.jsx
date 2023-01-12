import React from 'react';
import { NavLink } from "react-router-dom";

import "../../styles/homepage.css";



const Homepage = () => {







    return (
        <div>
            <div>
                <div className="titre">
                    <h1>THE GOOD CAR FOR THE GOOD MISSION</h1>
                </div>
                <div className="themes">

                    <div className="Ym">Your Mission</div>
                    <div className="Yd">Your Destination</div>
                    <div className="Yc">Your Car</div>
                </div>
                <div className='Homepage'>

                    <NavLink to='mission'>

                        <div className="maison1"><button type='submit' className="Missions"></button></div>
                    </NavLink>
                    <NavLink to='destination'>
                        <div className="maison2">  <button type='submit' className="Destinations"></button></div>
                    </NavLink>
                    <NavLink to='garage'>
                        <div className="maison3"> <button type='submit' className="Garage"></button></div>
                    </NavLink>

                </div>

            </div>
            <p className="essai">  quasi, iure cum aliure cum alias sed  quisquam eaque laboriias sed  quisquam eaque laboriosam sequi harum dicta laborum voluptates molestias itaque blanditiis
                autem corporis iste nemo dignissimos atque. Cumque,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, amet. Officiis minima explicabo tempore assumenda veritatis facere doloribus nobis voluptas, aliquid nostrum vitae
                deserunt sed eligendi unde <img src="../src/assets/icons8-bmo96.png" className="test" ></img>odit numquam totam.
                Commodi unde autem rerum blanditiis corporis velit saepe quasi sequi. Harum nulla, incidunt ducimus nihil, beatae assumenda accusamus odit rem cum velit a non repellendus ipsa atque quod illo. Quasi.</p>
        </div>
    );
};

export default Homepage;