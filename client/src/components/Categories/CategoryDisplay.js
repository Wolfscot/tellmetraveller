import React, { Fragment } from "react";

import   './styles/Display.css'
import StoryCard from '../Story/StoryCard/StoryCard'

class StoriesByCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = { stories: [] }
    }

    componentDidMount() { this.getStories(this.props.match.params.id)} 
      
    getStories = async (id) => {
        const response = await fetch(`http://localhost:5000/api/story?category=${id}`)
        
        const stories = await response.json()
        this.setState({stories})
    }       

    render() {

        const { stories } = this.state;

        return <Fragment>
            {   stories?         
                 <ul className="story-list">               
                 {stories.map((story) =>
                   <StoryCard key={story._id} {...story}></StoryCard>)}
               </ul> : <div className="loader"></div>
            }
            </Fragment>
    }
}

export default StoriesByCategory;