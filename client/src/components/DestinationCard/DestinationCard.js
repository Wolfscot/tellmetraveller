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
            <h2>{title}</h2>
            <p> {type}</p>
            <p className="destination-img"><img src={imageURL} /></p>
            <p className="destination-city">{city}</p>
            <p className="destination-country">{country}</p>
            <p className="destination-creator">{creator}</p>
            <div className="destination-info">
                <Link to="#"><button className="button">Like</button></Link>
                <Link to={`/destinations/details/${id}`}><button className="button">Experience</button></Link>
               
            </div>
        </li>
    );
}

export default Destination;