
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {default as Portfo} from './Portfolio';
import {default as Report} from './components/Report'
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
    <Switch>
         <Route exact path="/" component={Portfo} />
         <Route path="/report" component={Report} />
    </Switch>
    </Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();