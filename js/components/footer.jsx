import React from 'react';

import { AppFooter, FooterCol, FooterImg, FooterSpan } from './styled-components/footer-style.jsx';

const Footer = () => {

    return (

        <AppFooter>
            <FooterCol>
                    <FooterImg src='../icons/robot.png' />
                    <p>&copy; 2018<FooterSpan> explorea </FooterSpan> </p>
            </FooterCol>
        </AppFooter>
    )
}

export default Footer;