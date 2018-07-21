import React from 'react';
import {Link} from 'react-router-dom';

// import components

import Typer from './typer.jsx';

const Nav = () => {

    return (

        <header className='flex-container'>

            <div className="header-col">
                <Link className='link-btn' to="/"><img src='../icons/satellite_dish.png' className='logo'/>
                    <span>explorea</span>
                </Link>
                <span>|</span>
                <Typer text="Cause we're not alone anymore..."/>
                <img className='ufo' src='../icons/ufo.png'/>
            </div>

            <div className="header-col menu">
                <Link className='link-btn' to="/newEvent">
                    <img src='../icons/space_shuttle2.png'/>
                    <span className='add-new-btn'>new</span>
                </Link>
                <span>|</span>
                <Link className='link-btn' to="/">
                    <img className='explorer' src='../icons/explorer.png'/>
                    <span>browse</span>
                </Link>
                <Link className='link-btn' to="/about">
                    <span>about</span>
                </Link>
            </div>

        </header>
    )
}

export default Nav;