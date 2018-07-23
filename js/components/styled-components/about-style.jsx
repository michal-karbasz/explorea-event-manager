import styled from 'styled-components';

import {media} from './media';

export const Section = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding-top: 150px;
    background-image: url("../images/background1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${media.tablet `padding-top: initial;`}
`;

export const FlexCol = styled.div `
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border: 4px double ${props => props.theme.colors.main};
    background-color: ${props => props.theme.colors.secondary};
    opacity: 0.9;
    ${media.tablet `flex-direction: initial;`}
`;

export const Paragraph = styled.p `
    font-size: 2.4rem;
    margin-bottom: -20px;
    padding: 15px 25px;
    letter-spacing: 10px;
    max-width: 200px;
`;

export const Span = styled.span `
    color: ${props => props.theme.colors.main};
`;

export const Image = styled.img `
    width: 48px;
    height: 48px;
    margin-right: 20px;
    ${media.mobile `width: 56px; height: 56px;`};
    ${media.tablet `width: 64px; height: 64px;`};
`;

 export const FlexRow = styled.div `
    max-width: 600px;
    display: flex;
    text-align: justify;
    background-color: white;
    border-right: 1px solid ${props => props.theme.colors.secondary};
`;

export const RowParagraph = styled.div `
    padding: 25px 35px;
`;