
import React, { useState, useEffect} from 'react';

import * as storyServices from '../../../services/storyServices';

import StoryCard from '../../Story/StoryCard/StoryCard';

import './styles/Home.css';



const Home = () =>{
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyServices.getAll()
            .then(res => setStories(res));
    }, []);

    
        return (
            <div className="stories">           

                

                <ul className="story-list">
                {stories.map((story) => (
                       
                            <StoryCard key ={story._id}
                                title={story.title}
                                city={story.city}
                                country={story.country}
                                imageURL={story.imageURL}
                                type = {story.category}
                                synopsis ={story.synopsis}
                                creator = {story.creator}
                            />
                        
                        )
                    )}
                  
                         
                   
                </ul>
            </div>
        );
    }

              
                         
                   

export default Home;