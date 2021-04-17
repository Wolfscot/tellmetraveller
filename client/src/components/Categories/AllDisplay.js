import React from "react";
import   './styles/Display.css'
import StoryCard from '../Story/StoryCard/StoryCard';
 import * as storyServices from '../../services/storyServices';

class AllStories extends React.Component {
    constructor(props) {
        super(props)
        this.state = { stories: [] }
    }      
    

    componentDidMount() {        
        storyServices.getAll().then(stories => {
          this.setState({stories});
        });
      }

    render() {

        const { stories } = this.state;

        return (
            stories?         
                 <ul className="story-list">               
                 {stories.map((story) =>
                   <StoryCard key={story._id} {...story}></StoryCard>)}
               </ul> : <div className="loader"></div>
        );
    }
}

export default AllStories;