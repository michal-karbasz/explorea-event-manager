import React from 'react';

// import components

import Form from './form.jsx';
import BlankEvent from './blank-event.jsx';
import { EventSection, Col } from './styled-components/new-event-style.jsx';

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

    // user input handling functions start


    handleChange = (e) => {
        const target = e.target;
        const value = target.value
        const name = target.name;
        this.setState({ [name]: value} );
    }

    handleLocationChange = (location) => {
        this.setState({location: location})
    }

    updateCity = (city) => {
        this.setState({location: city[0].long_name})
    }

    handleDayChange = (date) => {
        this.setState({selectedDay: date})
    }

    handleHourChange = (hour) => {
        this.setState({hour: hour})
    }

    handleCategoryChange = (category) => {
        this.setState({category: category})
    }

    // user input handling functions end

    // after 'create' button has been clicked, validate the form and if everything is correct collect user's data into a 'New Event' object

    handleCreateEvent = (event) => {
        event.preventDefault();

        //validate the form

        if (this.state.title.length < 3 || this.state.title.length > 30) {
            this.setState({userMessage: "Provide event title (3-30 chars) !"});
        } else if (this.state.description.length < 60) {
            this.setState(
                {userMessage: "Write some additional description (min 60 chars)."}
            );
        } else if (this.state.organizer.length < 3 || this.state.organizer.length > 30) {
            this.setState({userMessage: "Who's the organizer (3-30 chars)?"});
        } else if (this.state.location.length < 1 || this.state.location.length > 30) {
            this.setState({userMessage: "Provide location (1-30 chars)"});
        } else if (this.state.location2.length < 3 || this.state.location2.length > 30) {
            this.setState({userMessage: "Provide location details (3-30 chars)"});
        } else if (this.state.selectedDay === '') {
            this.setState({userMessage: "Pick the event date"});
        } else if (this.state.hour.length < 5) {
            this.setState({userMessage: "Provide valid time"});
        } else if (this.state.category === '-- select category --') {
            this.setState({userMessage: "Select event's category"});
        } else {
            this.setState({userMessage: `Added a new event !`});
            this.copyEvent(); 
        }
    }

    //create a new object containing user data

    copyEvent = () => {
        const newEvent = {
            title: this.state.title,
            description: this.state.description,
            organizer: this.state.organizer,
            location: this.state.location,
            location2: this.state.location2,
            date: this.state.selectedDay,
            hour: this.state.hour,
            image: this.state.imgUrl,
            category: this.state.category,
        };
        this.runAddEvent(newEvent)
        this.clearState()
    }

    // executes parent's function - newEvent object that contains all event's data introduced by user is passed as an argument

    runAddEvent = (newEvent) => {
        if(typeof this.props.addNewEvent === 'function') {
            this.props.addNewEvent(newEvent);
        }
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

    render() {

        const eventData = {
            title: this.state.title,
            description: this.state.description,
            organizer: this.state.organizer,
            location: this.state.location,
            location2: this.state.location2,
            date: this.state.selectedDay,
            hour: this.state.hour,
            imgUrl: this.state.imgUrl,
            category: this.state.category,
        };

        const formProps = {
            userMessage: this.state.userMessage,
            titleChange: this.handleTitleChange,
            descriptionChange: this.handleDescriptionChange,
            organizerChange: this.handleOrganizerChange,
            locationChange: this.handleLocationChange,
            updateCity: this.updateCity,
            location2Change: this.handleLocation2Change,
            handleDayChange: this.handleDayChange,
            hourChange: this.handleHourChange,
            urlChange: this.handleUrlChange,
            categoryChange: this.handleCategoryChange,
            createEvent: this.handleCreateEvent,
            handleChange: this.handleChange 
        };

        return (
            <EventSection>
                <Col>
                    <Form
                        {...eventData}
                        {...formProps} />
                </Col>
                <Col>
                    <BlankEvent
                        {...eventData}
                        add={this.state.add}/>
                </Col>
            </EventSection>
        )
    }
}
