import React from 'react';

export default class Event extends React.Component {

    state = {
        visible: 'hidden',
    }


    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }

    render() {
        return (

            <div>
                <img src='' />
                <div className='event-bkg'>
                    <span>gravitation excercises</span>
                </div>
                <div className='event-bkg'>
                    <span>Fri, Jun 28 8:00AM </span>
                    <span>Katowice, Spodek</span>
                </div>
                
            </div>

        )
    }

}