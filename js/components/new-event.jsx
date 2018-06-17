import React from 'react';
import Form from './form.jsx';
import BlankEvent from './blank-event.jsx';


export default class NewEvent extends React.Component {

    state = {
        title: 'Your title goes here',
        description: '',
        organizer: '',
        location: '',
        date: '',
        imgUrl: '',
        category: '',
        userMessage: `Hi! Fill in the below fields to create a new event:`,
    }

    handleTitleChange = (title) => {
        this.setState({title: title})
    }

    handleDescriptionChange = (description) => {
        this.setState({description: description})
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value })
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <section className='new-flex-container'>
                <div className="col">
                    <Form title={this.state.title} description={this.state.description} organizer={this.state.organizer} location={this.state.location} date={this.state.date} imgUrl={this.state.imgUrl} category={this.state.category} userMessage={this.state.userMessage}
                    titleChange={this.handleTitleChange} descriptionChange={this.handleDescriptionChange}/>
                </div>
                <div className="col">
                    <BlankEvent title={this.state.title} description={this.state.description} organizer={this.state.organizer} location={this.state.location} date={this.state.date} imgUrl={this.state.imgUrl} category={this.state.category}/>
                </div>
            </section>
        )
}
}

