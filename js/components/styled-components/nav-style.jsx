import {Link} from 'react-router-dom';
import styled from 'styled-components';

// import media function to allow RWD settings

import {media} from './media';
import {hover} from './keyframes.js';


export const Header = styled.header `
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    z-index: 10;
    height: 100%;
    ${media.tablet `
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        position: fixed;
        margin-bottom: 5px;
        max-width: initial;
        width: 100%;
        height: initial;
        opacity: .9;
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

export const StyledLink = styled(Link) `
    height: 70px;
    width: 70px;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const Image = styled.img `
    width: 32px;
    height: 32px;
    ${media.tablet `
        width: 42px;
        height: 42px;
    `}
`;

export const Logo = Image.extend `
    transform: rotate(270deg);
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

export const Menu = styled.div `
        display: flex;
        align-items: flex-end;
`;

