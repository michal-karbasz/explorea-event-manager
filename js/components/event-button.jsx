import React from 'react';

export default class EventButton extends React.Component {

    render() {
        return (

            <button className='event-btn' id={`${this.props.buttonType}-btn`} onClick={this.props.onClick}>
                <img src={`../icons/${this.props.buttonType}.png`}/>
                <span>{this.props.buttonType}</span>
            </button>
        )
    }
}