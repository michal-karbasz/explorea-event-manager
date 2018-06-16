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


import Background1 from './components/background1.jsx';
import Planet from './components/planet.jsx';
import Events from './components/events.jsx';
import  Footer from './components/footer.jsx';


document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component {


        render() {
            return (
                    <HashRouter>
                        <div>
                        {/* <Background /> */}
                            <Switch>
                                <Route exact path='/' component={Background1} />
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