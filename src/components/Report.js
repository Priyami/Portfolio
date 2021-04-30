import React, { useState, useEffect } from 'react';

import axios from 'axios';
import VisitorTable from '../service/VisitorTable';


const Report = () => {
   const [visitor, setVisitor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then((response)=>{
                setVisitor(response)
                console.log(response)
            })
    }, [])
   
    render()
    {
    return(
        <div>
            <h1>Registered Visitor</h1>
            <VisitorTable visitor= {visitor} />
        </div>
    )
  }
}

export default Report;

