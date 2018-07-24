import {Link} from 'react-router-dom';
import styled from 'styled-components';

// import media function to allow RWD settings + import animations

import {media} from './media';
import {hover, point} from './keyframes.js';


export const Header = styled.header `
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 2;
    left: ${props => props.menuVisible ? '0' : '15px'};
    top: ${props => props.menuVisible ? '0' : '15px'};
    height: ${props => props.menuVisible ? '100%' : 'unset'};
    transition: all 200ms;
    &::after {
        content: '';
        width: 90px;
        height: ${props => props.menuVisible ? '100%' : '80px'};
        border: ${props => props.menuVisible ? 'none' : `2px solid ${props.theme.colors.complementary}`};
        border-radius: ${props => props.menuVisible ? '0' : '30%'};
        position: absolute;
        background-color: white;
        opacity: ${props => props.menuVisible ? '0.9' : '0.5'};
        transition: 400ms;
        z-index: -1;
    }
    ${media.tablet `
        background-color: white;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 5px;
        width: 100%;
        height: initial;
        top: initial;
        left: initial;
        border-bottom: 1px solid ${props => props.theme.colors.complementary};
        &::after {
            border: none;
            height: 80px;
        }
    `}
`;

export const Col = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.tablet `
        flex-direction: row;
        align-items: flex-end;
        height: 50px;
    `}
`;

export const MobileCol = Col.extend `
    visibility: ${props => props.menuVisible ? 'visible' : 'hidden'};
    ${media.tablet `visibility: visible`}
`;

export const StyledLink = styled(Link) `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    text-decoration: none;
    color: black;
    border: 3px double ${props => props.theme.colors.main};
    border-radius: 20%;
    margin: 10px 5px;
    ${media.tablet `
        height: unset;
        width: unset;
        border: none;
        flex-direction: initial;
        margin: 5px;
    `}
`;

export const StyledLogoLink = StyledLink.extend `
    border: none;
`;

// Style text elements

export const H2 = styled.h2 `
    margin-left: 10px;
    display: none;
    margin: 5px;
    ${media.tablet `display:block;`}
`;

export const Span = styled.span `
    font-size: 1rem;
    padding: 3px;
    ${media.tablet `font-size: 1.5rem;`}
`;

export const SpanNew = Span.extend `
    color: ${props => props.theme.colors.main};
    padding-left: 0;
`;

export const SpanSeparator = Span.extend `
    display: none;
    ${media.tablet `display: block;`}

`;

// Style icons

export const Image = styled.img `
    width: 32px;
    height: 32px;
    ${media.tablet `
        width: 42px;
        height: 42px;
    `}
`;

export const Arrow = Image.extend `
    display: ${props => props.menuVisible ? 'none' : 'block'};
    animation: ${point} 800ms infinite alternate;
    ${media.tablet `display: none;`}
    
`;

export const UFO = Image.extend `
    display: none;
    ${media.tablet `
        display:block;
        opacity: 0;
        animation: ${hover} 800ms infinite alternate ease-in-out;
        animation-delay: 5s;
    `}
    
`;

