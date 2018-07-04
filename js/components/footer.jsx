import React from 'react';


export default class Footer extends React.Component {

   

    render() {
        return (

            <footer className='flex-container'>
                <div className="col">
                        <img src='../icons/robot.png' />
                        <p>Created<span className='coloured'> by</span> Michał Karbasz</p>
                </div>
                <div className="col">
                    <span>201<span className='coloured'>8</span> </span>
                </div>
            </footer>
        )
    }
}