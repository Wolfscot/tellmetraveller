import './styles/Header.css';
import {Link} from "react-router-dom";
import React from 'react';




const Header =() =>{
    return (
        <header className="header">
        <nav className="navbar">
            <section className="user-mode">
                <div className="user-options">
                    <Link to="/destinations/all">All Stories</Link>
                    <Link to="/">My Diary</Link>
                    <Link to="/destinations/create">Add a Story</Link>
                    <Link to="/about">About</Link>
                    
                </div>
                <div className="user-settings">
                    <ul>
                        <li className="welcome-message">Welcome, Pesho!</li>
                        <li><Link to="/"> Logout</Link></li>
                    </ul>
                </div>
            </section>
            <section className="guest-mode">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    
                </ul>
            </section>
        </nav>
    </header>
    );
};

export default Header;