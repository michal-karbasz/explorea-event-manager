import React from 'react';

// import components

import Event from './event.jsx';

export default class Events extends React.Component {

    state = {
        visible: 'hidden'
    }

    revealPlanets = () => {
        this.setState({
            visible: this.state.visible === 'hidden' ? 'visible' : 'hidden',
        })
    }

    render() {
        console.log(this.props.eventList)
        const UserEvents = this.props.eventList.map ((item, index) => <Event title={item.title} /> )
        // const UserEvents = userEventsToArray.map ((item, index) => <div className='event-box' key={index}>{Array.from(item)} </div>  );

        // let exampleEvents = this.props.event.map((item)) => {
        //     return ( <Event/>)
        // }

        return (

            <section className='event-flex-container' id='event-section'>
                <Event
                    title='Martian language classes'
                    description='Take part in martian language course. Martian teachers speak southern dialect (the easiest one as they claim) and are currently learing our Common Tongue so don`t worry about communication gap'
                    date='24.08.2034'
                    hour='15:15'
                    location='Węgorzewo'
                    location2='Wiejska 15'
                    organizer='Martian Language School'
                    imgUrl='http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0223c84ee54d200c-800wi'
                    category='../icons/alien_sleep.png'/>
                <Event
                    title='Martian cousine'
                    description='Learn cooking from martian best chefs. In return, you can teach them i.e. how to grow potatoes on Mars. It is said that they absolutelty love them! '
                    date='29.04.2034'
                    hour='18:55'
                    location='New York City'
                    location2='754 9th Ave, At 51st Street'
                    organizer='Mars` Kitchen'
                    imgUrl='https://nerdist.com/wp-content/uploads/2016/01/MartianSpaceFood_FEATT.jpg'
                    category='../icons/planetary.png'/>
                <Event
                    title='Astronauts Needed'
                    description='NASA is hiring in Poland! Spodek (The Saucer) in Katowice has currently been revealed as former soviet space agency HQ and has been restored for further use.
                        The interview will check your martian languauge skills, endurance and overall health. '
                    date='04.07.2033'
                    hour='10:00'
                    location='Katowice'
                    location2='Spodek'
                    organizer='NASA'
                    imgUrl='https://www.rd.com/wp-content/uploads/2017/10/00_Space_The-Surprising-Way-Your-Genes-Can-Change-in-Space-According-to-NASA_562691425-Vadim-Sadovski-760x506.jpg'
                    category='../icons/astronaut.png'/> 
                    {UserEvents}
            </section>
        )
    }
    componentDidMount() {}

}