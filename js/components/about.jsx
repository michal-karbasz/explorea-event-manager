import React from 'react';

// import styled components

import {Section, FlexCol, Paragraph, Span, Image, FlexRow, RowParagraph, ColorSpan} from './styled-components/about-style.jsx';

const About = () => {

        return (

            <Section>
                <FlexCol>
                    <FlexRow>
                    <Paragraph><Span>A</Span>bout</Paragraph>
                    <Image src='../icons/telescope.png' />
                    </FlexRow>
                    <FlexRow>
                        <RowParagraph>The aliens have finaly showed themselves up and it seems they would like to share some knowledge, their planet and even some tea time with us. <br/> The Earthers turned up to be very keen on getting to know them too, so web apps like <ColorSpan> Explorea </ColorSpan> will likely help both sides to keep in touch and organize. <br/><br/>
                        <ColorSpan> Explorea </ColorSpan> is (so far) an imaginary event managing app based on React, ES6 syntax and Styled Components. Flexbox provides basic responsivenes. </RowParagraph>
                    </FlexRow>
                </FlexCol>
            </Section>
        )}
    
        export default About;