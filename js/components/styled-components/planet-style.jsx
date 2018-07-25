import styled from 'styled-components';

// import media function to allow RWD settings

import {media} from './media';

// MAIN SEARCHBOX STYLE - planet.jsx

// style containers

export const HeroSection = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* width: 100vw; */
    background-image: url("../images/background1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 1;
    &::after {
        content: '';
        width: 100vw;
        height: 100%;
        position: absolute;
        background-color: white;
        opacity: 0.5;
        z-index: -1;
    }
    ${media.mobile `
    `}
    ${media.desktop `
        flex-direction: initial;
    `}
`;

export const Col = styled.div `
    display: flex;
    order: -1;
    ${media.tablet `order: initial;`}
`;

export const SearchBoxBackground = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${media.tablet `
        width: 420px;
        height: 420px;
        background-color: white;
        border: 5px double ${props => props.theme.colors.main};
        border-radius: 50%;
        opacity: 0.9;
    `}
`;

export const SearchBoxContainer = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 220px;
    display: ${props => props.planetClicked ? 'flex' : 'none'};
`;

export const CategoryButtons = styled.div `
    display: flex;
    ${media.tablet `order: initial;`}
`;

// style images

export const PlanetImg = styled.img `
    transition: all 1s;
    width: 150px;
    height: 150px;
    transform: ${props => props.planetClicked ? 'scale(0.8)' : 'scale(1)'};
    ${media.mobile `
        width: 200px;
        height: 200px;
        `}
    ${media.tablet `
        width: 256px;
        height: 256px;
        `}
`;

// style text

export const Paragraph = styled.p `
    font-size: 1.8rem;
    padding: 5px;
    color: rgb(63, 63, 63);
`;

export const Span = styled.span `
    color: ${props => props.theme.colors.main};
`;

export const Input = styled.input `
    border: none;
    padding: 5px 15px;
    font-size: 1.1rem;
    font-family: 'Titillium Web', sans-serif;
    width: 220px;
    &:focus {
        outline: 1px dashed ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.main};
    }
`;

export const SubmitButton = styled.input `
    border: 3px double ${props => props.theme.colors.main};
    background-color: white;
    width: 90px;
    height: 40px;
    font-size: 1rem;
    color: rgb(102, 97, 97);
    letter-spacing: 1px;
    transition: all 400ms;
    margin: 10px;
    &:hover {
        background-color: ${props => props.theme.colors.main};
        border: 4px double white;
        color: white;
        transition: 400ms;
    }
`;

// CATEGORY BUTTONS STYLE - planets.jsx

export const CategoryBackground = styled.div `
    background-color: white;
    width: 90px;
    height: 90px;
    opacity: 0.9;
    border-radius: 50%;
    border: 3px double ${props => props.theme.colors.secondary};
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    transition: opacity 400ms;
    visibility: ${props => props.planetClicked ? 'visible' : 'hidden'};
    &:hover {
        cursor: pointer;
        opacity: 1;
        border-color: ${props => props.theme.colors.main};
        transition: 400ms;
    }
    ${media.tablet `
        width: 160px;
        height: 160px;
        background-color: white;
        border: 5px double ${props => props.theme.colors.main};;
        border-radius: 50%;
        margin: 15px 20px;
        opacity: 0.9;
    `}
`;

export const CategoryImg = styled.img `
    width: 40px;
    height: 40px;
    ${media.tablet `
        width: 64px;
        height: 64px;
    `}
`;

export const CategoryParagraph = styled.p `
    margin: 5px;
    color: rgb(63, 63, 63);
    font-size: 0.5rem;
    ${media.tablet `
    font-size: 0.rem;
    `}
`;

