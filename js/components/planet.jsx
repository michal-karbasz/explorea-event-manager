import React from 'react';
import Planets from './planet-button.jsx';

export default class Planet extends React.Component {

    state = {
        visible: 'hidden',
        display: 'none',
    }

    openSearchBox = () => {
        this.setState({display: this.state.display === 'none' ? 'block' : 'none'})
    }

    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }

    onClick = (e) => {
        const input = document.querySelector(['.search-box'])
        if (e.target != input) {
            this.openSearchBox();
            this.revealPlanets();
        }
    }

    // runOpenSearchBox = (e) => {
    //     if(typeof this.props.openSearchBox === 'function') {
    //         this.props.openSearchBox(e.target);
    //     }
    // }

    render() {
        return (

            <section className='flex-container'>
                <div className="col">
                    <div className='planets'>
                        <Planets visibility={this.state.visible} id='button1' img='planetary' span='alien education events' handleCategoryChange={this.props.handlecategoryChange}/>
                        <Planets visibility={this.state.visible} id='button2' img='nebula' span='flight volounteers' handleCategoryChange={this.props.handlecategoryChange} />
                        <Planets visibility={this.state.visible} id='button3' img='alien_sad' span='alien meetings' handleCategoryChange={this.props.handlecategoryChange} />
                    </div>
                </div>
                <div className="col">
                    <div className="planet-bkg" onClick={this.onClick}>
                        <img src='../icons/planet.png' className='planet'/>
                        <p><span>click</span> to explore events</p>
                        <input maxLength='32' className='search-box' placeholder='enter event name or city...' style={{display:this.state.display}} onChange={this.handleSearchChange}/>
                    </div>
                </div>
                <div className="col">
                    <div className='planets'>
                        <Planets visibility={this.state.visible} id='button4' img='astronaut' span='NASA job interviews' handleCategoryChange={this.props.handlecategoryChange}/>
                        <Planets visibility={this.state.visible} id='button5' img='alien_sleep' span='alien translator workshops' handleCategoryChange={this.props.handlecategoryChange} />
                    </div>
                </div>
            </section>
        )
    }
}