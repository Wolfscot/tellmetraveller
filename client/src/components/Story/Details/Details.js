

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as storyServices from '../../../services/storyServices';

 import './styles/Details.css';

 const StoryDetails = ( {match} ) => {
    

    let [story, setStory] = useState({});

    useEffect(() => {

        storyServices.getOne(match.params.storyId)
            .then(res => setStory(res));

    }, []);
    return (
        <section className="story-details">
            <h1>{story.title}</h1>
            <p className="story-city">City:{story.city}</p>
            <p className="details-country">Country: {story.country}</p>
            <p className="details-creator">Traveller: {story.creator}</p>
            <div className ="story-media">
                <p className="details-img"><img src={story.imageURL} alt="property of Web" /></p>               
                
            </div>
            
            <div className="story-options">
                
                <Link to={`/story/details/${story._id}/edit/`}><button className="button">Edit</button></Link>
                <Link to={`/story/details/${story._id}/delete`}><button className="button">Delete</button></Link>
            </div>
            <p className="details-story">{story.synopsis}</p>
        </section>
    );
};

export default StoryDetails;