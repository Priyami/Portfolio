import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';
import Menubar from '../components/Menubar';
import Portfolioimg from '../images/Portfolio.png';
import Weatherimg from '../images/Weather.png';
import WorldTravelimg from '../images/WorldTravelGallery.png';
import Frontendstudygroupimg from '../images/Frontendstudygroup.png';


import './Projects.css';
const Projects = () => {

    return (
        <div>
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Menubar></Menubar>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                       
                        <Card className = "project-card">
                            <Card.Body>
                                <Card.Link href=" https://portfolio-priyarsurendranath.herokuapp.com/"><Card.Img variant="top" src={Portfolioimg} /></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Portfolio</small>
                            </Card.Footer>
                        </Card>
                        <Card className = "project-card">
                            <Card.Body>
                                <Card.Link href=" https://weather-framework.herokuapp.com/"><Card.Img variant="top" src={Weatherimg} /></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Weather</small>
                            </Card.Footer>
                        </Card>
                        <Card className = "project-card">
                            <Card.Body>
                                <Card.Link href="https://serene-wildwood-3210.herokuapp.com/"><Card.Img variant="top" src={WorldTravelimg}/></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">World Travel Gallery</small>
                            </Card.Footer>
                        </Card>
                        
                        <Card className = "project-card">
                            <Card.Body>
                                <Card.Link href="https://frontendstudygroup.github.io/"><Card.Img variant="top" src={Frontendstudygroupimg}/></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Frontend-Studygroup</small>
                            </Card.Footer>
                        </Card>
                      
                        </Row>

                   

                </Container>
            </React.Fragment>
        </div>
    )
}
export default Projects;