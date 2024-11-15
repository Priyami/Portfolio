import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';
import Menubar from '../components/Menubar';
import StartupEngCertificate from '../images/certi/Startup_Engineering.png';
import ReactCertificate from '../images/certi/React Course Complete.png';
import AICertificate from '../images/certi/AI-Python.png';


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
                            <Card className='certi-card'>
                                <Card.Body>
                                  <Card.Img variant="top" src={AICertificate} />
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">AI-Python - Udemy Course </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='certi-card'>
                                <Card.Body>
                                    <Card.Img variant="top" src={ReactCertificate} />

                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">React Complete Guide - Udemy Course</small>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col>
                            <Card className='certi-card'>
                                <Card.Body>
                                  <Card.Img variant="top" src={StartupEngCertificate} />
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