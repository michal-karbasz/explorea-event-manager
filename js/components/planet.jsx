import React from 'react';

// import components

import Planets from './planet-button.jsx';

const Planet = props => {

    // on Planet click execute function that changes parent's state (planetClicked) to either true or false

    const runOpenSearchBox = () => {
        if(typeof props.openSearchBox === 'function') {
            props.openSearchBox();
        }
    }

    // execute function that changes parent's state after user types sth in the searchbox

    const runInputChange = (e) => {
        if(typeof props.handleSearchInput === 'function') {
            props.handleSearchInput(e.target.value);
        }
    }

    // execute searching for events according to the searchbox input

    const runSubmit = (e) => {
        if(typeof props.searchEvent === 'function') {
            props.searchEvent(e);
        }
    }

    const planetStyle = {
        transition: '500ms',
        transform: 'scale(0.8)',
    }
    
    return (

        <section className='flex-container'>

            <div className="col">
                <div className='planets'>
                    <Planets planetClicked={props.planetClicked} id='education' img='planetary' span='alien education events' filterByCategory={props.filterByCategory}/>
                    <Planets planetClicked={props.planetClicked} id='flight' img='nebula' span='flight volounteers' filterByCategory={props.filterByCategory} />
                    <Planets planetClicked={props.planetClicked} id='meetings' img='alien_sad' span='alien meetings' filterByCategory={props.filterByCategory} />
                </div>
            </div>

            <div className="col">
                <div className="planet-bkg">
                    <img
                        src='../icons/planet.png'
                        className='planet'
                        style={props.planetClicked ? planetStyle : null }
                        onClick={runOpenSearchBox}/>
                    <p onClick={runOpenSearchBox}>
                        <span>click</span> to explore events
                    </p>

                    {/* search-box input & button */}

                    <form
                        className='search-box-container'
                        style={props.planetClicked ? null : {display:'none'}}
                        onSubmit={runSubmit}>
                    <input
                        maxLength='32'
                        className='search-box'
                        placeholder='enter event name or city...'
                        onChange={runInputChange}/>
                    <input type='submit' className='search-submit' value='show'/>
                    </form>
                </div>
            </div>

            <div className="col">
                <div className='planets'>
                    <Planets planetClicked={props.planetClicked} id='jobs' img='astronaut' span='NASA job interviews' filterByCategory={props.filterByCategory}/>
                    <Planets planetClicked={props.planetClicked} id='translation' img='alien_sleep' span='alien translation workshops' filterByCategory={props.filterByCategory} />
                </div>
            </div>

        </section>
    )
}

export default Planet;