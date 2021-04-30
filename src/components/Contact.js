import React, { useState, useEffect } from 'react';
import { Row, Col, Navbar, NavbarBrand, Container } from 'reactstrap';
import { ReactstrapInput } from 'reactstrap-formik';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
//const {sendEmail}  = require('/Users/karvangum/projects/Portfolio/src/mail');

import './Contact.css';

const Contact = props => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [updatename, setUpdatename] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();

        if (e.target.id === "email") {
            setEmail(e.target.value);
            //console.log("From handleclick",setEmail);
            //`Thanks!`
        }
        else if (e.target.id === "comment") {
            setComment(e.target.value);
        }
        else if (e.target.id === "firstname") {
            setFirstname(e.target.value);
        }
        else {
            setLastname(e.target.value);
        }
    }
    const handleSubmit = (values, actions) => {


        axios.post('http://localhost:4000/users', values)
            .then(res => {
                console.log("res", res.data);
                
                setUpdatename(updatename.concat(res.data.firstname).concat(res.data.lastname));
                if (values.email && values.comment && values.firstname && values.lastname) {
                    ////sendEmail(res.data.email, res.data.comment, "hello")
                    setValid(true);
                }
                setSubmitted(true);
                actions.resetForm();

            })
            .catch(err => {
                console.log("Error in Request", err);

            });

    }


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
                    firstname: "",
                    lastname: "",


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
                onSubmit={handleSubmit}

                render={({ isSubmitting, resetForm }) => (
                    <Form>
                        <Container style={{ paddingTop: "5px" }}>
                            <Row>
                                <Col xs="12">

                                </Col>
                                <Col xs="12">
                                    <Field
                                        type="text"
                                        label="Firstname"
                                        name="firstname"
                                        id="firstname"
                                        value={firstname}
                                        component={ReactstrapInput}
                                        onChange={handleClick}

                                    />
                                </Col>
                                <Col xs="12">
                                    <Field
                                        type="text"
                                        label="Lastname"
                                        name="lastname"
                                        id="lastname"
                                        value={lastname}
                                        component={ReactstrapInput}
                                        onChange={handleClick}

                                    />
                                </Col>
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
                                    <button type="submit" id="submit" disabled={isSubmitting}  >Submit</button>

                                </Col>
                                <Col xs="12">
                                    {submitted && valid && <span className='success-message'>Thank you {updatename.toString()} for the comment!. Will get back to you.</span>}
                                </Col>
                                

                            </Row>

                        </Container>

                    </Form>
                )}
           />
        </div>
                )
                }
                export default Contact;
