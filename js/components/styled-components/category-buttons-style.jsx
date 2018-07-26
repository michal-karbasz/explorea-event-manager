import styled from 'styled-components';

// import media function to allow RWD settings + import animations

import {media} from './media';
import {fadeIn} from './keyframes.js';

export const CategoryButton = styled.div `
    width: 75px;
    height: 75px;
    background-color: white;
    opacity: 0;
    border-radius: 50%;
    border: 3px double ${props => props.theme.colors.secondary};
    margin: 15px 20px;
    display: ${props => props.categoryClicked ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    text-align: center;
    position: absolute;
    top: ${props => props.topMobile};
    left: ${props => props.leftMobile};
    animation: ${props => props.categoryClicked ? `${fadeIn} 1.2s normal forwards` : 'none'};
    transition: all 700ms;
    &:hover {
        border: 3px double ${props => props.theme.colors.complementary};
        cursor: pointer;
    }
    ${media.mobile `
        width: 84px;
        height: 84px;
        top: ${props => props.top};
        left: ${props => props.left};
    `}
`;

export const CategoryImg = styled.img `
    margin-top: 5px;
    width: 30px;
    height: 30px;
    ${media.mobile `
        width: 35px;
        height: 35px;
    `}
`;

export const CategoryParagraph = styled.p `
    margin-top: 5px;
    color: rgb(63, 63, 63);
    font-size: 0.7rem;
    ${media.mobile `
        font-size: 0.9rem;
    `}
`;
