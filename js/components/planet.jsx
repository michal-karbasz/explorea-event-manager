import React from 'react';

// import components

import Planets from './planet-button.jsx';

// import styled components

import {Section, Col, CategoryButtons, PlanetImg, SearchBoxBackground, Paragraph, Span, SearchBoxContainer, Input, SubmitButton} from './styled-components/planet-style.jsx';

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

    return (

        <Section>
                <Col>
                    <CategoryButtons>
                        <Planets planetClicked={props.planetClicked} id='education' img='planetary' span='alien education events' filterByCategory={props.filterByCategory}/>
                        <Planets planetClicked={props.planetClicked} id='flight' img='nebula' span='flight volounteers' filterByCategory={props.filterByCategory} />
                        <Planets planetClicked={props.planetClicked} id='meetings' img='alien_sad' span='alien meetings' filterByCategory={props.filterByCategory} />
                    </CategoryButtons>
                </Col>

                <div className="col">
                    <SearchBoxBackground>
                        <PlanetImg
                            src='../icons/planet.png'
                            planetClicked={props.planetClicked}
                            onClick={runOpenSearchBox} 
                        />
                        <Paragraph onClick={runOpenSearchBox}>
                            <Span>click</Span> to explore events
                        </Paragraph>

                        <SearchBoxContainer
                            planetClicked={props.planetClicked}
                            onSubmit={runSubmit}>
                        <Input
                            maxLength='32'
                            className='search-box'
                            placeholder='enter event name or city...'
                            onChange={runInputChange}/>
                        <SubmitButton type='submit' className='search-submit' value='show'/>
                        </SearchBoxContainer>
                    </SearchBoxBackground>
                </div>

                <div className="col">
                    <CategoryButtons>
                        <Planets planetClicked={props.planetClicked} id='jobs' img='astronaut' span='NASA job interviews' filterByCategory={props.filterByCategory}/>
                        <Planets planetClicked={props.planetClicked} id='translation' img='alien_sleep' span='alien translation workshops' filterByCategory={props.filterByCategory} />
                    </CategoryButtons>
                </div>
        </Section>
    )
}

export default Planet;