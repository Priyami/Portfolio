import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisitorTable from '../service/VisitorTable';
import ReactTable from '../service/ReactTable';
import {Container, Row, Col} from 'react-bootstrap';


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

const Report = () => {
    const visitor = useVisit();
    return (
        <div>
             <React.Fragment>
            <Container>
           
                <Col>
                    <h1>Registered Visitor</h1>
                   
                    
                    <ReactTable visitor = {visitor}></ReactTable>
                </Col>
           
            <br/>
                    
            </Container>
            </React.Fragment>
         
        </div>
    )
}


export default Report;