import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisitorTable from '../service/VisitorTable';
import ReactTable from '../service/ReactTable';
import  Card  from 'react-bootstrap/Card';
import { Row, Col, Navbar, NavbarBrand, Container } from 'reactstrap';

import Menubar from '../components/Menubar';


const useVisit = () => {
    const [visitor, setVisitor] = useState([]);
    useEffect(() => {
        let mounted = true
        axios.get('http://localhost:4000/users')
            .then((result) => {
                if (mounted) {
                    setVisitor(result.data)
                }
                return () => mounted = false;

            })
    }, [])
    return visitor
}

const handleDeleteAll = () => {
   
        axios.delete('http://localhost:4000/users')
        .then((result) => {
            console.log("Document successfully deleted!"); 
        })
            
}

const Report = () => {
    const visitor = useVisit();
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
                    <Card body>
                    <Row>
                   
                        <Col>
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="/">
                                    <img
                                        src="images/Contact-icon.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />{' '}
                                    Visitors
                                </NavbarBrand>
                            </Navbar>

                            <br />
                            <ReactTable visitor={visitor}></ReactTable>
                        </Col>

                        <Col xs="12">
    
                                    <button type="submit" id="delete" onClick = {handleDeleteAll}>Delete All</button>
                                    
                        </Col>
                        
                    </Row>
                    </Card>
                    <br />

                </Container>
            </React.Fragment>

        </div>
    )
}


export default Report;