import React from 'react';

// import components

import Planets from './planet-button.jsx';

export default class Planet extends React.Component {


// change to stateless component!!!!

    state = {
        visible: 'hidden',
        display: 'none',
    }
    
    // on Planet click execute function that changes parent's state (planetClicked) to either true or false

    runOpenSearchBox = () => {
        if(typeof this.props.openSearchBox === 'function') {
            this.props.openSearchBox();
        }
    }

    // execute function that changes parent's state after user types sth in the searchbox

    runInputChange = (e) => {
        if(typeof this.props.handleSearchInput === 'function') {
            this.props.handleSearchInput(e.target.value);
        }
    }

    // execute searching for events according to the searchbox input

    runSubmit = (e) => {
        if(typeof this.props.searchEvent === 'function') {
            this.props.searchEvent(e);
        }
    }

    


    


    // shrinkPlanet = () => {
    //     const planetImg = document.querySelector('.planet');
    //     planetImg.classList.add('shrink');
    // }

    // openSearchBox = () => {
    //     this.setState({display: this.state.display === 'none' ? 'block' : 'none'})
    //     this.shrinkPlanet();
    // }

    // onClick = (e) => {
    //     const input = document.querySelector(['.search-box'])
    //     const submit = document.querySelector('.search-submit')
    //     if (e.target != input && e.target != submit) {
    //         this.openSearchBox();
    //         this.revealPlanets();
    //         this.displayAll();
    //     }
    // }


    // displayAll = (e) => {
    //     if(typeof this.props.displayAll === 'function') {
    //         this.props.displayAll(e);
    //     }
    // }

    render() {



        const planetStyle = {
            transition: '500ms',
            transform: 'scale(0.7)',
        }

        const searchBoxStyle = {

        }
    
        return (

            <section className='flex-container'>

                <div className="col">
                    <div className='planets'>
                        <Planets planetClicked={this.props.planetClicked} id='education' img='planetary' span='alien education events' filterByCategory={this.props.filterByCategory}/>
                        <Planets planetClicked={this.props.planetClicked} id='flight' img='nebula' span='flight volounteers' filterByCategory={this.props.filterByCategory} />
                        <Planets planetClicked={this.props.planetClicked} id='meetings' img='alien_sad' span='alien meetings' filterByCategory={this.props.filterByCategory} />
                    </div>
                </div>

                <div className="col">
                    <div className="planet-bkg">
                        <img
                            src='../icons/planet.png'
                            className='planet'
                            style={this.props.planetClicked ? planetStyle : null }
                            onClick={this.runOpenSearchBox}/>
                        <p onClick={this.runOpenSearchBox}>
                            <span>click</span> to explore events
                        </p>

                        {/* search-box input & button */}

                        <form
                            className='search-box-container'
                            style={this.props.planetClicked ? searchBoxStyle : {display:'none'}}
                            onSubmit={this.runSubmit}>
                        <input
                            maxLength='32'
                            className='search-box'
                            placeholder='enter event name or city...'
                            onChange={this.runInputChange}/>
                        <input type='submit' className='search-submit' value='show'/>
                        </form>
                    </div>
                </div>

                <div className="col">
                    <div className='planets'>
                        <Planets planetClicked={this.props.planetClicked} id='jobs' img='astronaut' span='NASA job interviews' filterByCategory={this.props.filterByCategory}/>
                        <Planets planetClicked={this.props.planetClicked} id='translation' img='alien_sleep' span='alien translation workshops' filterByCategory={this.props.filterByCategory} />
                    </div>
                </div>

            </section>
        )
    }
}