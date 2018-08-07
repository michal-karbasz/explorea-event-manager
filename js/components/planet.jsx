import React from 'react';

// import components

import Planets from './planet-button.jsx';

// import styled components

import {HeroSection, Col, CategoryButtons, PlanetImg, SearchBoxBackground, Paragraph, Span, SearchBoxContainer, Input, SubmitButton} from './styled-components/planet-style.jsx';

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

    const scrollDown = () => {
        window.scrollTo(0,1200);
    }

    const PlanetButton = ({ id, img, span }) => (
        <Planets id={id} img={img} span={span} planetClicked={props.planetClicked} filterByCategory={props.filterByCategory} />
    );

    return (

        <HeroSection>
                <div>
                    <CategoryButtons>
                        <PlanetButton  id='education' img='planetary' span='alien education events' />
                        <PlanetButton  id='flight' img='nebula' span='flight volounteers' />
                        <PlanetButton  id='meetings' img='alien_sad' span='alien meetings' />
                    </CategoryButtons>
                </div>

                <Col>
                    <SearchBoxBackground  planetClicked={props.planetClicked}>
                        <PlanetImg
                            src='../icons/planet.png'
                            planetClicked={props.planetClicked}
                            onClick={runOpenSearchBox} 
                        />
                        <Paragraph planetClicked={props.planetClicked} onClick={runOpenSearchBox}>
                            <Span onClick={runOpenSearchBox}>click&nbsp;</Span>to explore events
                        </Paragraph>

                        <SearchBoxContainer
                            planetClicked={props.planetClicked}
                            onSubmit={scrollDown}>
                        <Input
                            maxLength='32'
                            placeholder='enter event name or city...'
                            onChange={runInputChange}
                            value={props.searchInput}/>
                        <SubmitButton type='submit' value='show' onClick={scrollDown}/>
                        </SearchBoxContainer>
                    </SearchBoxBackground>
                </Col>

                <div>
                    <CategoryButtons>
                        <PlanetButton  id='jobs' img='astronaut' span='NASA jobs' />
                        <PlanetButton  id='translation' img='alien_sleep' span='alien translation workshops' />
                    </CategoryButtons>
                </div>
        </HeroSection>
    )
}

export default Planet;