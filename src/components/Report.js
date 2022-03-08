import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomTable from '../service/CustomTable';
import Card from 'react-bootstrap/Card';
import { Row, Col, Navbar, NavbarBrand, Container } from 'reactstrap';
import Menubar from '../components/Menubar';
import Foliofoot from './Foliofoot';


const useVisit = () => {
    const [visitor, setVisitor] = useState([]);
    useEffect(() => {
        let mounted = true
         axios.get('https://portfolio-nodeserver.herokuapp.com/users/getallusers')
            .then((result) => {
                if (mounted) {
                    setVisitor(result.data)
                }

                return () => mounted = false;
            })

    }, [])
    return visitor;
}


const Report = () => {
    const visitor = useVisit();
    let visitorData = Object.keys(visitor).map((key) => {
        return visitor[key]
    })
    return (
      
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
                                <Navbar light expand="md">
                                    <NavbarBrand href="/">
                                        <img
                                            src="images/Contact-icon.png"
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />{' '}
                                        Endorsements
                                    </NavbarBrand>
                                </Navbar>
                                  <CustomTable visitor={visitorData}></CustomTable>
                            </Col>
                        </Row>
                    </Card>
                    <br />
                    <Row>
                        <Col>
                             <Foliofoot></Foliofoot>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

       
    )
}


export default Report;