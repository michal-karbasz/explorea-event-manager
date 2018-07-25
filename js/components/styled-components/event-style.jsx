import styled from 'styled-components';

// import media function to allow RWD settings

import {media} from './media';

// MAIN CONTAINER (SECTION)

export const EventSection = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${media.tablet `justify-content: space-around;`}
`;

// EVENTS

// style containers

export const EventContainer = styled.div `
    margin: 70px 35px 35px;
    max-width: 380px;
    height: 450px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    transition: all 1s;
    &:hover ${EventDescriptionContainer} {
        display: block;
    }
`;

export const EventDescriptionContainer = styled.div `
    background-color: white;
    width: 378px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.3em;
    display: none;
    z-index: 2;
    opacity: 0.8;
    animation: ${props => props.editClicked ? 'animation: slide-up 500ms 1 normal forwards;' : 'none'};
`;

export const EventInnerContainer1 = styled.div `
    background-color: white;
    height: 132px;
    border-top: 2px solid ${props => props.theme.colors.main};
`;

export const EventInnerContainer2 = styled.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    height: 36px;
    border-top: ${props => props.theme.colors.main};
`;

export const EventButtons = styled.button `
    font-family: 'Titillium Web', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${props => props.theme.colors.main};
    width: 120px;
    height: 56px;
    position: absolute;
    top: -56px;
    right: 119px;
    opacity: 0.9;
    border: 4px double ${props => props.theme.colors.main};
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`;

export const DeleteButton = EventButtons.extend `
    right: -1px;
`;

// style images

export const EventImage = styled.img `
    width: 378px;
    height: 280px;
`;

export const EventIcon = styled.img `
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;

export const CategoryImg = styled.img `
    width: 66px;
    height: 66px;
    position: absolute;
    top: -43px;
    left: -33px;
    &:hover {
        cursor: pointer;
    }
    &::before {
        content: '';
        background-color: white;
        opacity: 0.5;
        width: 84px;
        height: 84px;
        border-radius: 50%;
        position: absolute;
        top: -52px;
        left: -42px;
    }
`;

export const EventButtonIcon = styled.img `
    height: 32px;
    width: 32px;
`;

export const EventOrganizerIcon = styled.img `
    width: 22px;
    height: 22px;
    margin-top: 5px;
    margin-left: 10px;
    transform: rotateY(180deg);
`;

// style text

export const DescriptionParagraph = styled.p `
    margin: 5px 15px;
`;

export const DescriptionHeader = styled.p `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.4em;
    color: ${props => props.theme.colors.main};
`;

export const DescriptionTextarea = styled.textarea `
    font-family: 'Titillium Web', sans-serif;
    margin: 5px 15px;
    text-align: justify;
    white-space: normal;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
    min-height: 175px;
    max-height: 230px;
    min-width: 350px;
    max-width: 350px;
`;

export const EventSpan = styled.span `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.2rem;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const EventTitle = styled.input `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.main};
    width: 350px;
`;

export const EventInput = styled.input `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.2rem;
    margin-left: 10px;
    border: none;
    background-color: transparent;
    width: 340px;
`;

export const EventInput2 = EventInput.extend `
    width: 340px;
`;

export const EventDate = EventInput.extend `
    width: 110px;
`;

export const EventHour = EventInput.extend `
    width: 110px;
    margin-left: 37px;
`;

export const EventLocation2 = EventInput.extend `
    margin-left: 37px;
`;

export const EventButtonSpan = styled.span `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.2rem;
`;