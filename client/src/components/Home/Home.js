
import React, { useState, useEffect} from 'react';

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
                {destinations.map((destination) => (
                       
                            <DestinationCard key ={destination._id}
                                title={destination.title}
                                city={destination.city}
                                country={destination.country}
                                imageURL={destination.imageURL}
                                type = {destination.type}
                                story ={destination.story}
                                creator = {destination.creator}
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