
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { default as Portfo } from './Portfolio';
import Report from './components/Report';
import Project from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';

//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component={Portfo} />
                <Route path="/report" exact component={Report} />
                <Route path="/Project" exact component={Project} />
                <Route path="/Certifications" exact component={Certifications} />
                <Route path="/Resume" exact component={Resume} />

            </Switch>
       
    </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();