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