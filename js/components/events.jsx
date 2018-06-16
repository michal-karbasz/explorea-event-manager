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
        return (

            <section className='event-flex-container'>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </section>
        )
    }


}