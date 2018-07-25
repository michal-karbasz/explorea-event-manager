import React from 'react';

// import styled components

import { CategoryButton, CategoryImg, CategoryParagraph, Nebula } from './styled-components/category-buttons-style.jsx';

const Category = (props) => {

    // use currying to pass category img props

    const runCategoryChange = category => () => {
        if (typeof props.handleCategoryChange === 'function') {
            props.handleCategoryChange(category);
        }
    }

    let top = '40px';
    let left = '25px';

    if (props.img == 'nebula') {
        top = '-10px';
        left = '118px';
    } else if (props.img == 'alien_sad') {
        top = '40px';
        left = '215px';
    } else if (props.img == 'astronaut') {
        top = '130px';
        left = '255px';
    } else if (props.img == 'alien_sleep') {
        top = '130px';
        left = '-7px';
    }

    return (

        <CategoryButton
            src={props.img}
            onClick={runCategoryChange(props.span)}
            top={top} left={left}
            >

            <CategoryImg src={`../icons/${props.img}.png`}/>
            <CategoryParagraph>
                {props.span}
            </CategoryParagraph>

        </CategoryButton>
    )
}

export default Category;