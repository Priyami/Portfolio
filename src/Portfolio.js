import React, {Component,Suspense}  from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './Portfolio.css';
const Project  = React.lazy(() => import('./components/Project'));
const Link  = React.lazy(() => import('./components/Link'));
const Menubar = React.lazy(() => import('./components/Menubar'));
const Slider =  React.lazy(() => import('./components/Slider'));
const Contact  = React.lazy(() => import('./components/Contact'));
const Foliofoot  = React.lazy(() => import('./components/Foliofoot'));




class Portfolio extends Component {
    render() {
        return (
            <div>
            <React.Fragment>
            <Suspense fallback={ <div className='centered'><Spinner  animation="border" /></div>}>

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
                                <Col>
                                <Router><Link></Link></Router>
                                   
                                </Col>
                           
                            </Card>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            
                            <Foliofoot></Foliofoot>
                           
                        
                        </Col>
                    </Row>
                    
                </Container>
                </Suspense>
            </React.Fragment>
            </div>
        )
    }
}

export default (Portfolio);