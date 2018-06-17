import React from 'react';
import DayPicker from './datepicker.jsx';

export default class CreateForm extends React.Component {


    handleTitleChange = (e) => {
        if(typeof this.props.titleChange === 'function') {
            this.props.titleChange(e.target.value);
        }
    }

    handleDescriptionChange = (e) => {
        if(typeof this.props.descriptionChange === 'function') {
            this.props.descriptionChange(e.target.value);
        }
    }


    render() {

        return (
            <div className='form-container'>
                <form className='form-contact' onSubmit={ this.handleSubmit }>
                <h3 style={{whiteSpace: 'pre'}}>{this.props.userMessage}</h3>
                <br/>
                    <label> event title: <br/>
                        <input className="eventTitle" onChange={this.handleTitleChange} value={this.props.title} placeholder="event title goes here"/>
                    </label>
                    <br/>
                    <label> description: <br/>
                        <textarea className="eventDescription" placeholder="describe the event in at least 60 characters" onChange={this.handleDescriptionChange} value={this.props.description} />
                    </label>
                    <br/>
                    {/*
                    <label> organizer: <br/>
                        <input className="contactInput" onChange={this.handleEmailChange} value={this.state.email} placeholder="tell others who's the organizer" />
                    </label>
                    <br/>
                    <label> where: <br/>
                        <textarea className="contactArea" placeholder="Write your message here" onChange={this.handleMessageChange} value={this.state.message} />
                    </label>
                    <br/>
                    <label>
                    <DayPicker /> 
                    at: <br/>
                    <input className="contactInput" onChange={this.handleEmailChange} value={this.state.email} placeholder="tell others who's the organizer" />
                    </label>
                    <br/>
                    <label> image url: <br/>
                        <input className="contactInput" onChange={this.handleNameChange} value={this.state.title} placeholder="paste image url here"/>
                    </label>
                    <br/>
                    <label> Category:
                        <select onClick={this.handleCategoryChange}>
                            <option disabled selected value> -- select category -- </option>
                            <option>alien education events</option>
                            <option>flight volounteers</option>
                            <option>alien meetings</option>
                            <option>NASA job interviews</option>
                            <option>alien translator workshops</option>
                        </select>
                    </label>
                    <br/>
                        <input className="contactSubmit" type="submit" value="Create!" /> */}
                </form>
            </div>
        )
    }
}

