import React from 'react';
import Event from './event.jsx';

export default class Events extends React.Component {

    state = {
        visible: 'hidden',
    }


    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }


    render() {
        console.log(this.props.eventList)
        const newLi = this.props.eventList.map ((item,index) => {item});
        
        return (

            <section className='event-flex-container' id='event-section'>
                <Event/>
                <Event/>
                <Event/>
                {newLi}
            </section>
        )
    }


}