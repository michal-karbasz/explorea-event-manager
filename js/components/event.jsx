import React from 'react';

//import components

import EventButton from './event-button.jsx';
import Category from './category-button.jsx';

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
        image: this.props.imgUrl,
        category: this.props.category,
        categoryClicked: false,
    }

    // signal if the event is/is not during edit phase; secure that the category button disappears if user clicked, didn't change it but ended editing 

    handleEditClicked = () => {
        this.setState({ 
            editClicked: !this.state.editClicked,
            categoryClicked: false,
        })
    }

    //signal that the event is about to be delete -> trigger are-you-sure buttons

    handleDeleteClicked = () => {
        this.setState({ deleteClicked: !this.state.deleteClicked })
    }



    handleDeleteEvent = (currentEvent) => () => {
        if (typeof this.props.deleteEvent === 'function') {
            this.props.deleteEvent(currentEvent);
        }
    }

    //function takes care of multiple state changes during edit mode

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState ({ [name]: value})
    }

    handleCategoryClicked = () => {
        this.setState({ categoryClicked: !this.state.categoryClicked})
    }

    handleCategoryChange = (category) => {
        this.setState({ category: category})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value !== this.props.value){
            this.setState({title:nextProps.value});
        }
    }

    render() {

        //choose category icon

        let categorySrc = '../icons/moon.png';
        if (this.state.category === 'education') {
            categorySrc = `../icons/planetary.png`
        } else if (this.state.category === 'flights') {
            categorySrc = `../icons/nebula.png`
        } else if (this.state.category === 'meetings') {
            categorySrc = `../icons/alien_sad.png`
        } else if (this.state.category === 'jobs') {
            categorySrc = `../icons/astronaut.png`
        } else if (this.state.category === 'translation') {
            categorySrc = `../icons/alien_sleep.png`
        }
        //check if the event is an example, if no, render edit/delete buttons

        let buttons = {}

        if  (this.props.isExample !== 'example') {
            buttons = {
                button1: <EventButton buttonType='edit' onClick={this.handleEditClicked} isClicked={this.state.editClicked}/>,
                button2:  <EventButton buttonType='delete' onClick={this.handleDeleteClicked} />
            }
        }

        const urlStyle = {
            display: this.state.editClicked ? 'block' : 'none',
        }

        const confirmStyle = {
            display: this.state.deleteClicked ? 'block' : 'none',
        }
        
        return (

            <div className='event-box'>

                {/* render event background image */}

                <img src={this.state.image} alt='event main image'/>

                {/* render event description section */}

                <div className={`event-description ${this.state.editClicked ? 'slide-up': null}`}>
                    <div className='description-col' id='description-container'>
                        <p>About:</p>
                        <textarea
                            className={`description ${this.state.editClicked ? 'textarea-short': null}`}
                            cols='34'
                            rows='9'
                            disabled={!this.state.editClicked}
                            value={this.state.description} 
                            name='description'
                            onChange={this.handleInputChange} />

                {/* render edit/delete buttons if necessary */}

                        {buttons.button1} 
                        {buttons.button2}
                    </div>

                {/* render category buttons to change category during edit */}

                    <div className='categories'>
                        <Category visible={this.state.categoryClicked ? 'block' : 'none'} img='planetary' span='education' handleCategoryChange={this.handleCategoryChange}/>
                        <Category visible={this.state.categoryClicked ? 'block' : 'none'} img='nebula' span='flights' handleCategoryChange={this.handleCategoryChange} />
                        <Category visible={this.state.categoryClicked ? 'block' : 'none'} img='alien_sad' span='meetings' handleCategoryChange={this.handleCategoryChange} />
                        <Category visible={this.state.categoryClicked ? 'block' : 'none'} img='astronaut' span='jobs' handleCategoryChange={this.handleCategoryChange} />
                        <Category visible={this.state.categoryClicked ? 'block' : 'none'} img='alien_sleep' span='translation' handleCategoryChange={this.handleCategoryChange} />
                    </div>
                </div>

                {/* render delete are-you-sure? buttons */}

                <div className='delete-confirm' style={confirmStyle}>
                    <div className='description-col'>
                        <p>Do you really want to delete your event?</p>
                        <button className='event-btn' onClick={this.handleDeleteEvent (this.props.title)}>YES</button>
                        <button className='event-btn' onClick={this.handleDeleteClicked}>NO</button>
                    </div>
                </div>

                {/* render category img */}

                <img
                    src={categorySrc}
                    id='category-img'
                    className={`category ${this.state.categoryClicked && this.state.editClicked ? 'category-moved': null}`}
                    onClick={this.state.editClicked ? this.handleCategoryClicked : null}
                    alt='category icon'/>

                <div className='category-container'>

                </div>

                {/* render main event data */}

                <div className='event-bkg'>
                    <input
                        className='title'
                        disabled={!this.state.editClicked}
                        id='eventTitle'
                        minLength='3'
                        maxLength='30'
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
                        maxLength='30'
                        value={this.state.location}
                        name='location'
                        onChange={this.handleInputChange} />
                    <br/>
                    <input
                        className='location2'
                        disabled={!this.state.editClicked}
                        maxLength='30'
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
                        maxLength='30'
                        value={this.state.organizer}
                        name='organizer'
                        onChange={this.handleInputChange} />
                </div>
                
                {/* on edit click display url input field to replace background image */}

                <div style={urlStyle} className='url-field'>
                    <span>Paste new image url here: </span>
                    <input 
                        disabled={!this.state.editClicked}
                        name='image'
                        onChange={this.handleInputChange} />
                </div>
            </div>

        )
    }

}