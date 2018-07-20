import React from 'react';

export default class Category extends React.Component {

// use currying to pass category img props

    runCategoryChange = (category) => () => {
        if (typeof this.props.handleCategoryChange === 'function') {
            this.props.handleCategoryChange(category);
        }
    }

    render() {
        
        return (

            <div
                className={`category-btn ${this.props.img}`}
                src={this.props.img}
                onClick={this.runCategoryChange(this.props.span)}
                style={{ display: this.props.visible }}>

                    <img src={`../icons/${this.props.img}.png`} />
                    <p> {this.props.span} </p>

            </div>
        )
    }
}