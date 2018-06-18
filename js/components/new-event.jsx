import React from 'react';
import Form from './form.jsx';
import BlankEvent from './blank-event.jsx';


export default class NewEvent extends React.Component {

    state = {
        title: '',
        description: '',
        organizer: '',
        location: '',
        location2: '',
        selectedDay: '',
        hour: '',
        imgUrl: '../images/background1.jpg',
        category: '-- select category --',
        userMessage: `Hi! Fill in the below fields to create a new event:`,
        currentEvents: [],
    }

    handleTitleChange = (title) => {
        this.setState({title: title})
    }

    handleDescriptionChange = (description) => {
        this.setState({description: description})
    }

    handleOrganizerChange = (organizer) => {
        this.setState({organizer: organizer})
    }

    handleLocationChange = (location) => {
        this.setState({location: location})
        // fetch(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyANDkkP1jJA17HPe5I379Ov3Lu2Qr4PUwU&input=${this.state.location}
        // `)
        //     .then(resp => {
        //         if(resp.ok) {
        //             return resp.json();
        //         } else {
        //             throw new Error('Blad sieci!');
        //         }
        //     })
        //     .then(data => {
        //         this.setState({
        //             location: data,
        //         })
        //     })
        //     .catch(err => console.log(err));
    }

    
    handleLocation2Change = (location2) => {
        this.setState({location2: location2})
    }

    handleDayChange = (date) => {
        this.setState({selectedDay: date })
      }

    handleHourChange = (hour) => {
        this.setState({hour: hour})
    }

    handleUrlChange = (url) => {
        this.setState({imgUrl: url })
    }

    handleCategoryChange = (category) => {
        this.setState({category: category })
    }
    
    handleCreateEvent = (event) => {
        event.preventDefault();
        if(this.state.title.length < 3 || this.state.title.length > 32 ) {
            this.setState({userMessage: "Provide event title (3-32 chars) !"});
        } else if (this.state.description.length < 60 ) {
            this.setState({userMessage: "Write some additional description (min 60 chars)."});
        } else if (this.state.organizer.length < 3 || this.state.organizer.length > 32) {
            this.setState({userMessage: "Who's the organizer (3-32 chars)?"});
        } else if (this.state.location.length < 1 || this.state.location.length > 32) {
            this.setState({userMessage: "Provide location (1-32 chars)"});
        } else if (this.state.location2.length < 3 || this.state.location2.length > 32) {
            this.setState({userMessage: "Provide location details (3-32 chars)"});
        } else if (this.state.selectedDay === '' ) {
            this.setState({userMessage: "Pick the event date"});
        } else if (this.state.hour.length < 5 ) {
            this.setState({userMessage: "Provide valid time"});
        } else if (this.state.category === '-- select category --' ) {
            this.setState({userMessage: "Select event's category"});
        } else {
            this.setState({userMessage: `Added a new event !`});
            this.addButtons();
            this.cloneEvent();
        }       
    }

    addButtons = () => {
        const eventBox = document.getElementById('description-container')
        let editbtn = document.createElement('button');
        let editimg = document.createElement('img');
        let editspan = document.createElement('span');
        editbtn.classList.add('event-btn');
        editbtn.setAttribute('id','edit-btn');
        editimg.setAttribute('src','../icons/edit.png');
        editspan.innerText = 'edit';
        editbtn.appendChild(editimg);
        editbtn.appendChild(editspan);
        eventBox.appendChild(editbtn);

        let deletebtn = document.createElement('button');
        let deleteimg = document.createElement('img');
        let deletespan = document.createElement('span');
        deletebtn.classList.add('event-btn');
        deletebtn.setAttribute('id','delete-btn');
        deletebtn.addEventListener('click', this.handleDelete);
        deleteimg.setAttribute('src','../icons/delete.png');
        deletespan.innerText = 'delete';
        deletebtn.appendChild(deleteimg);
        deletebtn.appendChild(deletespan);
        eventBox.appendChild(deletebtn);
    }


    cloneEvent = () => {
            let newEvent = document.querySelector('.event-box');
            // const temporaryList = this.state.currentEvents.slice();
            // temporaryList.push(newEvent);
            // this.setState({currentEvents: temporaryList});
            // this.sendEventsArr(this.state.currentEvents);
            let clone = newEvent.cloneNode(true);
            document.getElementById('event-section').appendChild(clone);
            // this.clearState()
    }

    clearState = () => {
        this.setState({title: '',
        description: '',
        organizer: '',
        location: '',
        location2: '',
        selectedDay: '',
        hour: '',
        imgUrl: '../images/background1.jpg',
        category: '-- select category --',
        userMessage: `Your event has just been added.
Feel free to create another one:`, })
}

sendEventsArr = (eventArr) => {
    if(typeof this.props.getEventsArray === 'function') {
        this.props.getEventsArray(eventArr);
    }
}
    

    render() {

        // if (this.state.description.length > 200 ) {
        //     document.querySelector('.eventDescription').setAttribute('readonly', 'readonly');
        // }
        
        return (
            <section className='new-flex-container'>
                <div className="col">
                    <Form title={this.state.title} description={this.state.description} organizer={this.state.organizer} location={this.state.location} location2={this.state.location2} date={this.state.selectedDay} hour={this.state.hour} imgUrl={this.state.imgUrl} category={this.state.category} userMessage={this.state.userMessage}
                    titleChange={this.handleTitleChange} descriptionChange={this.handleDescriptionChange} organizerChange={this.handleOrganizerChange} locationChange={this.handleLocationChange} location2Change={this.handleLocation2Change} handleDayChange={this.handleDayChange} hourChange={this.handleHourChange} urlChange={this.handleUrlChange} categoryChange={this.handleCategoryChange} createEvent={this.handleCreateEvent}/>
                </div>
                <div className="col">
                    {/* <h1> live preview 
                    <img src="./icons/telescope.png" className='scope-icon'/>
                    </h1> */}
                    <BlankEvent title={this.state.title} description={this.state.description} organizer={this.state.organizer} location={this.state.location} location2={this.state.location2} date={this.state.selectedDay} hour={this.state.hour} imgUrl={this.state.imgUrl} category={this.state.category} add={this.state.add}/>
                </div>
            </section>
        )
}


}

