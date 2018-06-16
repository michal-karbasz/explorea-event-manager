import React from 'react';



export default class CreateForm extends React.Component {

    state = {
        title: '',
        email: '',
        message: '',
        userMessage: `Hi! Fill in the below fields to create a new event:`,
    }

    handleNameChange = (e) => {
        this.setState({title: e.target.value })
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value })
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.title == '') {
            this.setState({userMessage: "Write your name"});
        } else if (this.state.email.indexOf('@') == -1) {
            this.setState({userMessage: "Your e-mail must include @ sign."});
        } else if (this.state.message == "") {
            this.setState({userMessage: "Please write something."});
        } else {
            this.setState({userMessage: `Sent!`});
        }
    }

    render() {

        return (
            <div className='main-container'>
                <form className='form-contact' onSubmit={ this.handleSubmit }>
                <h3 style={{whiteSpace: 'pre'}}>{this.state.userMessage}</h3>
                <br/>
                    <label> Name: <br/>
                        <input className="contactInput" onChange={this.handleNameChange} value={this.state.title} placeholder="Write your name"/>
                    </label>
                    <br/>
                    <label> Email: <br/>
                        <input className="contactInput" type="email" onChange={this.handleEmailChange} value={this.state.email} placeholder="Your e-mail goes here" />
                    </label>
                    <br/>
                    <label> Message: <br/>
                        <textarea className="contactArea" placeholder="Write your message here" onChange={this.handleMessageChange} value={this.state.message} />
                    </label>
                    <br/>
                        <input className="contactSubmit" type="submit" value="Send!" />
                </form>
            </div>
        )
    }
}

