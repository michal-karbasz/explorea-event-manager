import React from 'react';

// import components

import DayPicker from './datepicker.jsx';
import Places from './placesAPI.jsx';

export default class CreateForm extends React.Component {



    handleChange = (e) => {
        if(typeof this.props.handleChange === 'function') {
            this.props.handleChange(e);
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
                        <input className="eventTitle" autoFocus maxLength='30' onChange={this.handleChange} name='title' value={this.props.title} placeholder="event title goes here"/>
                    </label>
                    <br/>
                    <label> description (hover over event to see preview): <br/>
                        <textarea className="eventDescription" maxLength='325' placeholder="describe the event in at least 60 characters" onChange={this.handleChange} name='description' value={this.props.description} />
                    </label>
                    <br/>
                    
                    <label> organizer: <br/>
                        <input className="eventOrganizer" maxLength='30' name='organizer' onChange={this.handleChange} value={this.props.organizer} placeholder="tell the others who stands behind the event" />
                    </label>
                   
                    <br/>
                    <label> where: <br/>
                        <Places locationChange={this.props.locationChange} updateCity={this.props.updateCity} />
                        <input className="eventLocation" placeholder="further details" maxLength='30' name='location2' onChange={this.handleChange} value={this.props.location2} />
                    </label>
                    <br/>
                    
                    <DayPicker date={this.props.date} dateChange={this.props.handleDayChange} hourChange={this.props.hourChange} hour={this.props.hour}/> 
                    
                    <label> image url: <br/>
                        <input className="eventUrl" name='imgUrl' onChange={this.handleChange} value={this.props.url} placeholder="paste image url here"/>
                    </label>
                    <br/>
                    <label> event category: 
                        <select className='eventCategory' onChange={this.handleCategoryChange} defaultValue='select'>
                            <option value='select' disabled> -- select category -- </option>
                            <option value='education'>alien education events</option>
                            <option value='flights'>flight volounteers</option>
                            <option value='meetings'>alien meetings</option>
                            <option value='jobs'>NASA job interviews</option>
                            <option value='translation'>alien translation workshops</option>
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

