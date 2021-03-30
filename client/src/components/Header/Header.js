import './Header.module.css';
//import logo from '../../images/logo.png';

const Header =() =>{
    return (
        <nav>
        <div className ="logo" href="/"></div>
         
        <div className="user">
            <a href="#">Create Story</a>
            <div className="profile">
                <span>Welcome, Traveller@gmail.com</span>
                <a href="#">My Stories</a>
                <a href="#">Logout</a>
            </div>
        </div>
        
        <div className="guest">
            <div className="profile">
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
            <a className="active" href="#">Home Page</a>
        </div>
    </nav>
    );

};

export default Header;