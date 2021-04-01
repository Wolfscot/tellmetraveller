import { Component } from 'react';

import * as destinationServices from '../../services/destinationServices.js';

import DestinationCard from '../DestinationCard/DestinationCard';
import TypesList from './TypesList/TypesList';
import '../Types/styles/Types.css'

class Types extends Component {
    constructor(props) {
        super(props);

        this.state = {
            destinations: [],
            latestType: 'all',
        }
    }

    componentDidMount() {
        destinationServices.getAll()
            .then(res => this.setState({ destinations: res }))
    }

    componentDidUpdate(prevProps) {
        const type = this.props.match.params.type;

        if (prevProps.match.params.type === type) {
            return;
        }

        destinationServices.getAll(type)
            .then(res => {

                this.setState({ destinations: res, latestType: type })
            })
    }

    render() {
        return (
            <div className="destinations">
                <h1>Destinations</h1>

                <TypesList />

                <ul className="destination-list">
                    {this.state.destinations.map(x => 
                        <DestinationCard key={x.id} {...x} />
                    )}
                </ul>
            </div>
        );
    }
}

export default Types;