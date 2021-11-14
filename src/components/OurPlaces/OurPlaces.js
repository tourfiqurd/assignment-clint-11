import React, { useEffect, useState } from 'react';
import SingleProduct from '../SinglePage/SingleProduct';
import "./OurPlaces.css"

const OurPlaces = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    console.log(places);
    return (
        <div>
            <div className="text-center">
                <p>GREAT PLACES TO VISIT</p>
                <h1>Search and Enjoy!</h1>
                <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.</p>
            </div>
            <div>
                <div class="container">
                    <div class="row">
                        {places?.map(place => <SingleProduct key={place._id} place={place} ></SingleProduct>)}



                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurPlaces;