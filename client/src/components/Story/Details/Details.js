import React from 'react';
import { Link } from 'react-router-dom';
import * as storyServices from '../../../services/storyServices';

 import './styles/Details.css';


 class StoryDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            story:null
        }
    }
      
    

    componentDidMount() {
        const id = this.props.match.params.id;
        storyServices.getOne(id).then(story => {
          this.setState({ story });
        });
      }
      render() {
        const { story } = this.state;
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
                            
                            <Link to={`/story/edit/${story._id}`}><button className="button">Edit</button></Link>
                            <Link to={`/story/delete/${story._id}`}><button className="button">Delete</button></Link>
                        </div>
                        <p className="details-story">{story.synopsis}</p>
                    </section>
                );
      }
}
//  const StoryDetails = ( {match} ) => {
    

//     let [story, setStory] = useState({});
    

//     console.log(match.params._id)
//     useEffect(() => {
//         storyServices.getOne(match.params._id)
//             .then(res => {
                
//                 setStory(res)
                
//             })
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <section className="story-details">
//             <h1>{story.title}</h1>
//             <p className="story-city">City:{story.city}</p>
//             <p className="details-country">Country: {story.country}</p>
//             <p className="details-creator">Traveller: {story.creator}</p>
//             <div className ="story-media">
//                 <p className="details-img"><img src={story.imageURL} alt="property of Web" /></p>               
                
//             </div>
            
//             <div className="story-options">
                
//                 <Link to={`/story/details/${story._id}/edit/`}><button className="button">Edit</button></Link>
//                 <Link to={`/story/details/${story._id}/delete`}><button className="button">Delete</button></Link>
//             </div>
//             <p className="details-story">{story.synopsis}</p>
//         </section>
//     );
// };

export default StoryDetails;