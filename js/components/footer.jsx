import React from 'react';


export default class Footer extends React.Component {

   

    render() {
        return (

            <footer className='flex-container'>
                <div className="col">
                        <img src='../icons/robot.png' />
                        <p>created<span className='coloured'> by</span> Michał Karbasz &copy;</p>
                </div>
                <div className="col year">
                    <span>20<span className='coloured'>18</span> </span>
                </div>
            </footer>
        )
    }
}