import React from 'react';

import Nav from './nav.jsx';
import Planet from './planet.jsx';

export default class Background1 extends React.Component {
    render() {
        return (
            <section className='flex-container-section1'>
                <Nav/>
                <Planet/>
            </section>
        )
    }
}