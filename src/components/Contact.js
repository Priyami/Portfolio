import React from 'react';
import { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand, Container } from 'reactstrap';
import { ReactstrapInput } from 'reactstrap-formik';
import { Formik, Form, Field } from 'formik';

import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
         <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img
                            src="/assets/Contact-icon.png"
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
                            // Make Email API Calls here
                            console.log(values);

                            setTimeout(() => {
                                setSubmitting(false);
                                alert(
                                    `Submitted Successfully ->  ${JSON.stringify(values, null, 2)}`
                                );
                            }, 2000);
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
                                                component={ReactstrapInput}
                                            />
                                        </Col>
                                        <Col xs="12">
                                            <Field
                                                type="textarea"
                                                label="Comment"
                                                name="comment"
                                                id="comment"
                                                component={ReactstrapInput}
                                            />
                                        </Col>

                                        <Col xs="12">
                                            <button type="submit">Submit</button>
                                        </Col>
                                    </Row>
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                </Container>
                            </Form>
                        )}
                    />
            </div>
        )
    }
}