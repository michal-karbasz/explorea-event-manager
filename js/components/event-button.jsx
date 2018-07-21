import React from 'react';

const EventButton = props => {

    let imageSrc = ''
    if (props.isClicked) {
        imageSrc = '../icons/confirm.png';
    } else {
        imageSrc = `../icons/${props.buttonType}.png`;
    }

    return (

        <button
            className='event-btn'
            id={`${props.buttonType}-btn`}
            onClick={props.onClick}>
            <img src={imageSrc}/>
            <span>{props.isClicked ? 'confirm' : props.buttonType}</span>
        </button>
    )
}

export default EventButton;