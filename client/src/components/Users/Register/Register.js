import '../styles/UserForm.css';

const Register = () => {
    return (
        <section className="register-form">
            <h1>Register</h1>   
        <form className="register-info"> 
                    <label for="username">Username</label>
                   <input type="text" name="username" id="username" placeholder="Traveller"/>                            
                   <label for="first Name">First Name</label>
                   <input type="text" name="first name" id="first name" placeholder="Mr.Peter" autofocus="autofocus"/>
                   <label for="last Name">Last Name</label>
                   <input type="text" name="last name" id="last name" placeholder="Peterson"/>                
                    
                   <label for="Age">Age</label>
                   <input type="number" name="quantity" id="Age" min="18" max="70"/>
                   <label for="email">Email </label><input type="email" name="email" id="email" placeholder="your@email.com"/>
                   <label for="password">Password </label><input type="password" name="password" id="password" placeholder="password..."/>
                   <label for="password">Repeat Password </label><input type="password" name="password" id="password" placeholder="password..."/>                  
                   
                    
                            <input className="button submit" type="submit" value="Register" />
                
                    
            </form>
            </section>
    );
};

export default Register;