import '../styles/UserForm.css';

const Register = () => {
    return (
        <section className="register-form">
            <h1>Register</h1>   
        <form className="register-info"> 
                    <label htmlFor="username">Username</label>
                   <input type="text" name="username" id="username" placeholder="Traveller"/>                            
                   <label htmlFor="first Name">First Name</label>
                   <input type="text" name="first name" id="first name" placeholder="Mr.Peter"/>
                   <label htmlFor="last Name">Last Name</label>
                   <input type="text" name="last name" id="last name" placeholder="Peterson"/>                
                    
                   <label htmlFor="Age">Age</label>
                   <input type="number" name="quantity" id="Age" min="18" max="70"/>
                   <label htmlFor="email">Email </label><input type="email" name="email" id="email" placeholder="your@email.com"/>
                   <label htmlFor="password">Password </label><input type="password" name="password" id="password" placeholder="password..."/>
                   <label htmlFor="password">Repeat Password </label><input type="password" name="repassword" id="repassword" placeholder="password..."/>                  
                   
                    
                            <input className="button submit" type="submit" value="Register" />
                
                    
            </form>
            </section>
    );
};

export default Register;