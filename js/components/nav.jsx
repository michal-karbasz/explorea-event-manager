import React from 'react';

// import components

import Typer from './typer.jsx';

// import styled components

import {Header, Col, Span, Image, StyledLink, SpanNew, Logo, UFO} from './styled-components/nav-style.jsx';



const Nav = () => {

    return (

        <Header>

            <Col>
                <StyledLink className='link-btn' to="/">
                    <Logo src='../icons/satellite_dish.png' className='logo'/>
                    <Span>explorea</Span>
                </StyledLink>
                <Span>|</Span>
                <Typer text="Cause we're not alone anymore..."/>
                <UFO className='ufo' src='../icons/ufo.png'/>
            </Col>

            <div className="header-col menu">
                <StyledLink className='link-btn' to="/newEvent">
                    <Image src='../icons/space_shuttle2.png'/>
                    <SpanNew className='add-new-btn'>new</SpanNew>
                </StyledLink>
                <Span>|</Span>
                <StyledLink className='link-btn' to="/">
                    <Image className='explorer' src='../icons/explorer.png'/>
                    <Span>browse</Span>
                </StyledLink>
                <StyledLink className='link-btn' to="/about">
                    <Span>about</Span>
                </StyledLink>
            </div>

        </Header>
    )
}

export default Nav;