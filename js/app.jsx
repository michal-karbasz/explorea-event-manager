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
        if(e.target && e.target.id == 'edit-btn'){
            if ( e.target.lastElementChild.innerText == 'edit') {
            e.target.lastElementChild.innerText = 'confirm';
            e.target.firstElementChild.setAttribute('url','../icons/confirm.png')
        } else if (e.target.lastElementChild.innerText == 'confirm'){
            e.target.lastElementChild.innerText = 'edit'; 
            e.target.firstElementChild.setAttribute('url','../icons/edit.png')
            }
            e.target.parentElement.parentElement.parentElement.children[4].contentEditable=('true');
            console.log(e.target.parentElement.parentElement.parentElement)
            console.log(e.target.parentElement.parentElement.parentElement.children[4])
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