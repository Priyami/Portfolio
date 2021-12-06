import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';


class Link extends Component {
    render() {
        return (
            <div>
               
                   <Nav className="justify-content-end">
                        <Nav.Link href='/report'> 
                              Comments
                        </Nav.Link>
                    </Nav>
                    
  
                    
            </div>

        )
    }
}
export default (Link);