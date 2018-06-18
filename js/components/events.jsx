import React from 'react';
import Event from './event.jsx';

export default class Events extends React.Component {

    state = {
        visible: 'hidden',
    }


    revealPlanets = () => {
        this.setState({visible: this.state.visible === 'hidden' ? 'visible' : 'hidden'})
    }

    

    render() {
    


//     const editBtn = document.querySelectorAll(".event-description #edit-btn");
//     console.log(editBtn)
// for (let i = 0; i < editBtn.length; i++) {
//     editBtn[i].addEventListener("click", handleEventEdit);
// }

        // console.log(this.props.eventList);
        // let newLi = this.props.eventList.map ((item) => {item});
        return (

            <section className='event-flex-container' id='event-section'>
                {/* <Event/>
                <Event/>
                <Event/> */}
                {/* {this.props.eventList.map ((item) => <div>{item}</div>)} */}
            </section>
        )
    }
    componentDidMount() {

    }


}