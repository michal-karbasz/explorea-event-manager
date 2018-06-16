import React from 'react';

export default class BlankEvent extends React.Component {


    render() {
        return (

            <div className='event-box'>
                <img src='../images/background1.jpg' />
                {/* <img src={`../icons/${this.props.img}.png`} className='category'/> */}
                <img src={`../icons/moon.png`} className='category'/>
                <div className='event-bkg'>
                    <span>this is event's title</span>
                    <br/>
                    <img src='../icons/time.png'/>
                    <span>your date and hour goes here</span>
                    <br/>
                    <img src='../icons/here.png'/>
                    <span>your location goes here</span>
                </div>
            </div>

        )
    }

}