import * as destinationService from '../../../services/destinationServices';

import '../styles/DestinationForm.css'
const CreateForm = ({
    history,
}) => {
    const onCreateDestinationSubmitHandler = (e) => {
        e.preventDefault();
        
        const { title,city,country, imageURL, type, story } = e.target;

        destinationService.createDestination(title.value, city.value, country.value,imageURL.value, type.value, story.value)
            .then(() => {
                history.push('/');
            })
    };

    return (
        <section className="create-destination">
            <h1>Create Story</h1>
            <form onSubmit={onCreateDestinationSubmitHandler}>
                    <label htmlFor="title">Title</label>                        
                    <input type="text" name="title" id="title" placeholder="Title" />
                    <label htmlFor="city">City</label>                        
                    <input type="text" name="city" id="city" placeholder="City" />
                    <label htmlFor="country">Country</label>                        
                    <input type="text" name="country" id="country" placeholder="Country" />
 
                    <label htmlFor="story">Story</label>
                        
                    <textarea rows="7" cols="30" type="text" name="story" id="story"
                                placeholder="Your story here..."></textarea>
                     
                  
                    <label htmlFor="image">Image</label>
                       
                    <input type="text" name="imageURL" id="image" placeholder="Image here..." />
                            
                       
                                
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="mountain-walk">Mountain Walk</option>
                                <option value="seaside">Sea Side</option>
                                <option value="hiking">Hiking</option>
                                <option value="tribetourism">Tribe Tourism</option>
                                <option value="festival">Festival</option>
                                <option value="sports">Sports</option>
                                <option value="other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    
                    <input className="button submit" type="submit" value="Create" />
                
            </form>
        </section>
    );
};

export default CreateForm;