import React from 'react';
import Planets from './planet-button.jsx';

export default class Planet extends React.Component {

    state = {
        visible: 'none',
    }


    revealPlanets = () => {
        this.setState({visible: 'block'})
    }



    render() {
        return (

            <section className='flex-container'>
                <div className="col">
                    <div className="planet-bkg" onMouseEnter={this.revealPlanets}>
                        <img src='../icons/planet.png' className='planet'/>
                        <span>explore events</span>
                    </div>
                    <div className='planets'>
                        <Planets visibility={this.state.visible} id='button1' img='moon' span='Education' />
                    </div>
                </div>
            </section>
        )
    }
}