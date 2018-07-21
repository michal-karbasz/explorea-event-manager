import React from 'react';

export default class Planets extends React.Component {

    runFilterByCategory = (category) => () => {
        if (typeof this.props.filterByCategory === 'function') {
            this.props.filterByCategory(category);
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
                onClick={this.runFilterByCategory(this.props.id)}
                style={categoryStyle}>
                <img src={`../icons/${this.props.img}.png`} className={this.props.id}/>
                <p src={this.props.img}>{this.props.span}
                </p>
            </div>
        )
    }
}