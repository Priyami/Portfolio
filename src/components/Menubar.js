import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl, Button} from 'react-bootstrap';
import './Menubar.css';
export default class Menubar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Project">Projects</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1lCfB5fsrbcSoMDWWYguM7DtV1XPMNl9w/view?usp=sharing">Resume</Nav.Link>
                    </Nav>             
                </Navbar>
            </div>

        )
    }
}