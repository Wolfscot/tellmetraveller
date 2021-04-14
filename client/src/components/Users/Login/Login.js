
import '../styles/UserForm.css';

const Login = () => {

        return (

            <section className="login-form">
            <h1>Login</h1>   
        <form className="login-info"> 
                    <label htmlFor="username">Username</label>
                   <input type="text" name="username" id="username" placeholder="Traveller"/>
                   <label htmlFor="email">Email </label><input type="email" name="email" id="email" placeholder="your@email.com"/>
                   <label htmlFor="password">Password </label><input type="password" name="password" id="password" placeholder="password..."/>                  
                  <input className="button submit" type="submit" value="Login" />
                
            </form>
            </section>
    );
}

export default Login;