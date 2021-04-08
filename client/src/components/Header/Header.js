import './styles/Header.css';



const Header =() =>{
    return (
        <header className="header">
        <nav className="navbar">
            <section className="user-mode">
                <div className="user-options">
                    <a href="/">All Stories</a>
                    <a href="#">My Diary</a>
                    <a  href="/destinations/create">Add a Story</a>
                    <a  href="/about">About</a>
                    <a  href="/contacts">Contacts</a>
                </div>
                <div className="user-settings">
                    <ul>
                        <li className="welcome-message">Welcome, Pesho!</li>
                        <li><a href="#"> Logout</a></li>
                    </ul>
                </div>
            </section>
            <section className="guest-mode">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/register"> Register</a></li>
                    <li><a href="/login">Login</a></li>
                    
                </ul>
            </section>
        </nav>
    </header>
    );
};

export default Header;