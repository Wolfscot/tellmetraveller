import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as destinationService from '../../services/destinationServices';

 import './styles/Details.css';

const DestinationDetails = ({
    match
}) => {
    let [destination, setDest] = useState({});

    useEffect(() => {
        destinationService.getOneDestination(match.params.destinationId)
            .then(res => setDest(res));
    }, []);

    const oButtonVoteClickHandler = () => {
        let votes = destination.votes + 1;

        destinationService.destination(match.params.destinationId, votes)
            .then((populatedDestination) => {
                setDest(state => ({...state, votes: Number(populatedDestination.votes)}))
            });
    };

    return (
        <section className="destination-details">
            <h3>{destination.title}</h3>
            <p className="details-city">{destination.city}</p>
            <p className="details-country">{destination.country}</p>
            <p>Vote counter: {destination.votes}
                <button className="button" onClick={oButtonVoteClickHandler}>
                   Vote
                </button>
            </p>
            <p className="details-img"><img src={destination.imageURL} /></p>
            <p className="details-story">{destination.story}</p>
            <p className="details-creator">{destination.creator}</p>
            <div className="destination-options">
                <Link to={`/destinations/details/${destination.id}/edit`}><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
            </div>
        </section>
    );
};

export default DestinationDetails;