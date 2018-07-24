
import {css} from 'styled-components';

export const sizes = {
    xl: 1201,
    desktop: 1025,
    tablet: 768,
    mobile: 420
  }

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
        // use em in breakpoints to work properly cross-browser and support users
        const emSize = sizes[label] / 16
        accumulator[label] = (...args) => css `
            @media (min-width: ${emSize}em) {
                ${css(...args)}
            }`

        return accumulator
    }, {})