

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as destinationService from '../../services/destinationServices';

 import './styles/Details.css';

 const DestinationDetails = ( {match} ) => {
    

    let [destination, setDestination] = useState({});

    useEffect(() => {

        destinationService.getOne(match.params.destinationId)
            .then(res => setDestination(res));

    }, []);
    return (
        <section className="destination-details">
            <h1>{destination.title}</h1>
            <p className="details-city">City:{destination.city}</p>
            <p className="details-country">Country: {destination.country}</p>
            <p className="details-creator">Traveller: {destination.creator}</p>
            <div className ="destination-media">
                <p className="details-img"><img src={destination.imageURL} alt="property of Web" /></p>               
                
            </div>
            
            <div className="destination-options">
                
                <Link to={`/destinations/details/${destination._id}/edit/`}><button className="button">Edit</button></Link>
                <Link to={`/destinations/details/${destination._id}/delete`}><button className="button">Delete</button></Link>
            </div>
            <p className="details-story">{destination.story}</p>
        </section>
    );
};

export default DestinationDetails;