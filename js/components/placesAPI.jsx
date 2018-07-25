import React from 'react';

// import styled components

import {FormLocation} from './styled-components/new-event-style.jsx';

export default class Places extends React.Component {

    handleLocationChange = (e) => {
        if(typeof this.props.locationChange === 'function') {
            this.props.locationChange(e.target.value);
        }
    }

// define what to do with the city picked by user

    handlePlaceSelect = () => {
        const place = this.autocomplete.getPlace();
        let city = place.address_components
        if(typeof this.props.updateCity === 'function') {
            this.props.updateCity(city);
        }
    }

// each time user tries to type create a new instance of Autocomplete, lookup by id 

    componentDidMount () {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete') , {} )
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect)
    }

    render () {
        return (
            <FormLocation 
                id='autocomplete'   //link with new Autocomplete object
                placeholder="give us the city"
                maxLength='32'
                onChange={this.handleLocationChange} value={this.props.location}
            />
        )
    }


}