import styled from 'styled-components';

// import media function to allow RWD settings

import {media} from './media';


export const CategoryButton = styled.div `
    background-color: white;
    width: 84px;
    height: 84px;
    opacity: 0;
    border-radius: 50%;
    border: 3px double ${props => props.theme.colors.secondary};
    margin: 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    flex-wrap: wrap;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    /* animation: fade-in-category 1.2s normal forwards; */
    transition: all 700ms;
    &:hover {
        border: 3px double ${props => props.theme.colors.main};
        cursor: pointer;
    }
`;

export const CategoryImg = styled.img `
    margin-top: 5px;
    width: 35px;
    height: 35px;
`;

export const CategoryParagraph = styled.p `
    margin-top: 5px;
    width: 35px;
    height: 35px;
`;
