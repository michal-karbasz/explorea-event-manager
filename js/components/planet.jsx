import React from 'react';

export default class Planet extends React.Component {
    render() {
        return (

            <section className='flex-container'>

                <div className="col">
                    <img src='../icons/planet.png' className='planet'/>
                    <span>explore</span>
                </div>

            </section>
        )
    }
}