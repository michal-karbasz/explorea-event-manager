import React from 'react';

// import components

import EventButton from './event-button.jsx';
import Category from './category-button.jsx';

// import styled components

import { EventContainer, EventImage, EventDescriptionContainer, DescriptionHeader, DescriptionTextarea, EventInnerContainer1, EventInnerContainer2, EventIcon, EventSpan, EventInput, EventOrganizerIcon, EventInput2, CategoryImg, EventDate, EventHour, EventLocation2} from './styled-components/event-style.jsx';

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

    // signal that the event is about to be delete -> trigger are-you-sure buttons

    handleDeleteClicked = () => {
        this.setState({ deleteClicked: !this.state.deleteClicked })
    }

    handleDeleteEvent = (currentEvent) => () => {
        if (typeof this.props.deleteEvent === 'function') {
            this.props.deleteEvent(currentEvent);
        }
    }

    // function takes care of multiple state changes during edit mode

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
    
    render() {

        // choose category icon

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

        // check if the event is an example, if no, render edit/delete buttons

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

            <EventContainer>

                {/* render event background image */}

                <EventImage src={this.state.image} alt='event main image' />

                {/* render event description section */}

                <EventDescriptionContainer editClicked={this.state.editClicked} >
                    <div className='description-col' id='description-container'>
                        <DescriptionHeader>About:</DescriptionHeader>
                        <DescriptionTextarea
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
                        <Category categoryClicked={this.state.categoryClicked} img='planetary' span='education' handleCategoryChange={this.handleCategoryChange}/>
                        <Category categoryClicked={this.state.categoryClicked} img='nebula' span='flights' handleCategoryChange={this.handleCategoryChange} />
                        <Category categoryClicked={this.state.categoryClicked} img='alien_sad' span='meetings' handleCategoryChange={this.handleCategoryChange} />
                        <Category categoryClicked={this.state.categoryClicked} img='astronaut' span='jobs' handleCategoryChange={this.handleCategoryChange} />
                        <Category categoryClicked={this.state.categoryClicked} img='alien_sleep' span='translation' handleCategoryChange={this.handleCategoryChange} />
                    </div>
                </EventDescriptionContainer>

                {/* render delete are-you-sure? buttons */}

                <div className='delete-confirm' style={confirmStyle}>
                    <div className='description-col'>
                        <p>Do you really want to delete your event?</p>
                        <button className='event-btn' onClick={this.handleDeleteEvent (this.props.title)}>YES</button>
                        <button className='event-btn' onClick={this.handleDeleteClicked}>NO</button>
                    </div>
                </div>

                {/* render category img */}

                <CategoryImg
                    src={categorySrc}
                    id='category-img'
                    className={`category ${this.state.categoryClicked && this.state.editClicked ? 'category-moved': null}`}
                    onClick={this.state.editClicked ? this.handleCategoryClicked : null}
                    alt='category icon'/>

                {/* <div className='category-container'>

                </div> */}

                {/* render main event data */}

                <EventInnerContainer1>
                    <EventInput
                        className='title'
                        disabled={!this.state.editClicked}
                        id='eventTitle'
                        minLength='3'
                        maxLength='30'
                        value={this.state.title}
                        name='title'
                        onChange={this.handleInputChange}/>
                    <br/>
                    <EventIcon src='../icons/time.png'/>
                    <EventDate 
                        className='date'
                        disabled={!this.state.editClicked}
                        value={this.props.date}/>
                    <EventSpan><i>at</i></EventSpan>
                    <EventHour
                        className='hour'
                        disabled={!this.state.editClicked}
                        maxLength='5'
                        value={this.state.hour}
                        name='hour'
                        onChange={this.handleInputChange} />
                    <br/>
                    <EventIcon src='../icons/here.png'/>
                    <EventInput
                        className='location'
                        disabled={!this.state.editClicked}
                        id='eventCity'
                        minLength='1'
                        maxLength='30'
                        value={this.state.location}
                        name='location'
                        onChange={this.handleInputChange} />
                    <br/>
                    <EventLocation2
                        className='location2'
                        disabled={!this.state.editClicked}
                        maxLength='30'
                        value={this.state.location2}
                        name='location2'
                        onChange={this.handleInputChange} />
                </EventInnerContainer1>
                <EventInnerContainer2>
                    <EventOrganizerIcon src='../icons/astronaut2.png'/>
                    <EventInput2
                        className='organizer'
                        disabled={!this.state.editClicked}
                        minLength='3'
                        maxLength='30'
                        value={this.state.organizer}
                        name='organizer'
                        onChange={this.handleInputChange} />
                </EventInnerContainer2>
                
                {/* on edit click display url input field to replace background image */}

                <div style={urlStyle} className='url-field'>
                    <span>Paste new image url here: </span>
                    <input 
                        disabled={!this.state.editClicked}
                        name='image'
                        onChange={this.handleInputChange} />
                </div>
            </EventContainer>

        )
    }

}