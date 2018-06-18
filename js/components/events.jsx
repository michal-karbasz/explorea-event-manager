import React from 'react';
import Event from './event.jsx';

export default class Events extends React.Component {

    state = {
        visible: 'hidden',
    }


    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }

    addButtons = () => {
        const eventBox = document.getElementById('description-container')
        let editbtn = document.createElement('button');
        let editimg = document.createElement('img');
        let editspan = document.createElement('span');
        editbtn.classList.add('event-btn');
        editimg.setAttribute('src','../icons/edit.png')
        editspan.innerText = 'edit';
        editbtn.appendChild(editimg);
        editbtn.appendChild(editspan);
        eventBox.appendChild(editbtn);

        let deletebtn = document.createElement('button');
        let deleteimg = document.createElement('img');
        let deletespan = document.createElement('span');
        deletebtn.classList.add('event-btn');
        deleteimg.setAttribute('src','../icons/delete.png')
        deletespan.innerText = 'delete';
        deletebtn.appendChild(deleteimg);
        deletebtn.appendChild(deletespan);
        eventBox.appendChild(deletebtn);

    }


    render() {
        // console.log(this.props.eventList);
        // let newLi = this.props.eventList.map ((item) => {item});
        return (

            <section className='event-flex-container' id='event-section'>
                <Event/>
                <Event/>
                <Event/>
                {/* {this.props.eventList.map ((item) => <div>{item}</div>)} */}
            </section>
        )
    }


}