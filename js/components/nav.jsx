import React from 'react';

// import components

import Typer from './typer.jsx';

// import styled components

import {Header, Col, Span, Image, StyledLink, StyledLogoLink, SpanNew, SpanSeparator, Logo, UFO} from './styled-components/nav-style.jsx';



const Nav = () => {

    return (

        <Header>

            <Col>
                <StyledLogoLink to="/">
                    <Logo src='../icons/satellite_dish.png'/>
                    <Span>explorea</Span>
                </StyledLogoLink>
                <SpanSeparator>|</SpanSeparator>
                <Typer text="Cause we're not alone anymore..."/>
                <UFO src='../icons/ufo.png'/>
            </Col>

            <Col>
                <StyledLink to="/newEvent">
                    <Image src='../icons/space_shuttle2.png'/>
                    <SpanNew>new</SpanNew>
                </StyledLink>
                <SpanSeparator>|</SpanSeparator>
                <StyledLink to="/">
                    <Image src='../icons/explorer.png'/>
                    <Span>browse</Span>
                </StyledLink>
                <StyledLink to="/about">
                    <Span>about</Span>
                </StyledLink>
            </Col>

        </Header>
    )
}

export default Nav;