import React from 'react';

export default class BlankEvent extends React.Component {

    render() {

        //choose category icon

        let categorySrc = '../icons/moon.png';
        if (this.props.category === 'education') {
            categorySrc = `../icons/planetary.png`
        } else if (this.props.category === 'flights') {
            categorySrc = `../icons/nebula.png`
        } else if (this.props.category === 'meetings') {
            categorySrc = `../icons/alien_sad.png`
        } else if (this.props.category === 'jobs') {
            categorySrc = `../icons/astronaut.png`
        } else if (this.props.category === 'translation') {
            categorySrc = `../icons/alien_sleep.png`
        }

        return (

            <div className='event-box'>
                <img src={this.props.imgUrl}/>
                <div className='event-description'>
                    <div className='description-col' id='description-container'>
                        <p>About:</p>
                        <textarea
                            className='description'
                            cols='34'
                            rows='10'
                            disabled
                            value={this.props.description}/>
                    </div>
                </div>

                <img src={categorySrc} className='category' id='category-img'/>
                <div className='event-bkg'>
                    <input
                        className='title'
                        disabled
                        id='eventTitle'
                        value={this.props.title}/>
                    <br/>
                    <img src='../icons/time.png'/>
                    <input className='date' disabled value={this.props.date}/>
                    <span>at</span>
                    <input className='hour' disabled value={this.props.hour}/>
                    <br/>
                    <img src='../icons/here.png'/>
                    <input
                        className='location'
                        disabled
                        id='eventCity'
                        value={this.props.location}/>
                    <br/>
                    <input className='location2' disabled value={this.props.location2}/>
                </div>
                <div className='event-bkg2'>
                    <img src='../icons/astronaut2.png'/>
                    <input className='organizer' disabled value={this.props.organizer}/>
                </div>
            </div>
        )
    }

}