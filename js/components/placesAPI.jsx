import React from 'react';

export default class Places extends React.Component {


    initAutocomplete = () => {
        let autocomplete = new google.maps.places.Autocomplete (document.getElementById('autocomplete') , {} )
        autocomplete.addListiner('place_changed', this.handlePlaceSelect)
    }


    handleLocationChange = (e) => {
        if(typeof this.props.locationChange === 'function') {
            this.props.locationChange(e.target.value);
        }
    }

    handlePlaceSelect = () => {
        const componentForm = {
            city: 'long_name'
        }
    }

    componentDidMount () {
        this.initAutocomplete();
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