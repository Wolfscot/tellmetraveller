
import '../styles/UserForm.css';

import React from "react";


import { useFormik } from "formik";
import * as Yup from "yup";

const Login = (props) => {
    

  const formik = useFormik({
    initialValues: {
        username:"",        
        password: ""
        
    },
    validationSchema: Yup.object({
        username: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),      
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required!"),
      
    }),

    
        onSubmit: values => { props.login(values)}
    
});
     return (
    <section className="login-form">
      <h1>Log In</h1>
      <form className = "login-info"onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <p>{formik.errors.username}</p>
          )}
        </div>
       
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>       
        
        <div>
        <input className="button submit" type="submit" value="Log In" />
        </div>
      </form>
    </section>
  );
}

export default Login;