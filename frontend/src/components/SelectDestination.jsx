import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectDestination = ({ searchValue }) => {


    const [destination, setDestination] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/destination")
            .then((res) => {
                setDestination(res.data);
            }
            ).catch((err) => {
                console.log(err)
            })
    }, [])


    return (

        <div className='destinationSelection'>
            {destination
                .filter((el) => {
                    return el.nom_destination.toLowerCase().includes(searchValue.toLowerCase())
                }).map((info) => (
                    <div>
                        <button className='buttonDestination'>

                            <div className='nomDestination'>{info.nom_destination}</div>
                            <div>{info.distance} km</div>
                        </button>
                    </div>
                ))}
        </div>



    );
};

export default SelectDestination;