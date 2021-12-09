import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomTable from '../service/CustomTable';
import Card from 'react-bootstrap/Card';
import { Row, Col, Navbar, NavbarBrand, Container } from 'reactstrap';
import Menubar from '../components/Menubar';


const useVisit = () => {
    const [visitor, setVisitor] = useState([]);
    useEffect(() => {
        let mounted = true
        axios.get('https://portfolio-nodeserver.herokuapp.com/users/getallusers')
            .then((result) => {
                if (mounted) {
                    console.log(result.data, "Report json get from heroku");
                    setVisitor(result.data)
                }

                return () => mounted = false;
            })

    }, [])
    return visitor
}


const Report = () => {
    const visitor = useVisit();
    let visitorData = Object.keys(visitor).map((key) => {
        return visitor[key]
    })
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
                </Container>
            </React.Fragment>

        </div>
    )
}


export default Report;