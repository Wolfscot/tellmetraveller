import React, { useEffect, useState } from 'react';

import * as storyServices from '../../../../services/storyServices';
import '../styles/StoryForm.css'

const EditForm =({
    match,
    history
}) =>{
    const [story, setStory] =useState({});

    useEffect(() => {
       storyServices.getOne(match.params.storyId)
       .then(res =>setStory(res))
    }, [])

    const onEditDetailsSave =(e)=>{
        e.preventDefault();
        console.log(e.target);
        let storyId = match.params.storyId;
        const {title, imageURL, category, synopsis} =e.target;
        let newStoryInfo = {...stroy,
            title:title.value,
            imageURL:imageURL.value,
            category: category.value,
            synopsis:synopsis.value
            
        }

        storyServices.update(storyId, newStoryInfo)
        .then(() =>{
            history.push(`/`)
        });
    }

   

    return (
        <section className="edit-story">
        <h1>Edit Story</h1>
    
        <form onSubmit={onEditDetailsSave}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="edit-title" placeholder="Title..." defaultValue ={story.title}/>
            <label htmlFor="imageURL">Story image</label>
            <input type="text" name="image" className="edit-image" placeholder="New image..." defaultValue ={story.imageURL} />
            <label htmlFor="category">Change Category</label>
            <select name="type" defaultValue={story.type}>
            <option value="mountain-walk">Mountain Walk</option>
            <option value="seaside">Sea Side</option>
            <option value="hiking">Hiking</option>
            <option value="tribetourism">Tribe Tourism</option>
            <option value="festival">Festival</option>
            <option value="sports">Sports</option>
            <option value="other">Other</option>
        </select>
            <label>Synopsis</label>
            <textarea type="text" className="edit-synopsis"
                name="story" placeholder="your story here..."defaultValue ={story.synopsis}></textarea>
                    
            <input type="submit" value="Edit"/>
        </form>    
        </section>
    )
};

export default EditForm;