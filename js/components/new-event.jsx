import React from 'react';

// import components

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
        currentEvents: []
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
    }

    updateCity = (city) => {
        this.setState({location: city[0].long_name})
    }

    handleLocation2Change = (location2) => {
        this.setState({location2: location2})
    }

    handleDayChange = (date) => {
        this.setState({selectedDay: date})
    }

    handleHourChange = (hour) => {
        this.setState({hour: hour})
    }

    handleUrlChange = (url) => {
        this.setState({imgUrl: url})
    }

    handleCategoryChange = (category) => {
        this.setState({category: category})
    }

    handleCreateEvent = (event) => {
        event.preventDefault();

        //validate the form

        // if (this.state.title.length < 3 || this.state.title.length > 32) {
        //     this.setState({userMessage: "Provide event title (3-32 chars) !"});
        // } else if (this.state.description.length < 60) {
        //     this.setState(
        //         {userMessage: "Write some additional description (min 60 chars)."}
        //     );
        // } else if (this.state.organizer.length < 3 || this.state.organizer.length > 32) {
        //     this.setState({userMessage: "Who's the organizer (3-32 chars)?"});
        // } else if (this.state.location.length < 1 || this.state.location.length > 32) {
        //     this.setState({userMessage: "Provide location (1-32 chars)"});
        // } else if (this.state.location2.length < 3 || this.state.location2.length > 32) {
        //     this.setState({userMessage: "Provide location details (3-32 chars)"});
        // } else if (this.state.selectedDay === '') {
        //     this.setState({userMessage: "Pick the event date"});
        // } else if (this.state.hour.length < 5) {
        //     this.setState({userMessage: "Provide valid time"});
        // } else if (this.state.category === '-- select category --') {
        //     this.setState({userMessage: "Select event's category"});
        // } else {
            this.setState({userMessage: `Added a new event !`});
            this.cloneEvent();
        // }
    }

    cloneEvent = () => {
        let newEvent = document.querySelector('.event-box');
        let clone = newEvent.cloneNode(true);
        document.getElementById('event-section').appendChild(clone);
        this.clearState()
    }

    //clears form's input after the event has been added

    clearState = () => {
        this.setState({
            title: '',
            description: '',
            organizer: '',
            location: '',
            location2: '',
            selectedDay: '',
            hour: '',
            imgUrl: '../images/background1.jpg',
            category: '',
            userMessage: `Your event has just been added.
Feel free to create another one:`
        })
    }

    sendEventsArr = (eventArr) => {
        if (typeof this.props.getEventsArray === 'function') {
            this.props.getEventsArray(eventArr);
        }
    }

    render() {

        return (
            <section className='new-flex-container'>
                <div className="col">
                    <Form
                        title={this.state.title}
                        description={this.state.description}
                        organizer={this.state.organizer}
                        location={this.state.location}
                        location2={this.state.location2}
                        date={this.state.selectedDay}
                        hour={this.state.hour}
                        imgUrl={this.state.imgUrl}
                        category={this.state.category}
                        userMessage={this.state.userMessage}
                        titleChange={this.handleTitleChange}
                        descriptionChange={this.handleDescriptionChange}
                        organizerChange={this.handleOrganizerChange}
                        locationChange={this.handleLocationChange}
                        updateCity={this.updateCity}
                        location2Change={this.handleLocation2Change}
                        handleDayChange={this.handleDayChange}
                        hourChange={this.handleHourChange}
                        urlChange={this.handleUrlChange}
                        categoryChange={this.handleCategoryChange}
                        createEvent={this.handleCreateEvent}/>
                </div>
                <div className="col">
                    <BlankEvent
                        title={this.state.title}
                        description={this.state.description}
                        organizer={this.state.organizer}
                        location={this.state.location}
                        location2={this.state.location2}
                        date={this.state.selectedDay}
                        hour={this.state.hour}
                        imgUrl={this.state.imgUrl}
                        category={this.state.category}
                        add={this.state.add}/>
                </div>
            </section>
        )
    }

}
