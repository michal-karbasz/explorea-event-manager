import React from 'react';

export default class Planets extends React.Component {
    render() {
        return (

            <div className='flex-container planet-bkg-small'>
                <div className="col">
                        <img src={`../icons/${this.props.img}.png`} className={this.props.id} style={{display:this.props.visibility}}/>
                        <span>{this.props.span}</span>
                </div>
            </div>
        )
    }
}