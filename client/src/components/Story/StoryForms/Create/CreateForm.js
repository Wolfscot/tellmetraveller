import * as storyServices from '../../../../services/storyServices';
import InputError from '../../../../Shared/InputError/InputError';
import '../styles/StoryForm.css'
import {useHistory} from "react-router-dom"
import React, {useState} from "react";

const CreateForm = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const onCreateSubmitHandler = (e) => {
        e.preventDefault();

        const {
            title, city, country, imageURL, synopsis, category, creator
        } = e.target;

        storyServices.create(
            title.value, city.value, country.value, imageURL.value, synopsis.value, category.value, creator)
            .then(() => {
                history.push('/story/all')
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
        <section className="create-story">
            <h1>Create Story</h1>
            <form onSubmit={onCreateSubmitHandler}>
                    <label htmlFor="title">Title</label>                        
                    <input type="text" name="title" id="title" placeholder="Title" required />
                    <label htmlFor="city">City</label>                        
                    <input type="text" name="city" id="city" placeholder="City" required />
                    <label htmlFor="country">Country</label>                        
                    <input type="text" name="country" id="country" placeholder="Country" required />
 
                    <label htmlFor="synopsis">Synopsis</label>
                        
                    <textarea rows="7" cols="30" type="text" name="synopsis" id="synopsis"
                                placeholder="Your story here..." required
                                onBlur={onDescriptionHandler}></textarea>
                    <InputError>{errorMessage}</InputError>
                  
                    <label htmlFor="image">Image</label>
                       
                    <input type="text" name="imageURL" id="image" placeholder="Image here..." required/>
                            
                       
                                
                        <label htmlFor="category">Category</label>
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