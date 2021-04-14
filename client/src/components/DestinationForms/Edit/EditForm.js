import React, { useEffect, useState } from 'react';

import * as destinationServices from '../../../services/destinationServices';
import '../styles/DestinationForm.css'

const EditForm =({
    match,
    history
}) =>{
    const [destination, setDest] =useState({});

    useEffect(() => {
       destinationServices.getOne(match.params.destinationId)
       .then(res =>setDest(res))
    }, [])

    const onEditDetailsSave =(e)=>{
        e.preventDefault();
        console.log(e.target);
        let destinationId = match.params.destinationId;
        const {title, imageURL, type, story} =e.target;
        let newDestinationInfo = {...destination,
            title:title.value,
            imageURL:imageURL.value,
            type: type.value,
            story:story.value
            
        }

        destinationServices.update(destinationId, newDestinationInfo)
        .then(() =>{
            history.push(`/`)
        });
    }

   

    return (
        <section className="edit-destination">
        <h1>Edit Destination</h1>
    
        <form onSubmit={onEditDetailsSave}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="edit-title" placeholder="Title..." defaultValue ={destination.title}/>
            <label htmlFor="imageURL">Destinatation image</label>
            <input type="text" name="image" className="edit-image" placeholder="New image..." defaultValue ={destination.imageURL} />
            <label htmlFor="type">Change type</label>
            <select name="type" defaultValue={destination.type}>
            <option value="mountain-walk">Mountain Walk</option>
            <option value="seaside">Sea Side</option>
            <option value="hiking">Hiking</option>
            <option value="tribetourism">Tribe Tourism</option>
            <option value="festival">Festival</option>
            <option value="sports">Sports</option>
            <option value="other">Other</option>
        </select>
            <label>Story</label>
            <textarea type="text" className="edit-story"
                name="story" placeholder="your story here..."defaultValue ={destination.story}>{destination.story}</textarea>
                    
            <input type="submit" value="Edit"/>
        </form>    
        </section>
    )
};

export default EditForm;