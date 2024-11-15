import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';
import Menubar from '../components/Menubar';
import ResumePage1 from '../images/resume/PriyaRSurendranath_Resume-1.jpg';
import ResumePage2 from '../images/resume/PriyaRSurendranath_Resume-2.jpg';
import ResumePage3 from '../images/resume/PriyaRSurendranath_Resume-3.jpg';


import "./Resume.css";
const Resume = () => {

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
                      
                            <Card className='resume-card'>
                                <Card.Header></Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={ResumePage1} />
                                </Card.Body>
                                <Card.Footer></Card.Footer>
                            </Card>
                    </Row>
                       
                    <Row>
                            <Card className='resume-card'>
                                <Card.Header></Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={ResumePage2} />
                                </Card.Body>
                                <Card.Footer></Card.Footer>
                            </Card>
                        
                    </Row>

                    <Row>
                            <Card className='resume-card'>
                                <Card.Header></Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={ResumePage3} />
                                </Card.Body>
                                <Card.Footer></Card.Footer>
                            </Card>
                        
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default Resume;