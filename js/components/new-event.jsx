import React from 'react';
import Form from './form.jsx';
import BlankEvent from './blank-event.jsx';


export default class NewEvent extends React.Component {

    state = {
        title: '',
        description: '',
        organizer: '',
        location: '',
        location2: '',
        selectedDay: '',
        hour: '',
        imgUrl: '../images/background1.jpg',
        category: '-- select category --',
        userMessage: `Hi! Fill in the below fields to create a new event:`,
    }

    handleTitleChange = (title) => {
        this.setState({title: title})
    }

    handleDescriptionChange = (description) => {
        this.setState({description: description})
    }

    handleOrganizerChange = (organizer) => {
        this.setState({organizer: organizer})
    }

    handleLocationChange = (location) => {
        this.setState({location: location})
        // fetch(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyANDkkP1jJA17HPe5I379Ov3Lu2Qr4PUwU&input=${this.state.location}
        // `)
        //     .then(resp => {
        //         if(resp.ok) {
        //             return resp.json();
        //         } else {
        //             throw new Error('Blad sieci!');
        //         }
        //     })
        //     .then(data => {
        //         this.setState({
        //             location: data,
        //         })
        //     })
        //     .catch(err => console.log(err));
    }

    
    handleLocation2Change = (location2) => {
        this.setState({location2: location2})
    }

    handleDayChange = (date) => {
        this.setState({selectedDay: date })
      }

    handleHourChange = (hour) => {
        this.setState({hour: hour})
    }

    handleUrlChange = (url) => {
        this.setState({imgUrl: url })
    }

    handleCategoryChange = (category) => {
        this.setState({category: category })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <section className='new-flex-container'>
                <div className="col">
                    <Form title={this.state.title} description={this.state.description} organizer={this.state.organizer} location={this.state.location} location2={this.state.location2} date={this.state.selectedDay} hour={this.state.hour} imgUrl={this.state.imgUrl} category={this.state.category} userMessage={this.state.userMessage}
                    titleChange={this.handleTitleChange} descriptionChange={this.handleDescriptionChange} organizerChange={this.handleOrganizerChange} locationChange={this.handleLocationChange} location2Change={this.handleLocation2Change} handleDayChange={this.handleDayChange} hourChange={this.handleHourChange} urlChange={this.handleUrlChange} categoryChange={this.handleCategoryChange}/>
                </div>
                <div className="col">
                    {/* <h1> live preview 
                    <img src="./icons/telescope.png" className='scope-icon'/>
                    </h1> */}
                    <BlankEvent title={this.state.title} description={this.state.description} organizer={this.state.organizer} location={this.state.location} location2={this.state.location2} date={this.state.selectedDay} hour={this.state.hour} imgUrl={this.state.imgUrl} category={this.state.category}/>
                </div>
            </section>
        )
}


}

