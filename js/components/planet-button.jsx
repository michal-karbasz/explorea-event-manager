import React from 'react';

export default class Planets extends React.Component {

    runFilterByCategory = (e) => {
        if (typeof this.props.handleCategoryChange === 'function') {
            this.props.handleCategoryChange(e.target);
        }
    }

    render() {

        let categoryStyle = {
            visibility: this.props.planetClicked ? 'visible' : 'hidden'
        }
        return (

            <div
                className='planet-bkg-small'
                src={this.props.img}
                onClick={this.runCategoryChange}
                style={categoryStyle}>
                <img src={`../icons/${this.props.img}.png`} className={this.props.id}/>
                <p src={this.props.img}>{this.props.span}
                </p>
            </div>
        )
    }
}