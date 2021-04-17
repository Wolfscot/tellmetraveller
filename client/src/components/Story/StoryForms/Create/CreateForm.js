import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './../styles/StoryForm.css';
import * as storyServices from '../../../../services/storyServices';
 
const CreateForm = (props) => {
 
const formik = useFormik({
    initialValues: {
        
        title: "",
        city: "", 
        country: "",        
        imageURL: "",
        synopsis: "",
        category: "",
    },
    validationSchema: Yup.object({
        title: Yup.string()
            .min(2, 'Minimum 2 characters')
            .max(15, 'Maximum 15 characters')
            .required('Required'),       
        city: Yup.string()
            .min(2, 'Minimum 2 characters')
            .max(15, 'Maximum 15 characters')
            .required('Required'),
        country: Yup.string()
            .min(2, 'Minimum 2 characters')
            .max(15, 'Maximum 15 characters')
            .required('Required'),
        imageURL: Yup.string()
            .required('Required'),
        synopsis: Yup.string()
            .max(500, 'You told too much')
            .required('Required'),
        category: Yup.string()
            .required('Required'),
   }),
    onSubmit: data => {
        storyServices.create(data).then(() => {
            console.log(data);
        })
    }
});
    return (
        <section className="create-story">
            <h1>Create Story</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Title</label>                        
                <input  
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <p>{formik.errors.title}</p>
                    ) : null}
                    <label htmlFor="city">City</label>                        
                    <input 
                        type="text" 
                        name="city" 
                        id="city" 
                        onChange={formik.handleChange}
                        value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <p>{formik.errors.city}</p>
                    ) : null}
                    <label htmlFor="country">Country</label>                        
                    <input 
                        type="text"
                        id="country" 
                        name="country"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                    />
                    {formik.touched.country && formik.errors.country ? (
                        <p>{formik.errors.country}</p>
                    ) : null}
 
                    <label htmlFor="synopsis">Synopsis</label>
                        
                    <textarea rows="7" cols="30" 
                        type="text" 
                        id="synopsis"
                        name="synopsis"                    
                        onChange={formik.handleChange}
                        value={formik.values.synopsis}
                   />
                   {formik.touched.synopsis && formik.errors.synopsis ? (
                    <p>{formik.errors.synopsis}</p>
                ) : null}
                  
                    <label htmlFor="image">Image</label>                       
                    <input 
                        type="text"
                        name="imageURL" 
                        id="image" 
                         onChange={formik.handleChange}
                        value={formik.values.imageURL}  
                       />
                       {formik.touched.imageUrl && formik.errors.imageUrl ? (
                         <p>{formik.errors.imageUrl}</p>
                     ) : null}
                       
                                
                     <label htmlFor="category">Category</label>
                        
                    <select 
                        type="text" 
                         id="category"
                        name="category"                        
                         onChange={formik.handleChange}
                        value={formik.values.category}
                    >
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
                    
                    <input className="button submit" type="submit" value="Create" />
                
            </form>
        </section>
    );
};

export default CreateForm;