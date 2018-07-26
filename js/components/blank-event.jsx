import React from 'react';

// import styled components

import {EventContainer, EventImage, DescriptionHeader, DescriptionTextarea, EventDescriptionContainer, EventInnerContainer1, EventTitle, EventIcon, EventDate, EventSpan, EventHour, EventInput, EventLocation2, EventInnerContainer2, EventOrganizerIcon, EventInput2, CategoryImg} from './styled-components/event-style.jsx';
import { Description, DescriptionSpan} from './styled-components/new-event-style.jsx';


const BlankEvent = (props) => {

    // choose category icon depending on passed props
    let categorySrc = '../icons/moon.png';
    if (props.category === 'education') {
        categorySrc = `../icons/planetary.png`;
    } else if (props.category === 'flights') {
        categorySrc = `../icons/nebula.png`;
    } else if (props.category === 'meetings') {
        categorySrc = `../icons/alien_sad.png`;
    } else if (props.category === 'jobs') {
        categorySrc = `../icons/astronaut.png`;
    } else if (props.category === 'translation') {
        categorySrc = `../icons/alien_sleep.png`;
    }

    return (
        <Description>
            <DescriptionSpan>event preview</DescriptionSpan>
            <EventContainer>
                <EventImage src={props.imgUrl}/>
                <EventDescriptionContainer>
                    <div>
                        <DescriptionHeader>About:</DescriptionHeader>
                        <DescriptionTextarea
                            cols='34'
                            rows='10'
                            disabled="disabled"
                            value={props.description}/>
                    </div>
                </EventDescriptionContainer>

                <CategoryImg src={categorySrc}/>
                <EventInnerContainer1>
                    <EventTitle
                        disabled="disabled"
                        value={props.title}
                        placeholder='your title will appear here'/>
                    <br/>
                    <EventIcon src='../icons/time.png'/>
                    <EventDate placeholder='date' disabled="disabled" value={props.date}/>
                    <EventSpan>at</EventSpan>
                    <EventHour disabled="disabled" value={props.hour} placeholder='hour'/>
                    <br/>
                    <EventIcon src='../icons/here.png'/>
                    <EventInput
                        disabled="disabled"
                        value={props.location}
                        placeholder='event location'/>
                    <br/>
                    <EventLocation2 disabled="disabled" value={props.location2} placeholder='location details'/>
                </EventInnerContainer1>
                <EventInnerContainer2>
                    <EventOrganizerIcon src='../icons/astronaut2.png'/>
                    <EventInput2 disabled="disabled" value={props.organizer} placeholder='event organizer'/>
                </EventInnerContainer2>
            </EventContainer>
        </Description>
    )
}

export default BlankEvent;