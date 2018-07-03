import React from 'react';

export default class Places extends React.Component {


    handleLocationChange = (e) => {
        if(typeof this.props.locationChange === 'function') {
            this.props.locationChange(e.target.value);
        }
    }

    handlePlaceSelect = () => {
        const place = this.autocomplete.getPlace();
        let city = place.address_components
        if(typeof this.props.updateCity === 'function') {
            this.props.updateCity(city);
        }
    }

    componentDidMount () {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete') , {} )
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect)
    }

    render () {
        return (
            <input 
                id='autocomplete'
                className="eventLocation" 
                placeholder="give us the city"
                maxLength='32'
                onChange={this.handleLocationChange} value={this.props.location}
            />
        )
    }


}