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
        
     })

    class App extends React.Component {
        constructor() {
            super();
    
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
                filteredEventList: [],
                searchInput: '',
                planetClicked: false,
            }
    }

        // add user-created event to global event list (state)

        addNewEvent = (event) => {
            const temporaryList = this.state.eventList.slice();
            temporaryList.push(event);
            this.setState({eventList: temporaryList})
        }

        // delete user-created event (remove item from state's eventList array)

        deleteEvent = (eventToDelete) => {
            const temporaryList = this.state.eventList.slice();
            let newList = temporaryList.filter(item => item.title !== eventToDelete)
            this.setState({eventList: newList})
        }

        // handle user input in search-box

        handleSearchChange = (userInput) => {
            this.setState({input: userInput })
        }


        // trigger open search box and display category-buttons

        openSearchBox = () => {
            this.setState ({ planetClicked: !this.state.planetClicked}, () => console.log(this.state.planetClicked))
        }


        render() {

            return (
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
                                    searchEvent={this.handleSearchEvent}
                                    displayAll={this.displayAllEvents}/>
                                } />
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