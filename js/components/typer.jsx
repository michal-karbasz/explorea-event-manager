import React from 'react';

// import styled components

import {H2} from './styled-components/nav-style.jsx';

export default class Typer extends React.Component {

    state = {
        sec: 1, //set counter
        text: this.props.text.substr(0, 1),
    }

    render() {
        return <H2>{this.state.text}</H2>
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                text: this.props.text.substr(0, (this.state.sec + 1) + 1),
                sec: this.state.sec + 1}, () => {
                if (this.state.text == this.props.text) {
                    clearInterval(this.id);
                }
            })

        }, 150)
    }
    componentWillUnmount() {
        clearInterval(this.id);
    }
}