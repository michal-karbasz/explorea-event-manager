import React from 'react';

export default class Planets extends React.Component {

    runCategoryChange = (e) => {
        if(typeof this.props.handleCategoryChange === 'function') {
            this.props.handleCategoryChange(e.target.value);
        }
    }


    render() {
        return (

            <div className={`planet-bkg-small ${this.props.id}`} onClick={this.runCategoryChange} style={{visibility:this.props.visibility}}>
                    <img src={`../icons/${this.props.img}.png`} className={this.props.id}  />
                    <p>{this.props.span}</p>
            </div>
        )
    }
}