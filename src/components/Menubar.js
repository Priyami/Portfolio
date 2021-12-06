import React, { Component } from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl, Button} from 'react-bootstrap';

export default class Menubar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Project">Project</Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1hrOsFgyMTs2EywkoTIqX-C2-LFEdGbH9/edit?usp=sharing&ouid=107742883152419749567&rtpof=true&sd=true">Resume</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>

        )
    }
}