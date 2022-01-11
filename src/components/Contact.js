import React, { useState } from 'react';
import { Row, Col, Navbar, NavbarBrand, Container, Spinner } from 'reactstrap';
import { ReactstrapInput } from 'reactstrap-formik';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import './Contact.css';

const Contact = props => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [updatename, setUpdatename] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submiting, setSubmiting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [error, setError] = useState(null);



    const handleClick = (e) => {

        e.preventDefault();

        if (e.target.id === "email") {
            setEmail(e.target.value);
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
        setIsLoading(true);
        axios.post('https://portfolio-nodeserver.herokuapp.com/users/send', values)
            .then(res => {

                setUpdatename(updatename.concat(res.data.firstname).concat('').concat(res.data.lastname));
                if (values.email && values.comment && values.firstname && values.lastname) {
                    setValid(true);

                }
                setSubmitted(true);
                actions.resetForm();
                setIsLoading(false);

                setTimeout(() => {
                    setSubmitted(false);
                    setUpdatename('');
                    setIsLoading(false);
                }, 5000);

            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    setError("Something went wrong in Response to the Server!!!")
                } else if (err.request) {
                    // client never received a response, or request never left
                    setError("Something went wrong in Client!!!");
                } else {
                    // anything else
                    setError(err.message);
                }

            });
        setSubmitted(false);
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
                    else if (!values.comment) {
                        errors.comment = "Required";
                    }

                    (values.email.length > 0 && values.comment.length > 0 && values.firstname.length > 0 && values.lastname.length > 0)

                        ? setSubmiting(true) : setSubmiting(false);



                    return errors;
                }}

                onSubmit={handleSubmit}
                render={() => (
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

                                    <button type="submit" id="submit" disabled={!submiting} >Submit</button>

                                </Col>
                                <Col xs="12">
                                    {isLoading && !error && <Spinner size="sm">
                                        Loading...
                                    </Spinner>}
                                    {submitted && valid && !error && !isLoading
                                        ? <span className='success-message'>Thank you! {updatename.toString()} for the comment. Will get back to you soon.</span>
                                        : <span className='error-message'>{error}</span>
                                    }

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
