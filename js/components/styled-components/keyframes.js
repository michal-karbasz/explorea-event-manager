import { keyframes } from "styled-components";


export const hover = keyframes `
    0% {
        opacity: 1;
        transform: translate(10px,-2px);
    }
    100% {
        opacity: 1;
        transform: translate(10px,0);
    }
`;

export const pulsate = keyframes `
    0% {
        transform: scale(0.1, 0.1);
        opacity: 0.0;
    }
    50% {
        opacity: 1.0;
    }
    100% {
        transform: scale(1.2, 1.2);
        opacity: 0.0;
    }
    `

export const point = keyframes `
0% {
    transform: translate(0, 0);
}
100% {
    transform: translate(0, 30%);
}
`

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const slideRight = keyframes`
    0% {
        width: 1px;
    };
    100% {
        width: 378px;
    }
`

export const slideRightMobile = keyframes`
    0% {
        min-width: 1px;
    };
    100% {
        min-width: 308px;
    }
`

export const textarea = keyframes`
    0% {
        min-height: 350px;
        max-height: 350px;
    }
    100% {
        min-height: 130px;
        max-height: 130px;
    }
`

export const textareaMobile = keyframes`
    0% {
        min-height: 230px;
        max-height: 230px;
    }
    100% {
        min-height: 130px;
        max-height: 130px;
    }
`

export const moveCategory = keyframes`
    0% {
        transform: translate(0, 0) scale(1);
    }
    100% {
        transform: translate(180px, 160px) scale(1.4);
    }
`

export const moveCategoryMobile = keyframes`
    0% {
        transform: translate(0, 0) scale(1);
    }
    100% {
        transform: translate(112px, 170px) scale(1.4);
    }
`

export const slideUp = keyframes`
    0% {
        max-height: 283.5px;
    }
    100% {
        max-height: 243.5px;
    }
`

export const slideUpMobile = keyframes`
    0% {
        max-height: 231px;
    }
    100% {
        max-height: 291px;
    }
`