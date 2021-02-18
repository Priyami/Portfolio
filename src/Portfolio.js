import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Portfolio.css';
import Menubar from './components/Menubar';
import Slider from './components/Slider';
import Project from './components/Project';
import Contact from './components/Contact';
//import Timeline from './components/timeline'

class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Menubar></Menubar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Slider></Slider>
                        </Col>
                    </Row>
                    
                    <br />
                    <br />
                   
                    <Row>
                        <Col>
                           <Project></Project>
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col>
                            <br />
                            <div>
                            <Card body>
                            
                                <Contact></Contact>
                           
                            </Card>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}

export default Portfolio;