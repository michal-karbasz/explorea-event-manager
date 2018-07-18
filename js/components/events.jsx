import React from 'react';

// import components

import Event from './event.jsx';

export default class Events extends React.Component {

    // state = {
    //     visible: 'hidden'
    // }

    // revealPlanets = () => {
    //     this.setState({
    //         visible: this.state.visible === 'hidden' ? 'visible' : 'hidden',
    //     })
    // }

    addEvent = (newEvent) => {
        if(typeof this.props.addNewEvent === 'function') {
            this.props.addNewEvent(newEvent);
        }
    }

    render() {

        // create a variable to hold all user-created events passed from App's State

        const UserEvents = this.props.eventList.map ((item, index) => <Event
                key={index}
                title={item.title}
                organizer={item.organizer}
                location={item.location}
                location2={item.location2}
                date={item.date}
                hour={item.hour}
                imgUrl={item.image}
                category={item.category}
                description={item.description}
                isExample={item.type}
                />
            )

        return (

            <section className='event-flex-container' id='event-section'>

                {/* render 3 example events + user-created ones */} 
                {UserEvents}

            </section>
        )
    }
}