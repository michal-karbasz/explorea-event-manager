import React from 'react';

// import components

import Event from './event.jsx';

// import styled components

import {EventSection} from './styled-components/event-style.jsx';

const Events = props => {

    // create a variable to hold all user-created events passed from App's State

    let UserEvents = props.eventList.map ((item) => <Event
            key={item.title} //will never use index anymore :(
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
            deleteEvent={props.deleteEvent}
            />
        )

    return (

        <EventSection>
         {/* <section className='event-flex-container' id='event-section'> */}

            {/* render 3 example events + user-created ones */} 
            {UserEvents}

        </EventSection>
    )
}

export default Events;