import React from 'react';

export default class Planets extends React.Component {

    runCategoryChange = (e) => {
        if (typeof this.props.handleCategoryChange === 'function') {
            this.props.handleCategoryChange(e.target);
        }
    }

    render() {
        return (

            <div
                className={`planet-bkg-small ${this.props.id}`}
                src={this.props.img}
                onClick={this.runCategoryChange}
                style={{ visibility: this.props.visibility }}>
                <img src={`../icons/${this.props.img}.png`} className={this.props.id}/>
                <p src={this.props.img}>{this.props.span}
                </p>
            </div>
        )
    }
}