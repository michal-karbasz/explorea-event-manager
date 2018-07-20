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
            transform: 'scale(0.7)',
            transition: '500ms',
        }
    
        return (

            <section className='flex-container'>
                <div className="col">
                    <div className='planets'>
                        <Planets planetClicked={this.props.planetClicked} img='planetary' span='alien education events' filterByCategory={this.props.filterByCategory}/>
                        <Planets planetClicked={this.props.planetClicked}  img='nebula' span='flight volounteers' filterByCategory={this.props.filterByCategory} />
                        <Planets planetClicked={this.props.planetClicked} img='alien_sad' span='alien meetings' filterByCategory={this.props.filterByCategory} />
                    </div>
                </div>
                <div className="col">
                    <div className="planet-bkg" onClick={this.runOpenSearchBox}>
                        <img src='../icons/planet.png' className='planet'/>
                        <p><span>click</span> to explore events</p>
                        <form className='search-box-container' style={{display:this.state.display}} onSubmit={this.runSubmit}>
                            <input maxLength='32' className='search-box' placeholder='enter event name or city...'  onChange={this.runInputChange}/>
                            <input type='submit' className='search-submit' value='search' />
                        </form>
                    </div>
                </div>
                <div className="col">
                    <div className='planets'>
                        <Planets planetClicked={this.props.planetClicked} img='astronaut' span='NASA job interviews' filterByCategory={this.props.filterByCategory}/>
                        <Planets planetClicked={this.props.planetClicked} img='alien_sleep' span='alien translator workshops' filterByCategory={this.props.filterByCategory} />
                    </div>
                </div>
            </section>
        )
    }
}