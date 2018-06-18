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
import Events from './components/events.jsx';
// import  Footer from './components/footer.jsx';
import NewEvent from './components/new-event.jsx';



document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component {

        state = {
            eventList: [],
        }

        getEventsArray = (arr) => {
            this.setState({eventList: arr})
        }

        render() {
            return (
                    <HashRouter>
                        <div>
                            <Nav />
                            <Switch>
                                <Route exact path='/' component={Planet} />
                                {/* <Route path='/newEvent' component={NewEvent}  /> */}
                                <Route path="/newEvent" render={(props) => <NewEvent {...props} eventList={this.state.eventList} getEventsArray={this.getEventsArray} />} />
                            </Switch>
                        <Events eventList={this.state.eventList} />
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