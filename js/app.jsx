require('../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

import { css, ThemeProvider } from 'styled-components'

// import components

import ErrorBoundary from './components/errorboundary.jsx';
import Nav from './components/nav.jsx';
import Planet from './components/planet.jsx';
import NewEvent from './components/new-event.jsx';
import Events from './components/events.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';
import theme from './components/styled-components/theme.jsx';


document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        constructor() {
            super();
    
            // define the contents of 3 example events

            this.event1 = ['Martian language classes', 'Take part in martian language course. Martian teachers speak southern dialect (the easiest one as they claim) and are currently learing our Common Tongue so don`t worry about communication gap', '24.08.2034', '15:15' , 'Węgorzewo', 'Wiejska 15', 'Martian Language School', 'http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0223c84ee54d200c-800wi', 'translation' ]

            this.event2 = ['Martian cousine', 'Learn cooking from martian best chefs. In return, you can teach them i.e. how to grow potatoes on Mars. It is said that they absolutelty love them! ', '29.04.2034', '18:55' , 'New York City', '754 9th Ave, At 51st Street', 'Mars` Kitchen', 'https://nerdist.com/wp-content/uploads/2016/01/MartianSpaceFood_FEATT.jpg', 'education' ]
    
            this.event3 = ['Astronauts Needed', 'NASA is hiring in Poland! Spodek (The Saucer) in Katowice has currently been revealed as former soviet space agency HQ and has been restored for further use. The interview will check your martian languauge skills, endurance and overall health. ', '04.07.2033', '10:00' , 'Katowice', 'Spodek', 'NASA', 'https://www.rd.com/wp-content/uploads/2017/10/00_Space_The-Surprising-Way-Your-Genes-Can-Change-in-Space-According-to-NASA_562691425-Vadim-Sadovski-760x506.jpg', 'jobs' ]

            // define a constructor for example event object

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
                this.type = 'example'
            }
    
            // create three event instances to be displated by default

            this.exemplaryEvent1 = new ExemplaryEvent (...this.event1);
            this.exemplaryEvent2 = new ExemplaryEvent (...this.event2);
            this.exemplaryEvent3 = new ExemplaryEvent (...this.event3);

            this.state = {
                eventList: [this.exemplaryEvent1, this.exemplaryEvent2, this.exemplaryEvent3],
                storedList: [],
                planetClicked: false,
                category: '',
                searchInput: '',
            }
        }


        loadDB = () => {
            
            let request = window.indexedDB.open('EventsDatabase', 1), db, tx, store;
            
            request.onupgradeneeded = e => { 
                db = e.target.result;
                store = db.createObjectStore('EventsStore', {keyPath: 'title'});
            }
            request.onerror = e => console.log('There was a database error:' + e.target.errorCode);

            request.onsuccess = e => {
                db = e.target.result;
                tx = db.transaction('EventsStore', 'readwrite');               
                store = tx.objectStore('EventsStore');

            // generic error handler - take care of error handling in on db level (reached after bubbling)
            
            db.onerror = e => console.log('There was a database error:' + e.target.errorCode);

            // create a copy o state.eventList, put each item into store then transfer stored data into state.storedList

            const dbEventList = this.state.eventList.slice();
            dbEventList.map((item) => store.put(item ));
            const storedEventList = store.getAll();
            storedEventList.onsuccess = () => this.setState({storedList: storedEventList.result}) ;
            
            tx.oncomplete = () => db.close();
            }
        }

        // indexedDB - open transaction to remove item, function called in deleteEvent, with event title passed as parameter (IndexedDB store keyPath is also based on title;

        removeFromDB = (recordToDelete) => {
        
            let request = window.indexedDB.open('EventsDatabase', 1), db, tx, store;
            
            request.onerror = e => console.log('There was a database error:' + e.target.errorCode);

            request.onsuccess = e => {
                db = e.target.result;
                tx = db.transaction('EventsStore', 'readwrite');               
                store = tx.objectStore('EventsStore');

            // generic error handler - take care of error handling in on db level (reached after bubbling)
            
            db.onerror = e => console.log('There was a database error:' + e.target.errorCode);

            // delete record and refresh state

            store.delete(recordToDelete)
            const storedEventList = store.getAll();
            storedEventList.onsuccess = () => this.setState({storedList: storedEventList.result},() => console.log(this.state.storedList)) ;
            
            tx.oncomplete = () => db.close();
            }
        }

        // add user-created event to global event list (state)

        addNewEvent = (event) => {
            const temporaryList = this.state.eventList.slice();
            temporaryList.push(event);
            this.setState({eventList: temporaryList}, () => this.loadDB());
        }

        // delete user-created event (remove item from state's eventList array)

        deleteEvent = (eventToDelete) => {
            const newList = this.state.eventList.filter(item => item.title !== eventToDelete);
            this.setState({eventList: newList}, () => this.removeFromDB(eventToDelete));
        }

        // trigger open search box and display category-buttons

        openSearchBox = () => {
            this.setState ({planetClicked: !this.state.planetClicked});
            this.resetState();
        }

        // on each category click send this category name to this.state.category, events are then rendered based on that category

        filterByCategory = (category) => {
            if (this.state.planetClicked) {
            let temporaryCategory = this.state.category;
            temporaryCategory = category;
            this.setState ({ category: temporaryCategory })
            } 
        }

        // when user closes the searchbox remove any category from state to prepare it for next filtering 

        resetState = () => {
            if (this.state.category !== '' && this.state.planetClicked === false) {
                this.setState ({ category: '' })
            } 
            if (this.state.searchInput !== '' && this.state.planetClicked === false) {
                this.setState ({ searchInput: '' })
            } 
        }

        // handle user input in search-box

        handleSearchInput = (userInput) => {
            this.setState({searchInput: userInput });
        }

        // load events from indexedDB

        componentWillMount() {
            this.loadDB();
        }

        render() {

            // check if user's browser supports IndexedDB

            if (!('indexedDB' in window)) {
                alert(
                    "Your browser doesn't support IndexedDB! Your events will only be visible until'l you close your browser window" );
                    return;
            }
    
            // event rendering is based on eventList variable - if one of the categories has been clicked, overwrite eventList to render only filtered items
            
            let eventList = this.state.storedList; 
            if (this.state.category !== '' && this.state.planetClicked) {
                eventList = eventList.filter(item => item.category === this.state.category);
            }

            // filter events based on user input - search for title OR location

            if (this.state.searchInput !== '' && this.state.planetClicked) {
                eventList = eventList.filter(item => item.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) != -1 || item.location.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) != -1)
            }

            return (
                <ThemeProvider theme={theme} >
                    <HashRouter>
                        <div>
                            <Nav />
                            <Switch>
                                <Route
                                    exact path='/' render={(props) => <Planet {...props}
                                    eventList={this.state.eventList}
                                    planetClicked={this.state.planetClicked}
                                    handleSearchInput={this.handleSearchInput}
                                    openSearchBox={this.openSearchBox}
                                    filterByCategory={this.filterByCategory}
                                    />
                                } />
                                <Route
                                    path="/newEvent"
                                    render={(props) => <NewEvent {...props}
                                    eventList={this.state.eventList}
                                    addNewEvent={this.addNewEvent}/>
                                } />
                                <Route path="/about" render={(props) => <About {...props}  /> } /> 
                            </Switch>
                            
                            <Events eventList={eventList} addNewEvent={this.addNewEvent} deleteEvent={this.deleteEvent}/>
                            <Footer />  
                        </div>
                    </HashRouter>
                </ThemeProvider>
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