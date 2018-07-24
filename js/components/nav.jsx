import React from 'react';

// import components

import Typer from './typer.jsx';

// import styled components

import {Header, Col, MobileCol, Span, Image, Arrow, StyledLink, StyledLogoLink, SpanNew, SpanSeparator, UFO} from './styled-components/nav-style.jsx';


const Nav = props => {

    const runShowMenu = () => {
        if (typeof props.showMobileMenu === 'function') {
            props.showMobileMenu();
        }
    }

    return (

        <Header menuVisible={props.menuVisible}>

            <Col>
                <StyledLogoLink to="/" replace onClick={runShowMenu} >
                    <Image src='../icons/satellite_dish.png' />
                    <Span >{props.menuVisible ? 'explorea' : 'explore'}</Span>
                </StyledLogoLink>
                    <Arrow menuVisible={props.menuVisible} src='../icons/arrow.png' />
                <SpanSeparator>|</SpanSeparator>
                <Typer text="Cause we're not alone anymore..." />
                <UFO src='../icons/ufo.png'/>
            </Col>

            <MobileCol menuVisible={props.menuVisible}>
                <StyledLink to="/newEvent">
                    <Image src='../icons/space_shuttle2.png' />
                    <SpanNew>new</SpanNew>
                </StyledLink>
                <SpanSeparator>|</SpanSeparator>
                <StyledLink replace to="/">
                    <Image src='../icons/explorer.png' />
                    <Span>browse</Span>
                </StyledLink>
                <StyledLink to="/about">
                    <Span>about</Span>
                </StyledLink>
            </MobileCol>

        </Header>
    )
}

export default Nav;