import React, { Component } from 'react';
import { Form, Row, Col, Button, Navbar } from 'react-bootstrap';
import regeneratorRuntime from 'regenerator-runtime';
import { Formik} from 'formik';
import './Contact.css';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <br />
                <div>
                    <Navbar variant="light" className="nav-bar">
                        <Navbar.Brand className="nav-bar-text" href="#home">
                            <img
                                alt=""
                                src="./assets/Contact-icon.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}Contact Me

                            </Navbar.Brand>
                    </Navbar>
                </div>
                <br />
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control  name ="email" type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalComment">
                            <Form.Label column sm={2}>
                                Comment
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" type="text" placeholder="Comment Here" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Formik>
            </div>
        )
    }
}

