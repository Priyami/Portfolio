import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';
import Menubar from '../components/Menubar';
import StartupEngCertificate from '../images/certi/Startup_Engineering.png';
import ReactCertificate from '../images/certi/React Course Complete.png';

import "./Certifications.css";
const Certifications = () => {

    return (
        <div>
            <React.Fragment>
                <Container>
                    <Row >
                        <Col>
                            <Menubar></Menubar>
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Link href="https://drive.google.com/file/d/1tHxrhwbIqV6LB2tgos0VmnxdudPm0xS0/view?usp=sharing"><Card.Img variant="top" src={ReactCertificate} /></Card.Link>

                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">React Complete Guide - Udemy Course</small>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Link href="https://drive.google.com/file/d/1b7fw7hGxRI1GIX-T3RXGjBNiB63YgGxO/view?usp=sharing"><Card.Img variant="top" src={StartupEngCertificate} /></Card.Link>

                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Startup-Engineering - CourseEra </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default Certifications;