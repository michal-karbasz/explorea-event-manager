import React from 'react';


export default class About extends React.Component {

   

    render() {
        return (

            <section className='about-flex-container'>
                <div className="col">
                        <p><span>A</span>bout</p>
                        <img src='../icons/telescope.png' />
                        <div className='flex-row'>
                            <p>The aliens have finaly showed themselves up and it's seems they would like to share some knowledge, their planet and even some tea time with us. <br/> The Earthers turned up to be very keen on getting to know them too, so web apps like Explorea will likely help both sides to keep in touch and organize. <br/><br/>
                            Explorea is an  (obviously) imaginary event managing app based on React, Vanilla and Sass. Flexbox provides basic responsivenes. </p>
                        </div>
                </div>
            </section>
        )
    }
}