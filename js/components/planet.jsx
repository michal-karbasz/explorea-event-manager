import React from 'react';
import Planets from './planet-button.jsx';

export default class Planet extends React.Component {

    state = {
        visible: 'hidden',
    }


    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }



    render() {
        return (

            <section className='flex-container'>
                <div className="col">
                    <div className='planets'>
                        <Planets visibility={this.state.visible} id='button1' img='planetary' span='alien education events' />
                        <Planets visibility={this.state.visible} id='button2' img='nebula' span='flight volounteers' />
                        <Planets visibility={this.state.visible} id='button3' img='alien_sad' span='alien meetings' />
                    </div>
                </div>
                <div className="col">
                    <div className="planet-bkg" onClick={this.revealPlanets}>
                        <img src='../icons/planet.png' className='planet'/>
                        <p><span>click</span> to explore events</p>
                    </div>
                </div>
                <div className="col">
                    <div className='planets'>
                        <Planets visibility={this.state.visible} id='button4' img='astronaut' span='NASA job interviews' />
                        <Planets visibility={this.state.visible} id='button5' img='alien_sleep' span='alien translator workshops' />
                    </div>
                </div>
            </section>
        )
    }
}