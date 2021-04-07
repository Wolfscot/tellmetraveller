import { NavLink } from 'react-router-dom';

const TypesList = () => {
    return (
        <nav className="navbar-destinations">
            <h1>Destinations</h1>
            <ul>
                <li><NavLink to="/types/all">All</NavLink></li>
                <li><NavLink to="/types/mountain-walk">Mountain Walk</NavLink></li>
                <li><NavLink to="/types/seaside">Sea Side</NavLink></li>
                <li><NavLink to="/types/hiking">Hiking</NavLink></li>
                <li><NavLink to="/types/tribetourism">Tribe Tourism</NavLink></li>
                <li><NavLink to="/types/festival">Festival</NavLink></li>
                <li><NavLink to="/types/sports">Sports</NavLink></li>
                <li><NavLink to="/types/other">Other</NavLink></li>
            </ul>

         
        </nav>
    );
};

export default TypesList;