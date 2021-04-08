import {useEffect, useState} from 'react';
import * as destinationService from '../../services/destinationServices';

import './styles/EditForm.css';


const EditForm =({
    match,
    history
}) =>{
    const [destination, setDest] =useState({});

    useEffect(() => {
       destinationService.getOneDestination(match.params.destinationId)
       .then(response =>setDest(response))
    }, [])

    const onEditDetailsSave =(e)=>{
        e.preventDefault();

        let destinationId = match.params.destinationId;
        let newDestinationInfo = {...destination}

        destinationService.updateDestination(destinationId, newDestinationInfo)
        .then(() =>{
            history.push(`/destinations/details/${destinationId}`)
        });
    }

   

    return (
        <section className="edit-destination">
        <h1>Edit Destination</h1>
    
        <form onSubmit={onEditDetailsSave}>
            <label>Title</label>
            <input type="text" name="title" classname="edit-title" placeholder="title..." defaultValue ={destination.title}/>
            <label>Destinatation image</label>
            <input type="text" name="image" className="edit-image" placeholder="image url" defaultValue ={destination.imageURL} />
            <label>Type</label>
            <input type="text" name="type"  className="edit-type"  placeholder="type..." defaultValue ={destination.type}/>
            <label>Story</label>
            <textarea type="text" className="edit-story"
                name="story" placeholder="your story here..."defaultValue ={destination.story}>{destination.story}</textarea>
                    
            <input type="submit" value="Edit"/>
        </form>    
        </section>
    )
};

export default EditForm;