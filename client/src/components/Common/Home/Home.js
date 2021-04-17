
import React from 'react';
import { Link } from 'react-router-dom'

// import * as storyServices from '../../../services/storyServices';

// import StoryCard from '../../Story/StoryCard/StoryCard';
import mountainwalk from'../../../images/mountainwalk.jpg';
import seaside from'../../../images/seaside.jpg';
import hiking from'../../../images/hiking.jpg';
import tribetourism from '../../../images/tribetourism.jpg';
import festival from '../../../images/festival.jpg';
import sports from '../../../images/sports.jpg';
import other from '../../../images/other.jpg'


import './styles/Home.css';
const Home = () =>{
    return (
        <section className = "stories">
        
            <div className = "category-info">
                <img src ={mountainwalk} alt="mountainwalk"/>
                <Link className="category-link" to="/category/mountainwalk">Mountain Walk</Link>
            </div>
            <div className = "category-info">
                <img src ={seaside} alt="seaside"/>
                <Link className="category-link" to="/category/seaside">Sea Side</Link>
            </div>
            <div className = "category-info">
                <img src ={hiking} alt="hiking"/>
                <Link className="category-link" to="/category/hiking">Hiking</Link>
            </div>
            <div className = "category-info">
                <img src ={tribetourism} alt="tribetourism"/>
                <Link className="category-link" to="/category/tribetourism">Tribe Tourism</Link>
            </div>
            <div className = "category-info">
                <img src ={festival} alt="festival"/>
                <Link className="category-link" to="/category/festival">Festival</Link>
            </div>
            <div className = "category-info">
                <img src ={sports} alt="sports"/>
                <Link className="category-link" to="/category/sports">Sports</Link>
            </div>
            <div className = "category-info">
                <img src ={other} alt="other"/>
                <Link className="category-link" to="/category/other">Other</Link>
            </div>
            </section>
           
        
        )  
    }

              
                         
                   

export default Home;