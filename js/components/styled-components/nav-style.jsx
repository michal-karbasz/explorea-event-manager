import styled from 'styled-components';

// import media function to allow RWD settings

import {media} from './media';

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    opacity: 0.9;
    border-bottom: 4px dashed white;
    position: fixed;
    margin-bottom: 5px;
    z-index: 10;
    width: 100%;
`;

export const Col = styled.div `
    display: flex;
    align-items: flex-end;
`;

export const A = styled.a `
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

export const Image = styled.img `
    width: 42px;
    height: 42px;
    padding-top: 5px;
    padding-left: 5px;
`;

export const Col = styled.div `
        display: flex;
        align-items: flex-end;
`;
