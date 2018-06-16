import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (

            <header className='flex-container'>

                <div className="header-col">

                    <img src='../icons/satellite_dish.png' className='logo'/>
                    <span>explorea</span>
                    <span>|</span>
                </div>


                <div className="header-col menu">
                    <img src='../icons/space_shuttle2.png'/>
                    <span>new</span>
                    <span>|</span>
                    <img src='../icons/explorer.png'/>
                    <span>browse</span>
                    <span>about</span>
                    <span>find</span>
                </div>

            </header>
        )
    }
}