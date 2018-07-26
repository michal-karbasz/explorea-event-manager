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
    z-index: 6;
    left: ${props => props.menuVisible ? '0' : '15px'};
    top: ${props => props.menuVisible ? '0' : '10px'};
    height: ${props => props.menuVisible ? '100%' : '120px'};
    transition: all 200ms;
    ${media.tablet `
        height: ${props => props.menuVisible ? '100%' : 'unset'};
    `}
    &::after {
        content: '';
        width: 90px;
        height: ${props => props.menuVisible ? '100%' : '80px'};
        border: ${props => props.menuVisible ? 'none' : `2px solid white`};
        border-radius: ${props => props.menuVisible ? '0' : '30%'};
        position: absolute;
        background-color: ${props => props.theme.colors.secondary};
        opacity: ${props => props.menuVisible ? '0.9' : '0.4'};
        transition: 400ms;
        z-index: -1;
    }
    ${media.tablet `
        opacity: 0.9;
        background-color: ${props => props.theme.colors.secondary};
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 5px;
        width: 100%;
        height: initial;
        top: initial;
        left: initial;
        &::after {
            border: none;
            height: 80px;
            width: 138px;
            border-radius: 0;
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
    display: ${props => props.menuVisible ? 'block' : 'none'};
    ${media.tablet `display: flex`}
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
    border: 3px double white;
    border-radius: 20%;
    margin: 10px 10px;
    ${media.tablet `
        height: unset;
        width: unset;
        border: none;
        flex-direction: initial;
        margin: 5px 10px 3px 5px;
        align-items: flex-end;
        &:hover {
            border-radius: unset;
            transition: 200ms;
            color: ${props => props.theme.colors.complementary};
        }
    `}
`;

export const Logo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    text-decoration: none;
    border-radius: 20%;
    margin: 10px 5px;
    ${media.tablet `
        height: unset;
        width: unset;
        border: none;
        flex-direction: initial;
        margin: 5px 5px 0 5px;
    `}
`;

// Style text elements

export const H2 = styled.h2 `
    margin-left: 10px;
    display: none;
    /* margin: px; */
    ${media.desktop `display:block;`}
`;

export const Span = styled.span `
    font-size: 1rem;
    padding: 3px 3px 0 3px;
    ${media.tablet `
    font-size: 1.5rem;
    `}
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
    ${media.desktop `
        display:block;
        opacity: 0;
        animation: ${hover} 800ms infinite alternate ease-in-out;
        animation-delay: 5s;
    `}
    
`;

