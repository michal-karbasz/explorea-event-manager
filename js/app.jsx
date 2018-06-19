require('../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

import ErrorBoundary from './components/errorboundary.jsx';
import Nav from './components/nav.jsx';
import Planet from './components/planet.jsx';
import NewEvent from './components/new-event.jsx';
import Events from './components/events.jsx';
// import  Footer from './components/footer.jsx';




document.addEventListener('DOMContentLoaded', function(){
    
    let enableEdit = (e) => {
        e.target.parentElement.parentElement.parentElement.children[1,3,4].contentEditable;
    }

    document.addEventListener('click',function(e) {
        
        if(e.target && e.target.id == 'edit-btn') {
            const eventBox =  e.target.parentElement.parentElement.parentElement;
            const eventBoxTitleSection = eventBox.children[4];
            if ( e.target.lastElementChild.innerText == 'edit') {
            e.target.lastElementChild.innerText = 'confirm';
            e.target.firstElementChild.setAttribute('src','../icons/confirm.png');
            eventBoxTitleSection.children[0].setAttribute('contenteditable',true);  //change title
            eventBoxTitleSection.children[3].setAttribute('contenteditable',true);  //change time
            eventBoxTitleSection.children[6].setAttribute('contenteditable',true);  //change location
            eventBoxTitleSection.children[8].setAttribute('contenteditable',true);  //change location2
            eventBox.children[5].children[1].setAttribute('contenteditable',true);  //change organizer
            eventBox.children[1].children[0].children[1].setAttribute('contenteditable',true);  //change description
            eventBox.children[1].classList.add('slide-up');
        } else if (e.target.lastElementChild.innerText == 'confirm') {
            e.target.lastElementChild.innerText = 'edit'; 
            e.target.firstElementChild.setAttribute('src','../icons/edit.png');
            console.log(eventBox.children[4])
            let editable_elements = document.querySelectorAll("[contenteditable=true]");
            for (let i = 0; i < editable_elements.length; i++) {
                editable_elements[i].setAttribute('contenteditable',false);
                // eventBox.children[4].setAttribute('contenteditable',false)
                // eventBox.children[4].removeAttribute('contenteditable')
                }
            }

            
            // enableEdit(e);
        }
     })

     document.addEventListener('click',function(e) {
        if(e.target && e.target.id == 'delete-btn'){
            e.target.parentElement.parentElement.parentElement.children[2].classList.add('show');
        }
        if(e.target && e.target.id == 'delete-btn-positive'){
            e.target.parentElement.parentElement.parentElement.remove();
        }
        if(e.target && e.target.id == 'delete-btn-negative'){
            e.target.parentElement.parentElement.parentElement.children[2].classList.add('fade-out');
            // e.target.parentElement.classList.add('fade-out');
            setTimeout(function(){ e.target.parentElement.parentElement.parentElement.children[2].classList.remove('show');}, 1000);
        }
     })

    class App extends React.Component {

        // state = {
        //     eventList: [],
        // }

        // getEventsArray = (arr) => {
        //     this.setState({eventList: arr})
        // }

        render() {
            return (
                    <HashRouter>
                        <div>
                            <Nav />
                            <Switch>
                                <Route exact path='/' component={Planet} />
                                <Route path="/newEvent" component={NewEvent} /> 
                                 {/* render={(props) => <NewEvent {...props} eventList={this.state.eventList} getEventsArray={this.getEventsArray} /> */}
                            </Switch>
                        <Events />  
                        {/* eventList={this.state.eventList} */}
                        </div>
                    </HashRouter>
            )       
         }
    }




    ReactDOM.render(
        <ErrorBoundary>
        <App />
        </ErrorBoundary>,
        document.getElementById('app')
    );
});