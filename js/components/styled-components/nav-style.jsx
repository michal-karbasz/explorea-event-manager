import {Link} from 'react-router-dom';
import styled from 'styled-components';

// import media function to allow RWD settings

import {media} from './media';
import {hover} from './keyframes.js';


export const Header = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    opacity: 0.9;
    
    z-index: 10;
    
    ${media.tablet `
        position: fixed;
        margin-bottom: 5px;
        width: 100%;
        flex-direction: row;
    `}
`;

export const Col = styled.div `
    display: flex;
    align-items: flex-end;
`;

export const StyledLink = styled(Link) `
    text-decoration: none;
    color: black;
`;

export const H2 = styled.h2 `
    margin-left: 10px;
    display: none;
    ${media.tablet `display:block;`}
`;

export const Span = styled.span `
    font-size: 1.5rem;
    padding: 3px;
`;

export const SpanNew = Span.extend `
    color: ${props => props.theme.colors.main};
    padding-left: 0;
`;

export const Image = styled.img `
    width: 42px;
    height: 42px;
    padding-top: 5px;
    padding-left: 5px;
`;

export const Logo = Image.extend `
    transform: rotateY(180deg);
`;

export const UFO = Image.extend `
    opacity: 0;
    animation: ${hover} 800ms infinite alternate ease-in-out;
    animation-delay: 5s;
`;

export const Menu = styled.div `
        display: flex;
        align-items: flex-end;
`;

