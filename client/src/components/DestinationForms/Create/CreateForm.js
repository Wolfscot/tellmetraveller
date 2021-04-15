import * as destinationService from '../../../services/destinationServices';
import InputError from '../../../Shared/InputError/InputError'
import '../styles/DestinationForm.css'
import {useHistory} from "react-router-dom"
import React, {useState} from "react";

const CreateForm = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const onCreateSubmitHandler = (e) => {
        e.preventDefault();

        const {
            title,city,country, imageURL, type, story,creator
        } = e.target;

        destinationService.create(
            title.value,city.value,country.value, imageURL.value, type.value, story.value,creator.value)
            .then(() => {
                history.push('/destinations/all')
            })
    };

    const onDescriptionHandler = (e) => {
        if (e.target.value.length <= 200) {
            setErrorMessage('Tell me more');
        } else {
            setErrorMessage('');
        }
    };
    return (
        <section className="create-destination">
            <h1>Create Story</h1>
            <form onSubmit={onCreateSubmitHandler}>
                    <label htmlFor="title">Title</label>                        
                    <input type="text" name="title" id="title" placeholder="Title" required />
                    <label htmlFor="city">City</label>                        
                    <input type="text" name="city" id="city" placeholder="City" required />
                    <label htmlFor="country">Country</label>                        
                    <input type="text" name="country" id="country" placeholder="Country" required />
 
                    <label htmlFor="story">Story</label>
                        
                    <textarea rows="7" cols="30" type="text" name="story" id="story"
                                placeholder="Your story here..." required
                                onBlur={onDescriptionHandler}></textarea>
                    <InputError>{errorMessage}</InputError>
                  
                    <label htmlFor="image">Image</label>
                       
                    <input type="text" name="imageURL" id="image" placeholder="Image here..." required/>
                            
                       
                                
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