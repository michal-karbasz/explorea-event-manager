require('../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import Nav from './components/nav.jsx';
import Planet from './components/planet.jsx';
import Events from './components/events.jsx';
import  Footer from './components/footer.jsx';
import NewEvent from './components/new-event.jsx';



document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component {


        render() {
            return (
                    <HashRouter>
                        <div>
                                <Nav/>
                            <Switch>
                                <Route exact path='/' component={Planet} />
                                <Route path='/newEvent' component={NewEvent} />
                            </Switch>
                        <Events />
                        </div>
                    </HashRouter>
            )       
         }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );


});