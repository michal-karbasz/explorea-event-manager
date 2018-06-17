import React from 'react';
import Form from './form.jsx';
import BlankEvent from './blank-event.jsx';


export default class NewEvent extends React.Component {

    state = {
        title: '',
        organizer: '',
        description: '',
        location: '',
        date: '',
        imgUrl: '',
        category: '',
        userMessage: `Hi! Please use the below form
to contact me on any subject:`,
    }

    handleNameChange = (e) => {
        this.setState({nameVal: e.target.value })
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
                    <Form/>
                </div>
                <div className="col">
                    <BlankEvent/>
                </div>
            </section>
        )
}
}

