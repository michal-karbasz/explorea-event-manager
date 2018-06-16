import React from 'react';

export default class BlankEvent extends React.Component {


    render() {
        return (

            <div className='event-box'>
                <img src='../images/background1.jpg' />
                {/* <img src={`../icons/${this.props.img}.png`} className='category'/> */}
                <img src={`../icons/moon.png`} className='category'/>
                <div className='event-bkg'>
                    <span> excercises</span>
                    <br/>
                    <img src='../icons/time.png'/>
                    <span>Fri, Jun 28 8:00AM </span>
                    <br/>
                    <img src='../icons/here.png'/>
                    <span>Katowice, Spodek</span>
                </div>
                
            </div>

        )
    }

}