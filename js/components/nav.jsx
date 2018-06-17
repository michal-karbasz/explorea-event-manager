import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class Nav extends React.Component { 



    render() {
        return (

            <header className='flex-container'>

                <div className="header-col">
                <Link className='link-btn' to="/"><img src='../icons/satellite_dish.png' className='logo'/>
                    <span>explorea</span>
                </Link>
                    <span>|</span>
                </div>


                <div className="header-col menu">
                    <Link className='link-btn' to="/newEvent">
                        <img src='../icons/space_shuttle2.png'/>
                        <span onClick={this.addNewEvent}>new</span>
                    </Link>
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