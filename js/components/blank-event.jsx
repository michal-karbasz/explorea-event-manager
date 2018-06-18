import React from 'react';

export default class BlankEvent extends React.Component {

    
    render() {


    //choose category icon       

        let categorySrc = '../icons/moon.png';
        if (this.props.category === 'alien education events') {
            categorySrc = `../icons/planetary.png`
        } else if (this.props.category === 'flight volounteers') {
            categorySrc = `../icons/nebula.png`
        } else if (this.props.category === 'alien meetings') {
            categorySrc = `../icons/alien_sad.png`
        } else if (this.props.category === 'NASA job interviews') {
            categorySrc = `../icons/astronaut.png`
        } else if (this.props.category === 'alien translator workshops') {
            categorySrc = `../icons/alien_sleep.png`
        }

        return (

            <div className='event-box'>
                <img src={this.props.imgUrl} />
                <div className='event-description'>
                    <div className='description-col' id='description-container'>
                        <p>About:</p>
                        <p>{this.props.description}</p>
                    </div>
                </div>


                <img src={categorySrc} className='category'/>
                <div className='event-bkg'>
                    <span id='eventTitle'>{this.props.title}</span>
                    <br/>
                    <img src='../icons/time.png'/>
                    <span>{this.props.date}  at  {this.props.hour}</span>
                    <br/>
                    <img src='../icons/here.png'/>
                    <span id='eventCity'>{this.props.location} </span> <br/>
                    <span className='location2'>{this.props.location2}</span>
                </div>
                <div className='event-bkg2'>
                <img src='../icons/astronaut2.png'/>
                    <span>{this.props.organizer}</span>
                </div>
            </div>

        )
    }

}