import React from 'react';

//import components
import EventButton from './event-button.jsx';

export default class Event extends React.Component {
    
    handleEdit = () => {
        console.log('edit');
    }

    handleDelete = () =>{
        console.log('delete');
    }


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

        
            let buttons = {}
            if  (this.props.isExample !== 'example') {
                buttons = {
                button1: <EventButton buttonType='edit' onClick={this.handleEdit} />,
                button2:  <EventButton buttonType='delete' onClick={this.handleDelete} />
            }
        }

        return (

            <div className='event-box'>
            <img src={this.props.imgUrl} />
            <div className='event-description'>
                <div className='description-col' id='description-container'>
                    <p>About:</p>
                    <textarea className='description' cols='34' rows='10' disabled value={this.props.description}/>
                    {buttons.button1}
                    {buttons.button2}
                </div>
            </div>

            <div className='delete-confirm'>
                <div className='description-col'>
                    <p>Do you really want to delete your event?</p>
                    <button className='event-btn' id='delete-btn-positive'>YES</button>
                    <button className='event-btn' id='delete-btn-negative'>NO</button>
                </div>
            </div>

            <img src={categorySrc} className='category' id='category-img'/>
            <div className='event-bkg'>
                <input className='title' disabled id='eventTitle' value={this.props.title}/>
                <br/>
                <img src='../icons/time.png'/>
                <input className='date' disabled value={this.props.date} /> 
                <span>at</span> 
                <input className='hour' disabled value={this.props.hour} />
                <br/>
                <img src='../icons/here.png'/>
                <input className='location' disabled id='eventCity' value={this.props.location} />
                <br/>
                <input className='location2' disabled value={this.props.location2} />
            </div>
            <div className='event-bkg2'>
            <img src='../icons/astronaut2.png'/>
            <input className='organizer' disabled value={this.props.organizer} />
            </div>
        </div>


        )
    }

}