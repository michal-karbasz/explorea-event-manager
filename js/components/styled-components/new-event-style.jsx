import styled from 'styled-components';

// import media function to allow RWD settings + import animations

import {media} from './media';
import {} from './keyframes.js';
import {maxWidth} from './event-style.jsx';

// MAIN CONTAINER (SECTION)

export const EventSection = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background-image: url("../images/background1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${media.tablet `
        flex-direction: initial;
    `}
`;

export const Col = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// STYLE FORM COMPONENT

export const FormContainer = styled.div `
    margin-top: 150px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    max-width: ${`${maxWidth}px`};
    ${media.mobile `
        flex-direction: initial;
        max-width: 400px;
        margin-top: 65px;
    `}
    ${media.tablet `
        flex-direction: initial;
        max-width: 440px;
        margin-top: 65px;
    `}
`;

export const H3 = styled.h3 `
    padding: 5px 15px;
    margin-bottom: 5px;
    max-width: 300px;
    color: ${props => props.theme.colors.main};
    ${media.tablet `
        max-width: unset
    `}
`;

export const FormParagraph = styled.p `
    margin-left: 10px;
    font-size: 1em;
`;

export const Label = styled.label `
    margin-left: 10px;
`;

export const Input = styled.input `
    min-width: 280px;
    padding: 5px;
    margin: 5px 25px;
    border: 1px double lightgray;
    ${media.desktop `
    min-width: 386px;
    `}
`;

export const FormLocation = Input.extend `
    min-width: 180px;
    padding: 5px;
    margin-right: 0;
`
export const Textarea = styled.textarea `
    min-width: 280px;
    max-width: 280px;
    min-height: 42px;
    max-height: 180px;
    padding: 5px;
    margin: 5px 25px;
    border: 1px double lightgray;
    ${media.desktop `
    min-width: 386px;
    max-width: 500px;
    `}
`

export const FormHour = Input.extend `
    min-width: 180px;
`

export const FormSelect = styled.select `
    margin-left: 30px;
    margin-top: 10px;
    padding: 5px;
    color: ${props => props.theme.colors.main};
    border: 1px dotted lightgray;
`
export const CreateButton = styled.input `
    padding: 10px;
    margin: 15px 15px;
    background-color: ${props => props.theme.colors.main};
    border: 4px double white;
    color: white;
    font-size: 1.1rem;
    transition: all 1s;
    width: 280px;
    &:hover {
        cursor: copy;
        transition: 1s;
        color: ${props => props.theme.colors.main};
        background-color: white;
        border: 4px double ${props => props.theme.colors.main};
    }
    ${media.desktop `
        width: 300px;
        margin: 15px 55px;
    `}
`

// STYLE EXAMPLE BLANK COMPONENT

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    max-width: ${maxWidth};
    z-index: 1;
    }
    ${media.tablet `
    `}
`;

export const DescriptionSpan = styled.span `
    color: ${props => props.theme.colors.main};
    font-size: 1.5rem;
    padding: 10px 20px;
    position: relative;
    margin: 30px 0 -30px 0;
    &::before {
        content: '';
        background-color: white;
        border-radius: 25px;
        opacity: 0.5;
        position: absolute;
        width: 100%; 
        height: 100%;
        z-index: -2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    ${media.tablet `
        margin: 60px 0 -30px 0;
    `};
`;
