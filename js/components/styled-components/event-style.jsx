import styled from 'styled-components';

// import media function to allow RWD settings + import animations

import {media} from './media';
import {slideRight, slideUp, fadeIn, moveCategory, moveCategoryMobile, slideRightMobile, textarea, textareaMobile, slideUpMobile} from './keyframes.js';

// MAIN CONTAINER (SECTION)

export const EventSection = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${media.tablet `justify-content: space-around;`}
`;

// EVENTS

const maxWidth = '310';

// style containers

export const EventDescriptionContainer = styled.div `
    background-color: white;
    max-width: ${`${maxWidth -2}px`};
    max-height: ${`${(maxWidth -2) * 0.8148}px`};
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.3em;
    display: none;
    z-index: 2;
    opacity: 0.8;
    animation: ${props => props.editClicked ? `${slideUpMobile} 500ms 1 normal forwards` : 'none'};
    ${media.mobile `
    animation: ${props => (props.editClicked && props.categoryClicked === false) ? `${slideUp} 500ms 1 normal forwards` : 'none'};
    max-height: 252px;
    max-width: 378px;
    `}
`;

export const EventContainer = styled.div `
    margin: 70px 0;
    max-width: ${`${maxWidth}px`};
    max-height: 453.5px;
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
    &::before {
        content: '';
        background-color: white;
        opacity: 0.5;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        position: absolute;
        top: -64px;
        left: 5px;
        z-index: 3;
    }
    ${media.mobile`
    max-width: 380px;
    margin: 70px 35px;
    &::before {
        width: 76px;
        height: 76px;
        top: -52px;
        left: -42px;
        border: 1px solid paleturquoise;
    }
    `}
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
    border-top: 2px solid ${props => props.theme.colors.main};
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
    right: ${props => props.buttonType === 'delete' ? '-1px' : '119px'};
    opacity: 0.9;
    border: 4px double ${props => props.theme.colors.main};
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`;

export const DeleteConfirmButton = styled.button `
    align-items: center;
    justify-content: space-around;
    border: 4px double ${props => props.theme.colors.main};
    background-color: white;
    width: 90px;
    height: 45px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: rgb(102, 97, 97);
    letter-spacing: 1px;
    opacity: 0;
    animation: ${fadeIn} 700ms 1 normal forwards;
    animation-delay: 1s;
    &:hover {
        background-color: ${props => props.theme.colors.main};
        border: 4px double white;
        color: white;
    }
    ${media.mobile `
        width: 120px;
        height: 60px;
        font-size: 1.1rem;
    `}
`;

export const DeleteConfirmContainer = styled.div `
    background-color: white;
    border-bottom: 1px solid ${props => props.theme.colors.main};
    width: 1px;
    height: ${`${(maxWidth) * 0.8148}px`};
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    display: ${props => props.deleteClicked ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: ${slideRightMobile} 700ms 1 normal forwards;
    ${media.mobile `
    font-size: 1.2rem;
    animation: ${slideRight} 700ms 1 normal forwards;
    `}
`;

export const DeleteConfirmCol = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

export const UrlField = styled.div `
    background-color: white;
    max-width: ${`${maxWidth-2}px`};
    height: 40px;
    position: absolute;
    top: 212px;
    left: 0;
    font-size: 1rem;
    z-index: 1;
    animation: ${slideRight} 1s 1 normal forwards;
    display: ${props => (props.editClicked && props.categoryClicked === false) ? 'flex' : 'none'};
    align-items: center;
    ${media.mobile `
    max-width: 381.5px;
    `}
`;

// style images

export const EventImage = styled.img `
    width: ${`${maxWidth -2}px`};
    height: ${`${(maxWidth -2) * 0.8148}px`};
    ${media.mobile `
    width: 378px;
    height: 283.5;
    `}
    
`;

export const EventIcon = styled.img `
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;

export const CategoryImg = styled.img `
    width: 58px;
    height: 58px;
    position: absolute;
    top: -61px;
    left: 8px;
    z-index: 4;
    animation: ${props => props.editClicked && props.categoryClicked ? `${moveCategoryMobile} 800ms 1 normal forwards` : 'none'};
    &:hover {
        cursor: pointer;
    }
    ${media.mobile `
    animation: ${props => props.editClicked && props.categoryClicked ? `${moveCategory} 800ms 1 normal forwards` : 'none'};
    width: 61px;
    height: 61px;
    top: -44px;
    left: -34px;
    `}
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

export const DescriptionHeader = styled.p `
    margin: 10px 15px;
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.main};
    ${media.mobile `
    font-size: 1.5rem;
    `}
`;

export const DescriptionTextarea = styled.textarea `
    font-family: 'Titillium Web', sans-serif;
    margin: 5px 15px;
    text-align: justify;
    white-space: normal;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    min-height: 230px;
    max-height: 230px;
    min-width: ${`${maxWidth -30}px`};
    max-width: ${`${maxWidth -30}px`};
    animation: ${props => (props.editClicked && props.categoryClicked === false)  ? `${textareaMobile} 400ms 1 forwards` : 'none'};
    ${media.mobile `
    animation: ${props => (props.editClicked && props.categoryClicked === false) ? `${textarea} 400ms 1 forwards` : 'none'};
    min-width: 350px;
    max-width: 350px;
    font-size: 1.1rem;
    `}
`;

export const EventSpan = styled.span `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.1rem;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${media.mobile `
    font-size: 1.2rem;
    `}
`;

export const EventInput = styled.input `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1rem;
    margin-left: 10px;
    border: none;
    background-color: transparent;
    max-width: ${`${maxWidth -60}px`};
    ${media.mobile `
    max-width: 360px;
    font-size: 1.2rem;
    `}
`;

export const EventTitle = EventInput.extend `
    color: ${props => props.theme.colors.main};
    width: ${`${maxWidth -12}px`};
    font-size: 1.1rem;
    ${media.mobile `
    width: 350px;
    `}
`;

export const EventInput2 = EventInput.extend `
    width: 330px;
`;

export const EventDate = EventInput.extend `
    max-width: 80px;
    ${media.mobile `
    max-width: 110px;
    `}
`;

export const EventHour = EventInput.extend `
    max-width: 80px;
    ${media.mobile `
        max-width: 110px;
    `}
`;

export const EventLocation2 = EventInput.extend `
    margin-left: 37px;
    width: ${`${maxWidth - 37 }px`}
`;

export const EventButtonSpan = styled.span `
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.2rem;
`;

export const DeleteConfirmParagraph = styled.p `
    margin-bottom: 45px;
    text-align: justify;
    opacity: 0;
    animation: ${fadeIn} 1.2s 1 normal forwards;
    animation-delay: 0.4s;
`;

export const UrlFieldSpan = styled.span `
    color: ${props => props.theme.colors.main};
    margin-left: 5px;
    min-width: 175px;
    opacity: 0;
    animation: ${fadeIn} 1s 1 normal forwards;
    animation-delay: 700ms;
`;

export const UrlFieldInput = styled.input `
    font-family: 'Titillium Web', sans-serif;
    font-size: 14px;
    overflow: hidden;
    min-width: 120px;
    max-width: 120px;
    color: grey;
    border: 1px dotted ${props => props.theme.colors.main};
    margin-left: 5px;
    white-space: nowrap;
    padding: 6px 0;
    opacity: 0;
    animation: ${fadeIn} 1s 1 normal forwards;
    animation-delay: 700ms;
    ${media.tablet `
        min-width: 180px;
        max-width: 180px;
    `}
`;