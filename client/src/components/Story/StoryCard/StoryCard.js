import { Link } from 'react-router-dom';

import  './styles/StoryCard.css';

const Story = ({
    id,
    title,
    category,
    imageURL,
    city,
    country,
    creator
    
}) => {

    return (
        <li className="story-card">
           
            <p className="story-img"><img src={imageURL} alt="property of Web" /></p>
            <h2>{title}</h2>
            <p> {category}</p>
            <p className="story-city">City: {city}</p>
            <p className="story-country">Country:{country}</p>
            <p className="story-creator">Traveller:{creator.username}</p>
            <div className="story-info">
                
                <Link to={`/story/details/${id}`}><button className="button">Experience</button></Link>
               
            </div>
        </li>
    );
}

export default Story;