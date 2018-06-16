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

// import Planet from './components/planet-menu.jsx';


document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component {


        render() {
            return (
                    <HashRouter>
                        <div>
                        <Background />
                            <Buttons />
                            <Switch>
                                <Route exact path='/' component={(props) => <Planet  {...props} />} />
                            </Switch>
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