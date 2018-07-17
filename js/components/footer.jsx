import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (

            <footer className='flex-container'>
                <div className="col">
                        <img src='../icons/robot.png' />
                        <p>&copy; 2018<span className='coloured'> explorea</span> </p>
                </div>
            </footer>
        )
    }
}