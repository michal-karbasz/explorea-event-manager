import React from 'react';

const BlankEvent = (props) => {

    //choose category icon
    let categorySrc = '../icons/moon.png';
    if (props.category === 'education') {
        categorySrc = `../icons/planetary.png`
    } else if (props.category === 'flights') {
        categorySrc = `../icons/nebula.png`
    } else if (props.category === 'meetings') {
        categorySrc = `../icons/alien_sad.png`
    } else if (props.category === 'jobs') {
        categorySrc = `../icons/astronaut.png`
    } else if (props.category === 'translation') {
        categorySrc = `../icons/alien_sleep.png`
    }

    return (

        <div className='event-box'>
            <img src={props.imgUrl}/>
            <div className='event-description'>
                <div className='description-col' id='description-container'>
                    <p>About:</p>
                    <textarea
                        className='description'
                        cols='34'
                        rows='10'
                        disabled="disabled"
                        value={props.description}/>
                </div>
            </div>

            <img src={categorySrc} className='category' id='category-img'/>
            <div className='event-bkg'>
                <input
                    className='title'
                    disabled="disabled"
                    id='eventTitle'
                    value={props.title}/>
                <br/>
                <img src='../icons/time.png'/>
                <input className='date' disabled="disabled" value={props.date}/>
                <span>at</span>
                <input className='hour' disabled="disabled" value={props.hour}/>
                <br/>
                <img src='../icons/here.png'/>
                <input
                    className='location'
                    disabled="disabled"
                    id='eventCity'
                    value={props.location}/>
                <br/>
                <input className='location2' disabled="disabled" value={props.location2}/>
            </div>
            <div className='event-bkg2'>
                <img src='../icons/astronaut2.png'/>
                <input className='organizer' disabled="disabled" value={props.organizer}/>
            </div>
        </div>
    )
}

export default BlankEvent;