import React from 'react';

export default class Planets extends React.Component {
    render() {
        return (

            <div className={`planet-bkg-small ${this.props.id}`} style={{visibility:this.props.visibility}}>
                    <img src={`../icons/${this.props.img}.png`} className={this.props.id} />
                    <p>{this.props.span}</p>
            </div>
        )
    }
}