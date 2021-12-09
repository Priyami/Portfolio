import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';
import Menubar from '../components/Menubar';
import Portfolioimg from '../images/Portfolio.png';
import Weatherimg from '../images/weather-react-app.gif';
import WorldTravelimg from '../images/WorldTravelGallery.png';
import Frontendstudygroupimg from '../images/frontendstudygroup.gif';


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

                        <Card className="project-card">
                            <Card.Body>
                                <Card.Link href=" https://portfolio-priyarsurendranath.herokuapp.com/"><Card.Img variant="top" src={Portfolioimg} /></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Portfolio</small>
                            </Card.Footer>
                        </Card>
                        <Card className="project-detail" >
                            <ListGroup variant="flush">
                                <ListGroup.Item>Components created - Menubar - Slider- Project - Contact - Report - Footer</ListGroup.Item>
                                <ListGroup.Item>Webpack - ReactJS(Front-end) - NodeJS(Back-end) - Firebase(Database) </ListGroup.Item>
                                <ListGroup.Item>Contact Component - Designed by Formik - Oauth2 with gmail to get and send email</ListGroup.Item>
                                <ListGroup.Item>Home & Projects pages are designed by React-Bootstrap packages</ListGroup.Item>
                                <ListGroup.Item>To store the visitors data in Firebase and shown their comments in endorsement link in table format</ListGroup.Item>
                                <ListGroup.Item>Configured the Webpack plugins and refactored the scripts to handle both localhost server cum heroku server </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="project-card">
                            <Card.Body>
                                <Card.Link href=" https://weather-framework.herokuapp.com/"><Card.Img variant="top" src={Weatherimg} /></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Weather</small>
                            </Card.Footer>
                        </Card>
                        <Card className="project-detail">
                            <ListGroup variant="flush">
                                <ListGroup.Item>Weather RestApi JSON to handle POST/GET in NodeJS(Express) </ListGroup.Item>
                                <ListGroup.Item>Search Bar designed - axios to send request from frontend(ReactJS) and get the response of list cities/JSON and shown the Card format</ListGroup.Item>
                                <ListGroup.Item>Radio button to change farenheit/celcius degree</ListGroup.Item>
                                <ListGroup.Item>Three days weather shown on clicking More details button</ListGroup.Item>
                                <ListGroup.Item>React Hooks - UseState/UseEffect - props and state changed in two way binding</ListGroup.Item>
                                <ListGroup.Item>Concurrently Node package to run both server and client simultaneously - script written in webpack configuration</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="project-card">
                            <Card.Body>
                                <Card.Link href="https://serene-wildwood-3210.herokuapp.com/"><Card.Img variant="top" src={WorldTravelimg} /></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">World Travel Gallery</small>
                            </Card.Footer>
                        </Card>
                        <Card className="project-detail">
                            <ListGroup variant="flush">
                                <ListGroup.Item>Explored Heroku deployment in cloud production environment and gitconnect to handle auto deployment </ListGroup.Item>
                                <ListGroup.Item>Static Nodejs application to review the logs and learned bash commands in heroku</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>
                    <Row>

                        <Card className="project-card">
                            <Card.Body>
                                <Card.Link href="https://frontendstudygroup.github.io/"><Card.Img variant="top" src={Frontendstudygroupimg} /></Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Frontend-Studygroup</small>
                            </Card.Footer>
                        </Card>
                        <Card className="project-detail">
                            <ListGroup variant="flush">
                                <ListGroup.Item>Contributed to the Frontendstudygroup project - More than 4 Pull Request raised and merged - GitHub work flow - working in a team</ListGroup.Item>
                                <ListGroup.Item>Cascading Style Sheets - Table view to display JSON data in React component - Toggle Effects</ListGroup.Item>
                                <ListGroup.Item>Created D3js bubble chart - SVG elements - fetch data from gitAPI - shown the contributors avatar and their contributions. </ListGroup.Item>
                                <ListGroup.Item>Test cases written using React Testing Library</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default Projects;