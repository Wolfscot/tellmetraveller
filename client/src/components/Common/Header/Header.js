import './styles/Header.css';
import {Link} from "react-router-dom";
import React from 'react';
import UserContext from '../../../utils/UserContext';



const Header =(props) =>{

    const status = React.useContext(UserContext);
    const {signOut} =props;
    return (
        <header className="header">
        <nav className="navbar">
            <section className="user-mode">
                <div className="user-options">
                <ul>
                <li>{status.signedIn &&<Link to="/all">All Stories</Link>}</li>
                <li>{status.signedIn &&<Link to="/my">My Diary</Link>}</li>
                <li>{status.signedIn &&<Link to="/create">Add a Story</Link>}</li>                 
                </ul> 
                </div>
                <div className="user-settings">
                    <ul>
                    
                    <li>{status.signedIn && <button  onClick={signOut}>Logout</button>}</li>
                    </ul>
                </div>
            </section>
            <section className="guest-mode">
                <ul>
                    
                <li>{!status.signedIn && <Link to="/register">Register</Link>}</li>
                <li>{!status.signedIn && <Link to="/login">Login</Link>}</li>
                    
                </ul>
            </section>
        </nav>
    </header>
    );
};

export default Header;