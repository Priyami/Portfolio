import React, { Component } from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl, Button} from 'react-bootstrap';

export default class Menubar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1A6W_kIqgbzozeMr541f40zJhCjQIc-zl5gMdB7f5Acw/edit?usp=sharing">Resume</Nav.Link>
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