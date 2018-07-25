import React from 'react';

// import styled components

import { CategoryButton, CategoryImg, CategoryParagraph } from './styled-components/category-buttons-style.jsx';

const Category = (props) => {

    // use currying to pass category img props

    const runCategoryChange = category => () => {
        if (typeof props.handleCategoryChange === 'function') {
            props.handleCategoryChange(category);
        }
    }

    let top = '40px';
    let left = '25px';
    let topMobile = '35px';
    let leftMobile = '20px';

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

    if (props.img == 'nebula') {
        topMobile = '-10px';
        leftMobile = '92px';
    } else if (props.img == 'alien_sad') {
        topMobile = '35px';
        leftMobile = '165px';
    } else if (props.img == 'astronaut') {
        topMobile = '115px';
        leftMobile = '200px';
    } else if (props.img == 'alien_sleep') {
        topMobile = '115px';
        leftMobile = '-7px';
    }

    return (

        <CategoryButton
            categoryClicked={props.categoryClicked}
            src={props.img}
            onClick={runCategoryChange(props.span)}
            top={top}
            left={left}
            topMobile={topMobile}
            leftMobile={leftMobile}
            >

            <CategoryImg src={`../icons/${props.img}.png`}/>
            <CategoryParagraph>
                {props.span}
            </CategoryParagraph>

        </CategoryButton>
    )
}

export default Category;