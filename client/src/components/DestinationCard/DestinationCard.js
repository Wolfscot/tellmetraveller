import { Link } from 'react-router-dom';

import  './styles/DestinationCard.css';

const Destination = ({
    id,
    title,
    type,
    imageURL,
    city,
    country,
    creator
    
}) => {

    return (
        <li className="destination-card">
           
            <p className="destination-img"><img src={imageURL} alt="property of Web" /></p>
            <h2>{title}</h2>
            <p> {type}</p>
            <p className="destination-city">City: {city}</p>
            <p className="destination-country">Country:{country}</p>
            <p className="destination-creator">Traveller:{creator}</p>
            <div className="destination-info">
                
                <Link to={`/destinations/details/${id}`}><button className="button">Experience</button></Link>
               
            </div>
        </li>
    );
}

export default Destination;