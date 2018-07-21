import React from 'react';

// import components

import DayPicker from './datepicker.jsx';
import Places from './placesAPI.jsx';

const CreateForm = props => {

    //execute handling multiple input changes

    const runHandleChange = (e) => {
        if(typeof props.handleChange === 'function') {
            props.handleChange(e);
        }
    }

    //execute changing category img

    const runHandleCategoryChange = (e) => {
        if(typeof props.categoryChange === 'function') {
            props.categoryChange(e.target.value);
        }
    }
        
    //execute adding a new event on submit (create) button click

    const runHandleCreateEvent = (e) => {
        if(typeof props.createEvent === 'function') {
            props.createEvent(e);
        }
    }

    return (
        <div className='form-container'>
            <form className='form-contact' onSubmit={runHandleCreateEvent}>
            <h3 style={{whiteSpace: 'pre'}}>{props.userMessage}</h3>
                <label> event title: <br/>
                    <input className="event-title" autoFocus maxLength='30' onChange={runHandleChange} name='title' value={props.title} placeholder="event title goes here"/>
                </label>
                <br/>
                <label> description (hover over event to see preview): <br/>
                    <textarea className="event-description" maxLength='325' placeholder="describe the event in at least 60 characters" onChange={runHandleChange} name='description' value={props.description} />
                </label>
                <br/>
                
                <label> organizer: <br/>
                    <input className="event-organizer" maxLength='30' name='organizer' onChange={runHandleChange} value={props.organizer} placeholder="tell the others who stands behind the event" />
                </label>
                
                <br/>
                <label> where: <br/>
                    <Places locationChange={props.locationChange} updateCity={props.updateCity} />
                    <input className="event-location" placeholder="further details" maxLength='30' name='location2' onChange={runHandleChange} value={props.location2} />
                </label>
                <br/>
                
                <DayPicker date={props.date} dateChange={props.handleDayChange} hourChange={props.hourChange} hour={props.hour}/> 
                
                <label> image url: <br/>
                    <input className="event-url" name='imgUrl' onChange={runHandleChange} value={props.url} placeholder="paste image url here"/>
                </label>
                <br/>
                <label> event category: 
                    <select className='event-category' onChange={runHandleCategoryChange} defaultValue='select'>
                        <option value='select' disabled> -- select category -- </option>
                        <option value='education'>alien education events</option>
                        <option value='flights'>flight volounteers</option>
                        <option value='meetings'>alien meetings</option>
                        <option value='jobs'>NASA job interviews</option>
                        <option value='translation'>alien translation workshops</option>
                    </select>
                </label>
                <br/>
                    <input  className="event-submit" type="submit" value="c r e a t e ! " />
            </form>
        </div>
    )
}

export default CreateForm;