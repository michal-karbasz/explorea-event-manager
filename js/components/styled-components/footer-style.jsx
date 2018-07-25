import styled from 'styled-components';

export const AppFooter = styled.footer `
    position: relative;
    background-color: ${props => props.theme.colors.complementary};
    opacity: .7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 11;
`;

export const FooterCol = styled.div `
    display: flex;
    align-items: center;
    margin-left: 30px;
`;

export const FooterImg = styled.img `
    width: 32px;
    height: 32px;
    margin: 6px;
    transform: rotateY(0deg);
    transition: all 1s;
    &:hover {
        transform: rotateY(180deg);
        transition: all 800ms;
    }
`;

export const FooterSpan = styled.span `
    color: ${props => props.theme.colors.main};
`;


