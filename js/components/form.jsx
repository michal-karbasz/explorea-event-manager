import React from 'react';



export default class CreateForm extends React.Component {

    state = {
        title: '',
        organizer: '',
        message: '',
        userMessage: `Hi! Fill in the below fields to create a new event:`,
    }

    handleNameChange = (e) => {
        this.setState({title: e.target.value })
    }

    handleEmailChange = (e) => {
        this.setState({organizer: e.target.value })
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.title == '') {
            this.setState({userMessage: "write a title"});
        } else if (this.state.organizer == '') {
            this.setState({userMessage: "tell others who's the organizer"});
        } else if (this.state.message == "") {
            this.setState({userMessage: "Please write something."});
        } else {
            this.setState({userMessage: `Sent!`});
        }
    }

    render() {

        return (
            <div className='form-container'>
                <form className='form-contact' onSubmit={ this.handleSubmit }>
                <h3 style={{whiteSpace: 'pre'}}>{this.state.userMessage}</h3>
                <br/>
                    <label> event title: <br/>
                        <input className="contactInput" onChange={this.handleNameChange} value={this.state.title} placeholder="Write your name"/>
                    </label>
                    <br/>
                    <label> organizer: <br/>
                        <input className="contactInput" onChange={this.handleEmailChange} value={this.state.email} placeholder="Your e-mail goes here" />
                    </label>
                    <br/>
                    <label> where: <br/>
                        <textarea className="contactArea" placeholder="Write your message here" onChange={this.handleMessageChange} value={this.state.message} />
                    </label>
                    <br/>
                    <label> when: <br/>
                        <textarea className="contactArea" placeholder="Write your message here" onChange={this.handleMessageChange} value={this.state.message} />
                    </label>
                    <br/>
                        <input className="contactSubmit" type="submit" value="Create!" />
                </form>
            </div>
        )
    }
}

