import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (

            <header className='flex-container'>

                <div className="header-col">
                    <img src=''/>
                    <span>explorea</span>
                </div>

                <div className="header-col">
                    <img src=''/>
                    <span>new</span>
                </div>

                <div className="header-col">
                    <span>browse</span>
                    <span>about</span>
                    <span>find</span>
                </div>

            </header>
        )
    }
}