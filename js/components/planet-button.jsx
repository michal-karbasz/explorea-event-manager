import React from 'react';

const Planets = props => {

    const runFilterByCategory = (category) => () => {
        if (typeof props.filterByCategory === 'function') {
            props.filterByCategory(category);
        }
    }

    let categoryStyle = {
        visibility: props.planetClicked ? 'visible' : 'hidden',
    }
    return (

        <div
            className='planet-bkg-small'
            src={props.img}
            onClick={runFilterByCategory(props.id)}
            style={categoryStyle}>
            <img src={`../icons/${props.img}.png`} className={props.id}/>
            <p src={props.img}>{props.span}
            </p>
        </div>
    )
}

export default Planets;