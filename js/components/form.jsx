import React from 'react';
import DayPicker from './datepicker.jsx';

export default class CreateForm extends React.Component {


    handleTitleChange = (e) => {
        if(typeof this.props.titleChange === 'function') {
            this.props.titleChange(e.target.value);
        }
    }

    handleDescriptionChange = (e) => {
        if(typeof this.props.descriptionChange === 'function') {
            this.props.descriptionChange(e.target.value);
        }
    }

    handleOrganizerChange = (e) => {
        if(typeof this.props.organizerChange === 'function') {
            this.props.organizerChange(e.target.value);
        }
    }

    handleLocationChange = (e) => {
        if(typeof this.props.locationChange === 'function') {
            this.props.locationChange(e.target.value);
        }
    }

    handleLocation2Change = (e) => {
        if(typeof this.props.location2Change === 'function') {
            this.props.location2Change(e.target.value);
        }
    }

    render() {

        return (
            <div className='form-container'>
                <form className='form-contact' onSubmit={ this.handleSubmit }>
                <h3 style={{whiteSpace: 'pre'}}>{this.props.userMessage}</h3>
                <br/>
                    <label> event title: <br/>
                        <input className="eventTitle" onChange={this.handleTitleChange} value={this.props.title} placeholder="event title goes here"/>
                    </label>
                    <br/>
                    <label> description: <br/>
                        <textarea className="eventDescription" placeholder="describe the event in at least 60 characters" onChange={this.handleDescriptionChange} value={this.props.description} />
                    </label>
                    <br/>
                    
                    <label> organizer: <br/>
                        <input className="eventOrganizer" onChange={this.handleOrganizerChange} value={this.props.organizer} placeholder="tell the others who's stands behind the event" />
                    </label>
                   
                    <br/>
                    <label> where: <br/>
                        <input className="eventLocation" placeholder="give us the city" onChange={this.handleLocationChange} value={this.props.location} />
                        <input className="eventLocation" placeholder="further details" onChange={this.handleLocation2Change} value={this.props.location2} />
                    </label>
                    <br/>
                    
                    <DayPicker /> 
                    <label>
                    at: <br/>
                    <input className="eventHour" onChange={this.handleHourChange} value={this.props.hour} placeholder='hh-mm' />
                    </label>
                    <br/>
                     {/*
                    <label> image url: <br/>
                        <input className="contactInput" onChange={this.handleNameChange} value={this.state.title} placeholder="paste image url here"/>
                    </label>
                    <br/>
                    <label> Category:
                        <select onClick={this.handleCategoryChange}>
                            <option disabled selected value> -- select category -- </option>
                            <option>alien education events</option>
                            <option>flight volounteers</option>
                            <option>alien meetings</option>
                            <option>NASA job interviews</option>
                            <option>alien translator workshops</option>
                        </select>
                    </label>
                    <br/>
                        <input className="contactSubmit" type="submit" value="Create!" /> */}
                </form>
            </div>
        )
    }
    componentDidMount() {
        const datepicker = document.querySelector('.DayPickerInput').previousSibling;
        datepicker.innerText = 'when:'
    }
}

