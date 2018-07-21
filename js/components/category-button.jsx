import React from 'react';

const Category = (props) => {

    // use currying to pass category img props

    const runCategoryChange = category => () => {
        if (typeof props.handleCategoryChange === 'function') {
            props.handleCategoryChange(category);
        }
    }
    return (

        <div
            className={`category-btn ${props.img}`}
            src={props.img}
            onClick={runCategoryChange(props.span)}
            style={{ display: props.visible }}>

            <img src={`../icons/${props.img}.png`}/>
            <p>
                {props.span}
            </p>

        </div>
    )
}

export default Category;