
import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import * as destinationServices from '../../services/destinationServices.js';

import DestinationCard from '../DestinationCard/DestinationCard';

import './styles/Home.css';



const Home = () =>{
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        destinationServices.getAll()
            .then(res => setDestinations(res));
    }, []);

    
        return (
            <div className="destinations">           

                

                <ul className="destination-list">
                {destinations.map((x) => (
                       
                            <DestinationCard
                                title={x.title}
                                city={x.city}
                                country={x.country}
                                imageURL={x.logoUrl}
                                story ={x.story}
                                creator = {x.creator}
                            />
                        
                        )
                    )}
                  
                         
                   
                </ul>
            </div>
        );
    }





// class Types extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             destinations: [],
//             latestType: 'all',
//         }
//     }

//     componentDidMount() {
//         destinationServices.getAllDestinations()
//             .then(res => this.setState({ destinations: res }))
//     }

//     componentDidUpdate(prevProps) {
//         const type = this.props.match.params.type;

//         if (prevProps.match.params.type === type) {
//             return;
//         }

//         destinationServices.getAllDestinations(type)
//             .then(res => {

//                 this.setState({ destinations: res, latestType: type })
//             })
//     }

//     render() {
//         return (
//             <div className="destinations">               

//                 <TypesList />

//                 <ul className="destination-list">
//                     {this.props.destinations.map(x => 
//                         <DestinationCard key={x._id} {...x} />
//                     )}

                  
                         
                   
//                 </ul>
//             </div>
//         );
//     }
// }

export default Home;