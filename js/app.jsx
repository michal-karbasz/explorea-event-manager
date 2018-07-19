require('../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

//import components

import ErrorBoundary from './components/errorboundary.jsx';
import Nav from './components/nav.jsx';
import Planet from './components/planet.jsx';
import NewEvent from './components/new-event.jsx';
import Events from './components/events.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';




document.addEventListener('DOMContentLoaded', function(){
    
    document.addEventListener('click',function(e) {

    //     //delete event

    //     if(e.target && (e.target.id == 'delete-btn'  || e.target.parentElement.id == 'delete-btn')){
    //         e.target.parentElement.id == 'delete-btn' ?  clickedElmnt =  e.target.parentElement : clickedElmnt =  e.target;
    //         clickedElmnt.parentElement.parentElement.parentElement.children[2].classList.add('show');
    //     }
    //     if(e.target && e.target.id == 'delete-btn-positive'){
    //         e.target.parentElement.parentElement.parentElement.remove();
    //     }
    //     if(e.target && e.target.id == 'delete-btn-negative') {
            
    //         e.target.parentElement.parentElement.parentElement.children[2].classList.add('fade-out');
    //         setTimeout(function(){ e.target.parentElement.parentElement.parentElement.children[2].classList.remove('show');
    //            e.target.parentElement.parentElement.parentElement.children[2].classList.remove('fade-out');
    //         }, 1000);
    //     }

        
     })

    class App extends React.Component {
        constructor(props) {
            super(props);
    
            //define the contents of 3 example events

            this.event1 = ['Martian language classes', 'Take part in martian language course. Martian teachers speak southern dialect (the easiest one as they claim) and are currently learing our Common Tongue so don`t worry about communication gap', '24.08.2034', '15:15' , 'Węgorzewo', 'Wiejska 15', 'Martian Language School', 'http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0223c84ee54d200c-800wi', 'translation' ]

            this.event2 = ['Martian cousine', 'Learn cooking from martian best chefs. In return, you can teach them i.e. how to grow potatoes on Mars. It is said that they absolutelty love them! ', '29.04.2034', '18:55' , 'New York City', '754 9th Ave, At 51st Street', 'Mars` Kitchen', 'https://nerdist.com/wp-content/uploads/2016/01/MartianSpaceFood_FEATT.jpg', 'education' ]
    
            this.event3 = ['Astronauts Needed', 'NASA is hiring in Poland! Spodek (The Saucer) in Katowice has currently been revealed as former soviet space agency HQ and has been restored for further use. The interview will check your martian languauge skills, endurance and overall health. ', '04.07.2033', '10:00' , 'Katowice', 'Spodek', 'NASA', 'https://www.rd.com/wp-content/uploads/2017/10/00_Space_The-Surprising-Way-Your-Genes-Can-Change-in-Space-According-to-NASA_562691425-Vadim-Sadovski-760x506.jpg', 'jobs' ]

            //define a constructor for example event object

            function ExemplaryEvent (title, description, date, hour, location, location2, organizer, imgUrl, category) {
                this.title =  title;
                this.description = description;
                this.date = date;
                this.hour = hour;
                this.location = location;
                this.location2 = location2;
                this.organizer = organizer;
                this.image = imgUrl;
                this.category = category;
            }
    
            ExemplaryEvent.prototype.type = 'example';
    
            //create three event instances to be displated by default

            this.exemplaryEvent1 = new ExemplaryEvent (...this.event1);
            this.exemplaryEvent2 = new ExemplaryEvent (...this.event2);
            this.exemplaryEvent3 = new ExemplaryEvent (...this.event3);

            this.state = {
                eventList: [this.exemplaryEvent1, this.exemplaryEvent2, this.exemplaryEvent3],
                input: '',
            }
    }

        getEventList = () => {
            let eventListArr = [].slice.call(document.querySelectorAll('.event-box'));
            this.setState ({ eventList: eventListArr})
        }

        // add user-created event to global event list (state)

        addNewEvent = (event) => {
            const temporaryList = this.state.eventList.slice();
            temporaryList.push(event);
            this.setState({eventList: temporaryList})
        }

        deleteEvent = (eventToDelete) => {
            const temporaryList = this.state.eventList.slice();
            let newList = temporaryList.filter(item => item.title !== eventToDelete)
            console.log(newList)
            this.setState({eventList: newList}, () => console.log(this.state.eventList) )
        }


        handlecategoryChange = (planet) => {
            this.handleSearchChange();    
            for (let i = 0; i < this.state.eventList.length ; i++) {
                this.state.eventList[i].classList.remove('hidden');
                if(this.state.eventList[i].children[3].getAttribute('src').indexOf(planet.getAttribute('src')) == -1) {
                    this.state.eventList[i].classList.add('hidden');
                } 
            }
        }

        handleSearchChange = (userInput) => {
            this.setState({input: userInput })
            this.getEventList();
        }

        handleSearchEvent = (event) => {
            event.preventDefault();        
            for (let i = 0; i < this.state.eventList.length ; i++) {
                this.state.eventList[i].classList.remove('hidden');
                if(this.state.eventList[i].children[4].firstElementChild.value.indexOf(this.state.input) == -1) {
                    this.state.eventList[i].classList.add('hidden');
                } 
                this.setState({input:''})
            }
        }

        displayAllEvents = () => {
            this.getEventList;
            for (let i = 0; i < this.state.eventList.length ; i++) {
                this.state.eventList[i].classList.remove('hidden');
            }
        }


        render() {

            return (
                    <HashRouter>
                        <div>
                            <Nav />
                            <Switch>
                                <Route exact path='/' render={(props) => <Planet {...props} eventList={this.state.eventList} handlecategoryChange={this.handlecategoryChange} handleSearchChange={this.handleSearchChange} searchEvent={this.handleSearchEvent} displayAll={this.displayAllEvents} /> } />
                                <Route
                                    path="/newEvent"
                                    render={(props) => <NewEvent {...props}
                                    eventList={this.state.eventList}
                                    addNewEvent={this.addNewEvent}/>
                                } />
                                <Route path="/about" component={About} /> 
                            </Switch>
                            
                        <Events eventList={this.state.eventList} addNewEvent={this.addNewEvent} deleteEvent={this.deleteEvent}/>
                        <Footer />  
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