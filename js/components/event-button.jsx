import React from 'react';

// import styled components

import { EventButtons, EventButtonIcon, EventButtonSpan } from './styled-components/event-style.jsx';

const EventButton = props => {

    let imageSrc = ''
    if (props.isClicked) {
        imageSrc = '../icons/confirm.png';
    } else {
        imageSrc = `../icons/${props.buttonType}.png`;
    }

    return (

        <EventButtons
            id={`${props.buttonType}-btn`}
            onClick={props.onClick}>
            <EventButtonIcon src={imageSrc}/>
            <EventButtonSpan>{props.isClicked ? 'confirm' : props.buttonType}</EventButtonSpan>
        </EventButtons>
    )
}

export default EventButton;