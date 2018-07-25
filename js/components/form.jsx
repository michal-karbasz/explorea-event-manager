import React from 'react';

// import components

import DayPicker from './datepicker.jsx';
import Places from './placesAPI.jsx';
import { FormContainer, H3, Label, Input, FormLocation, FormSelect, CreateButton, Textarea } from './styled-components/new-event-style.jsx';

// import styled components

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
        <FormContainer>
            <form onSubmit={runHandleCreateEvent}>
            <H3>{props.userMessage}</H3>
                <Label> event title: <br/>
                    <Input autoFocus maxLength='30' onChange={runHandleChange} name='title' value={props.title} placeholder="event title goes here"/>
                </Label>
                <br/>
                <Label> description (hover over event to see preview): <br/>
                    <Textarea maxLength='325' placeholder="describe the event in at least 60 characters" onChange={runHandleChange} name='description' value={props.description} />
                </Label>
                <br/>
                
                <Label> organizer: <br/>
                    <Input maxLength='30' name='organizer' onChange={runHandleChange} value={props.organizer} placeholder="tell the others who stands behind the event" />
                </Label>
                
                <br/>
                <Label> where: <br/>
                    <Places locationChange={props.locationChange} updateCity={props.updateCity} />
                    <FormLocation placeholder="further details" maxLength='30' name='location2' onChange={runHandleChange} value={props.location2} />
                </Label>
                <br/>
                
                <DayPicker date={props.date} dateChange={props.handleDayChange} hourChange={props.hourChange} hour={props.hour}/> 
                
                <Label> image url: <br/>
                    <Input  name='imgUrl' onChange={runHandleChange} value={props.url} placeholder="paste image url here"/>
                </Label>
                <br/>
                <Label> event category: 
                    <FormSelect onChange={runHandleCategoryChange} defaultValue='select'>
                        <option value='select' disabled> -- select category -- </option>
                        <option value='education'>alien education events</option>
                        <option value='flights'>flight volounteers</option>
                        <option value='meetings'>alien meetings</option>
                        <option value='jobs'>NASA job interviews</option>
                        <option value='translation'>alien translation workshops</option>
                    </FormSelect>
                </Label>
                <br/>
                    <CreateButton type="submit" value="c r e a t e ! " />
            </form>
        </FormContainer>
    )
}

export default CreateForm;