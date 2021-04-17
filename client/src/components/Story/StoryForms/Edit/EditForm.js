import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHistory } from 'react-router'

import * as storyService from '../../../../services/storyServices';
import UserContext from '../../../../utils/UserContext';

import './../styles/StoryForm.css'
 
const EditForm = (props) => {

    const value = React.useContext(UserContext);
    const loggedUserId =  value.user.id;

    const storyCreatorId = props.creator;

    let creator = (loggedUserId === storyCreatorId)
    

    let history = useHistory();
    const id = props._id;

const formik = useFormik({
    initialValues: {
        title: `${props.title}`,
        imageURL: `${props.imageURL}`,
        category: `${props.category}`,        
        synopsis: `${props.synopsis}`,
        
    },
    validationSchema: Yup.object({
        
        title: Yup.string()
            .min(2, 'Minimum 2 characters')
            .required('Required'),
        imageUrl: Yup.string()
            .required('Required'),
        category: Yup.string()
            .required('Required'),
        synopsis: Yup.string()
            .max(500, 'You told too much')
            .required('Required'),
       
    }),
    onSubmit: data => {
        storyService.update(id, data)
        .then(() => {
            history.push('/story/all')
        })
        
    }
});
return (
    <section className="edit-story">
    <h1>Edit Story</h1>

    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input  className="edit-title" 
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
            <p>{formik.errors.title}</p>
        ) : null}

        <label htmlFor="imageURL">Story image</label>
        <input className="edit-image"
        type="text" 
        name="image"
        onChange={formik.handleChange}
        value={formik.values.imageURL}  
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <p>{formik.errors.imageUrl}</p>
        ) : null}
        <label htmlFor="category">Change Category</label>
        <select id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.category}>
        <option value="mountainwalk">Mountain Walk</option>
        <option value="seaside">Sea Side</option>
        <option value="hiking">Hiking</option>
        <option value="tribetourism">Tribe Tourism</option>
        <option value="festival">Festival</option>
        <option value="sports">Sports</option>
        <option value="other">Other</option>
    </select>
    {formik.touched.category && formik.errors.category ? (
            <p>{formik.errors.category}</p>
       ) : null}
       
        <label>Synopsis</label>
        <textarea  
            className="edit-synopsis"
            id="synopsis"
            name="synopsis"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.synopsis}
           />
           {formik.touched.synopsis && formik.errors.synopsis ? (
            <p>{formik.errors.synopsis}</p>
        ) : null}
         {
            creator
            ? <input type="submit" value="Edit"/>
            : <p></p>
        }
        
    </form>    
    </section>
)
};


// import React, { useEffect, useState } from 'react';

// import * as storyServices from '../../../../services/storyServices';
// import '../styles/StoryForm.css'

// const EditForm =({
//     match,
//     history
// }) =>{
//     const [story, setStory] =useState({});

//     useEffect(() => {
//        storyServices.getOne(match.params._id)
//        .then(res =>setStory(res))
//     }, [])

//     const onEditDetailsSave =(e)=>{
//         e.preventDefault();
//         console.log(e.target);
//         let storyId = match.params.storyId;
//         const {title, imageURL, category, synopsis} =e.target;
//         let newStoryInfo = {...story,
//             title:title.value,
//             imageURL:imageURL.value,
//             category: category.value,
//             synopsis:synopsis.value
            
//         }

//         storyServices.update(storyId, newStoryInfo)
//         .then(() =>{
//             history.push(`/`)
//         });
//     }

   

   

export default EditForm;