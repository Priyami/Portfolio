import React, { Component } from 'react';
import {Card, Badge} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';
class Foliofoot extends Component{
    render() {
        return (
            <div>
                <Card className="text-center" border="light" >
                    <Card.Body>
                    <Card.Text>Copyright @ Portfolio</Card.Text>
                    <Badge pill variant="light">
                        <SocialIcon url ="https://twitter.com/priyaaraj" />
                    </Badge>{' '}
                    <Badge pill variant="light">
                        <SocialIcon url ="https://www.linkedin.com/in/priya-r-surendranath/" />
                    </Badge>{' '}
                    <Badge pill variant="light">
                        <SocialIcon url ="https://github.com/Priyami" />
                    </Badge>{' '}
                    
                    

                    </Card.Body>
                    
                </Card>
            </div>
        )
    }
}
export default Foliofoot;
