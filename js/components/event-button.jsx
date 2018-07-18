import React from 'react';

export default class EventButton extends React.Component {

    render() {

        let imageSrc = ''
        if (this.props.isClicked) {
            imageSrc = '../icons/confirm.png';
        } else {
            imageSrc = `../icons/${this.props.buttonType}.png`;
        }


        return (

            <button className='event-btn' id={`${this.props.buttonType}-btn`} onClick={this.props.onClick}>
                <img src={imageSrc}/>
                <span>{this.props.isClicked ? 'confirm' : this.props.buttonType}</span>
            </button>
        )
    }
}