import React from 'react';

// import styled components

import { CategoryBackground, CategoryImg, CategoryParagraph } from './styled-components/planet-style.jsx';

const Planets = props => {

    const runFilterByCategory = (category) => () => {
        if (typeof props.filterByCategory === 'function') {
            props.filterByCategory(category);
        }
    }

    return (

        <CategoryBackground
            src={props.img}
            onClick={runFilterByCategory(props.id)}
            planetClicked={props.planetClicked}>
            <CategoryImg src={`../icons/${props.img}.png`} className={props.id}/>
            <CategoryParagraph src={props.img}>{props.span}
            </CategoryParagraph>
        </CategoryBackground>
    )
}

export default Planets;