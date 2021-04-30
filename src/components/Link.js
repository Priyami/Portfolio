import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Report from './Report';


class Link extends Component {
    render() {
        return (
            <div>
               
                   <Nav className="justify-content-end">
                        <Nav.Link href='/report'> Report</Nav.Link>
                    </Nav>
                    <Switch>
                        <Route path='/report' component={Report} />
                    </Switch>
                   
                    
            </div>

        )
    }
}
export default (Link);