import React, { Component } from 'react';
import {  Card, ListGroup } from 'react-bootstrap';
import "./Project.css";
export default class Project extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Professional Experience</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>•	Participating in WomenWhoCode – Hacktoberfest 2021 – Designing React components with features like – toggling the layouts and card/table format of API data – had a better knowledge in Git flow by working as a team.</ListGroup.Item>
                                <ListGroup.Item>•	Created unit test cases for the React component using React-Testing library tool and analyzed test case scenarios with team members.</ListGroup.Item>
                                <ListGroup.Item>•	Created a bubble chart using D3js to visualize the data in react component to encourage contributors by displaying their achievements and their avatar inside a bubble.</ListGroup.Item>
                                <ListGroup.Item>•	Solving leetcode problems in JavaScript.</ListGroup.Item>
                                <ListGroup.Item>•	Collaborating Opensource projects in GitHub using React hooks(useEffect/useState/useHistory).</ListGroup.Item>
                                <ListGroup.Item>•	Designing portfolio React web application in webpack - back-end as node server - firebase as database.</ListGroup.Item>
                            </ListGroup>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Jul 2020 – current</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Brain Arts Organization</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>•   Designed re-usable template components.</ListGroup.Item>
                                <ListGroup.Item>•   Designed custom fields for widgets.</ListGroup.Item>
                                <ListGroup.Item>•   Redesigned social sharing buttons using CSS.</ListGroup.Item>
                                <ListGroup.Item>•   Enhanced the Tribe Plugin data using hooks and filters.</ListGroup.Item>
                            </ListGroup>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Aug 2015 – June 2017</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>The Center for Arts at the Armory</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>•   Communicated with event booking department about event schedule, performer’s short bio and venue details. </ListGroup.Item>
                                <ListGroup.Item>•   Developed the event posts to support and promote monthly campaigns.</ListGroup.Item>
                                <ListGroup.Item>•   Designed web posts, pages and images using Word Press plugins and tools.</ListGroup.Item>
                                <ListGroup.Item>•   Frequent update makes the website live and increases visitors.</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">June 2016 – March 2017</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Evidyaloka</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>•   Mathematics Grade5/Grade6 lesson plan based on school syllabus. </ListGroup.Item>
                                <ListGroup.Item>•   Creating presentations, worksheets and question banks.</ListGroup.Item>
                                <ListGroup.Item>•   Mentored Mathematics in native Language.</ListGroup.Item>
                                <ListGroup.Item>•   Formatting lesson plan in MS Word and Power Point presentation.</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Nov 2018 - Jun 2020</small>
                    </Card.Footer>
                </Card>


            </div>
        )
    }
}