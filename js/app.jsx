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
    
    document.addEventListener('click',function(e) {
        //edit event fieldds
        if(e.target && e.target.id == 'edit-btn') {
            const eventBox =  e.target.parentElement.parentElement.parentElement;
            const eventBoxTitleSection = eventBox.children[4];
            const eventImg = eventBox.firstElementChild;
            if ( e.target.lastElementChild.innerText == 'edit') {
            e.target.lastElementChild.innerText = 'confirm';
            e.target.firstElementChild.setAttribute('src','../icons/confirm.png');
            //add maxLength attribute;
            eventBoxTitleSection.children[0].setAttribute('maxlength','32');  
            eventBoxTitleSection.children[0].setAttribute('minlength','3');  
            eventBoxTitleSection.children[3].setAttribute('maxLength','32');  
            eventBoxTitleSection.children[5].setAttribute('maxLength','32'); 
            eventBoxTitleSection.children[8].setAttribute('maxLength','32'); 
            eventBoxTitleSection.children[10].setAttribute('maxLength','32');
            eventBox.children[5].children[1].setAttribute('maxLength','32');   
            eventBox.children[1].children[0].children[1].setAttribute('maxLength','325'); 
            //make content editable
            eventBoxTitleSection.children[0].removeAttribute('disabled');  //change title
            eventBoxTitleSection.children[3].removeAttribute('disabled');  //change time
            eventBoxTitleSection.children[5].removeAttribute('disabled');  //change hour
            eventBoxTitleSection.children[8].removeAttribute('disabled');  //change location
            eventBoxTitleSection.children[10].removeAttribute('disabled');  //change location2
            eventBox.children[5].children[1].removeAttribute('disabled');  //change organizer
            eventBox.children[1].children[0].children[1].removeAttribute('disabled');  //change description
            eventBox.children[1].classList.add('slide-up');
            eventBox.children[1].children[0].children[1].classList.add('textarea-short');
            let urlChangeField = document.createElement('div');
            let urlSpan = document.createElement('span');
            urlSpan.innerText = 'Paste new image url here: '
            let urlInput = document.createElement('span');
            urlChangeField.classList.add('urlField');
            urlChangeField.appendChild(urlSpan);
            urlChangeField.appendChild(urlInput);
            urlChangeField.children[1].setAttribute('contenteditable',true); //change image
            eventBox.appendChild(urlChangeField);
                if ( e.target && e.target.id == 'category-img') {
                    const categoryImg = eventBox.children[3];
                    console.log('ok')
                }
            //when edit is clicked

        } else if (e.target.lastElementChild.innerText == 'confirm') {
            const newUrl = eventBox.lastElementChild.children[1].innerText;
            if (newUrl != '') {
                eventImg.setAttribute('src',newUrl);
            }
            eventBox.lastElementChild.remove();
            eventBox.children[1].classList.remove('slide-up');
            eventBox.children[1].children[0].children[1].classList.remove('textarea-short');
            e.target.lastElementChild.innerText = 'edit'; 
            e.target.firstElementChild.setAttribute('src','../icons/edit.png');
            eventBoxTitleSection.children[0].setAttribute('disabled','');  //change title
            eventBoxTitleSection.children[3].setAttribute('disabled','');  //change time
            eventBoxTitleSection.children[5].setAttribute('disabled','');  //change hour
            eventBoxTitleSection.children[8].setAttribute('disabled','');  //change location
            eventBoxTitleSection.children[10].setAttribute('disabled','');  //change location2
            eventBox.children[5].children[1].setAttribute('disabled','');  //change organizer
            eventBox.children[1].children[0].children[1].setAttribute('disabled','');  //change description
            // let editable_elements = document.querySelectorAll("[contenteditable=true]");
            // for (let i = 0; i < editable_elements.length; i++) {
            //     editable_elements[i].setAttribute('contenteditable',false);
                // }
            }
        }
     })

     document.addEventListener('click',function(e) {
         //delete event
        if(e.target && e.target.id == 'delete-btn'){
            e.target.parentElement.parentElement.parentElement.children[2].classList.add('show');
        }
        if(e.target && e.target.id == 'delete-btn-positive'){
            e.target.parentElement.parentElement.parentElement.remove();
        }
        if(e.target && e.target.id == 'delete-btn-negative'){
            e.target.parentElement.parentElement.parentElement.children[2].classList.add('fade-out');
            setTimeout(function(){ e.target.parentElement.parentElement.parentElement.children[2].classList.remove('show');
                e.target.parentElement.parentElement.parentElement.children[2].classList.remove('fade-out');
            }, 1000);
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