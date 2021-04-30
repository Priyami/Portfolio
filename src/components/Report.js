import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import VisitorTable from '../service/VisitorTable';
export default class Report extends Component {

    render()
    {

   const [visitor, setVisitor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then((response)=>{
                setVisitor(response)
                console.log(response)
            })
    }, [])
   
    
    return(
        <div>
            <h1>Registered Visitor</h1>
            <VisitorTable visitor= {visitor} />
        </div>
    )
  }
}