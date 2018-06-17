import React from 'react';

export default class BlankEvent extends React.Component {


   
    
    render() {
        return (

            <div className='event-box'>
                <img src={this.props.imgUrl} />
                {/* <img src={`../icons/${this.props.img}.png`} className='category'/> */}
                <div className='event-description'>
                    <p>About:</p>
                    <p>{this.props.description}</p>
                </div>
                <img src={`../icons/moon.png`} className='category'/>
                <div className='event-bkg'>
                    <span>{this.props.title}</span>
                    <br/>
                    <img src='../icons/time.png'/>
                    <span>{this.props.date}  at  {this.props.hour}</span>
                    <br/>
                    <img src='../icons/here.png'/>
                    <span>{this.props.location} </span> <br/>
                    <span className='location2'>{this.props.location2}</span>
                </div>
                <div className='event-bkg2'>
                <img src='../icons/astronaut2.png'/>
                    <span>{this.props.organizer}</span>
                </div>
            </div>

        )
    }

}