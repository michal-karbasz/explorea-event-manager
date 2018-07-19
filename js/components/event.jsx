import React from 'react';

//import components
import EventButton from './event-button.jsx';

export default class Event extends React.Component {
    
    state = {
        editClicked: false,
        deleteClicked: false,
        title: this.props.title,
        description: this.props.description,
        hour: this.props.hour,
        location: this.props.location,
        location2: this.props.location2,
        organizer: this.props.organizer,
    }

    handleEdit = (e) => {
        this.setState({ editClicked: !this.state.editClicked })
    }

    handleDelete = () => {
        this.setState({ deleteClicked: !this.state.deleteClicked })
        console.log('delete');
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState ({ [name]: value})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value !== this.props.value){
            this.setState({title:nextProps.value});
        }
    }

    render() {

        //choose category icon

        let categorySrc = '../icons/moon.png';
        if (this.props.category === 'education') {
            categorySrc = `../icons/planetary.png`
        } else if (this.props.category === 'flight') {
            categorySrc = `../icons/nebula.png`
        } else if (this.props.category === 'meetings') {
            categorySrc = `../icons/alien_sad.png`
        } else if (this.props.category === 'job') {
            categorySrc = `../icons/astronaut.png`
        } else if (this.props.category === 'translator') {
            categorySrc = `../icons/alien_sleep.png`
        }
        //check if the event is an example, if no, render edit/delete buttons

        let buttons = {}

        if  (this.props.isExample !== 'example') {
            buttons = {
                button1: <EventButton buttonType='edit' onClick={this.handleEdit} isClicked={this.state.editClicked}/>,
                button2:  <EventButton buttonType='delete' onClick={this.handleDelete} />
            }
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
                            disabled={!this.state.editClicked}
                            value={this.state.description} 
                            name='description'
                            onChange={this.handleInputChange} />
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
                    <input
                        className='title'
                        disabled={!this.state.editClicked}
                        id='eventTitle'
                        minLength='3'
                        maxLength='32'
                        value={this.state.title}
                        name='title'
                        onChange={this.handleInputChange}/>
                    <br/>
                    <img src='../icons/time.png'/>
                    <input 
                        className='date'
                        disabled={!this.state.editClicked}
                        value={this.props.date}/>
                    <span><i>at</i></span>
                    <input
                        className='hour'
                        disabled={!this.state.editClicked}
                        maxLength='5'
                        value={this.state.hour}
                        name='hour'
                        onChange={this.handleInputChange} />
                    <br/>
                    <img src='../icons/here.png'/>
                    <input
                        className='location'
                        disabled={!this.state.editClicked}
                        id='eventCity'
                        minLength='1'
                        maxLength='32'
                        value={this.state.location}
                        name='location'
                        onChange={this.handleInputChange} />
                    <br/>
                    <input
                        className='location2'
                        disabled={!this.state.editClicked}
                        maxLength='32'
                        value={this.state.location2}
                        name='location2'
                        onChange={this.handleInputChange} />
                </div>
                <div className='event-bkg2'>
                    <img src='../icons/astronaut2.png'/>
                    <input
                        className='organizer'
                        disabled={!this.state.editClicked}
                        minLength='3'
                        maxLength='32'
                        value={this.state.organizer}
                        name='organizer'
                        onChange={this.handleInputChange} />
                </div>
            </div>

        )
    }

}