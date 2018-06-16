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

            <div className='event-box'>
                <img src='../images/background1.jpg' />
                {/* <img src={`../icons/${this.props.img}.png`} className='category'/> */}
                <img src={`../icons/moon.png`} className='category'/>
                <div className='event-bkg'>
                    <span>gravitation excercises</span>
                    <br/>
                    <img src='../icons/time.png'/>
                    <span>Fri, Jun 28 8:00AM </span>
                    <br/>
                    <img src='../icons/here.png'/>
                    <span>Katowice, Spodek</span>
                </div>
                
            </div>

        )
    }

}