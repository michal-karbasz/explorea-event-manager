import React from 'react';

// import components

import Planets from './planet-button.jsx';

export default class Planet extends React.Component {

    state = {
        visible: 'hidden',
        display: 'none',
    }

    shrinkPlanet = () => {
        const planetImg = document.querySelector('.planet');
        planetImg.classList.add('shrink');
    }

    openSearchBox = () => {
        this.setState({display: this.state.display === 'none' ? 'block' : 'none'})
        this.shrinkPlanet();
    }

    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }

    onClick = (e) => {
        const input = document.querySelector(['.search-box'])
        const submit = document.querySelector('.search-submit')
        if (e.target != input && e.target != submit) {
            this.openSearchBox();
            this.revealPlanets();
            this.displayAll();
        }
    }

    handleInputChange = (e) => {
        if(typeof this.props.handleSearchChange === 'function') {
            this.props.handleSearchChange(e.target.value);
        }
    }

    displayAll = (e) => {
        if(typeof this.props.displayAll === 'function') {
            this.props.displayAll(e);
        }
    }


    handleSubmit = (e) => {
        if(typeof this.props.searchEvent === 'function') {
            this.props.searchEvent(e);
        }
    }


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
                        <form className='search-box-container' style={{display:this.state.display}} onSubmit={this.handleSubmit}>
                            <input maxLength='32' className='search-box' placeholder='enter event name or city...'  onChange={this.handleInputChange}/>
                            <input type='submit' className='search-submit' value='search' />
                        </form>
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