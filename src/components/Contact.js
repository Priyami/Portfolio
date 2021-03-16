import React, { useState, useEffect } from 'react';
import { Row, Col, Navbar, NavbarBrand, Container } from 'reactstrap';
import { ReactstrapInput } from 'reactstrap-formik';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import './Contact.css';


const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "email") {
        setEmail(e.target.value)
        console.log(setEmail);
        `Thanks!`
    }
    else {
        setComment(e.target.value)
    }
}
const handleSubmit = (e) => {
    e.preventDefault();
}


const Contact = props => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img
                        src="images/Contact-icon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    Contact Me</NavbarBrand>
            </Navbar>



            <Formik
                initialValues={{
                    email: "",
                    comment: "",
                }}
                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    if (!values.comment) {
                        errors.comment = "Required";
                    }
                    return errors;
                }}
                onSubmit={values => {
                    console.log(values);
                    axios.post('http://localhost:3000/users', values)
                        .then(res => {
                            console.log("res", res.data);
                        })
                          .catch(err => {
                            console.log("error in request", err);
                         });
                    //sendEmail(email, comment, "hello");

                }}

                render={({ submitForm, isSubmitting, values }) => (
                    <Form>
                        <Container style={{ paddingTop: "5px" }}>
                            <Row>
                                <Col xs="12">
                                    <Field
                                        type="email"
                                        label="Email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        component={ReactstrapInput}
                                        onChange={handleClick}

                                    />
                                </Col>
                                <Col xs="12">
                                    <Field
                                        type="textarea"
                                        label="Comment"
                                        name="comment"
                                        id="comment"
                                        value={comment}
                                        component={ReactstrapInput}
                                        onChange={handleClick}
                                    />
                                </Col>

                                <Col xs="12">
                                    <button type="submit">Submit</button>
                                </Col>


                            </Row>

                        </Container>

                    </Form>
                )}
            />
        </div>
    );
}
export default Contact;
