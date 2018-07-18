import React from 'react';

// import components

import DayPicker from './datepicker.jsx';
import Places from './placesAPI.jsx';

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

    handleLocation2Change = (e) => {
        if(typeof this.props.location2Change === 'function') {
            this.props.location2Change(e.target.value);
        }
    }

    handleUrlChange = (e) => {
        if(typeof this.props.urlChange === 'function') {
            this.props.urlChange(e.target.value);
        }
    }

    handleCategoryChange = (e) => {
        if(typeof this.props.categoryChange === 'function') {
            this.props.categoryChange(e.target.value);
        }
    }
        
    handleCreateEvent = (e) => {
        if(typeof this.props.createEvent === 'function') {
            this.props.createEvent(e);
        }
    }



    render() {

        return (
            <div className='form-container'>
                <form className='form-contact' onSubmit={this.handleCreateEvent}>
                <h3 style={{whiteSpace: 'pre'}}>{this.props.userMessage}</h3>
                    <label> event title: <br/>
                        <input className="eventTitle" autoFocus maxLength='32' onChange={this.handleTitleChange} value={this.props.title} placeholder="event title goes here"/>
                    </label>
                    <br/>
                    <label> description (hover over event to see preview): <br/>
                        <textarea className="eventDescription" maxLength='325' placeholder="describe the event in at least 60 characters" onChange={this.handleDescriptionChange} value={this.props.description} />
                    </label>
                    <br/>
                    
                    <label> organizer: <br/>
                        <input className="eventOrganizer" maxLength='32'  onChange={this.handleOrganizerChange} value={this.props.organizer} placeholder="tell the others who stands behind the event" />
                    </label>
                   
                    <br/>
                    <label> where: <br/>
                        <Places locationChange={this.props.locationChange} updateCity={this.props.updateCity} />
                        <input className="eventLocation" placeholder="further details" maxLength='32'  onChange={this.handleLocation2Change} value={this.props.location2} />
                    </label>
                    <br/>
                    
                    <DayPicker date={this.props.date} dateChange={this.props.handleDayChange} hourChange={this.props.hourChange} hour={this.props.hour}/> 
                    
                    <label> image url: <br/>
                        <input className="eventUrl" onChange={this.handleUrlChange} value={this.props.url} placeholder="paste image url here"/>
                    </label>
                    <br/>
                    <label> event category: 
                        <select className='eventCategory' onClick={this.handleCategoryChange}>
                            <option disabled selected value> -- select category -- </option>
                            <option>alien education events</option>
                            <option>flight volounteers</option>
                            <option>alien meetings</option>
                            <option>NASA job interviews</option>
                            <option>alien translator workshops</option>
                        </select>
                    </label>
                    <br/>
                        <input  className="eventSubmit" type="submit" value="c r e a t e ! " />
                </form>
            </div>
        )
    }
    componentDidMount() {
        const datepicker = document.querySelector('.DayPickerInput').previousSibling;
        datepicker.innerText = 'when (day and hour):'
    }
}

