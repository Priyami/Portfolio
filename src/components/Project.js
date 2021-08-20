import React, { Component } from 'react';
import { CardDeck, Card, ListGroup } from 'react-bootstrap';
import "./Project.css";
export default class Project extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="images/cube-logoa.jpg" />
                        <Card.Body>
                            <Card.Title>Brain Arts Organization</Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Designed re-usable template components.</ListGroup.Item>
                                    <ListGroup.Item>Designed custom fields for widgets.</ListGroup.Item>
                                    <ListGroup.Item>Redesigned social sharing buttons using CSS.</ListGroup.Item>
                                    <ListGroup.Item>Enhanced the Tribe Plugin data using hooks and filters.</ListGroup.Item>
                                </ListGroup>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Aug 2015 – June 2017</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/cube-logoa.jpg" />
                        <Card.Body>
                            <Card.Title>The Center for Arts at the Armory</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                                    <ListGroup.Item>Communicated with event booking department about event schedule, performer’s short bio and venue details </ListGroup.Item>
                                    <ListGroup.Item>Developed the event posts to support and promote monthly campaigns.</ListGroup.Item>
                                    <ListGroup.Item>Designed web posts, pages and images using Word Press plugins and tools.</ListGroup.Item>
                                    <ListGroup.Item>Frequent update makes the website live and increases visitors</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">June 2016 – March 2017</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/cube-logoa.jpg" />
                        <Card.Body>
                            <Card.Title>Evidyaloka</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                                    <ListGroup.Item>Mathematics Grade5/Grade6 lesson plan based on school syllabus </ListGroup.Item>
                                    <ListGroup.Item>Creating presentations, worksheets and question banks</ListGroup.Item>
                                    <ListGroup.Item>Explained Mathematics in native Language</ListGroup.Item>
                                    <ListGroup.Item>Formatting lesson plan in MS Word and Power Point presentation</ListGroup.Item>
                                </ListGroup>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Nov 2018 - Present</small>
                        </Card.Footer>
                    </Card>

                </CardDeck>
            </div>
        )
    }
}