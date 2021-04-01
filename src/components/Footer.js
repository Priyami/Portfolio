import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import SocialMediaIconsReact  from 'social-media-icons-react';
import Badge from 'react-bootstrap/Badge'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <Card className="text-center">

                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>

                        <Badge pill variant="light">
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" 
                                            borderWidth="5" 
                                            borderStyle="solid" 
                                            icon="github" 
                                            iconColor="rgba(255,255,255,1)" 
                                            backgroundColor="rgba(28,186,223,1)" 
                                            iconSize="5" 
                                            roundness="20%" 
                                            url="https://some-website.com/my-social-media-url" size="100" />
                        </Badge>{' '}
                        <Badge pill variant="light">
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" 
                                            borderWidth="5" 
                                            borderStyle="solid" 
                                            icon="linkedin" 
                                            iconColor="rgba(255,255,255,1)" 
                                            backgroundColor="rgba(28,186,223,1)" 
                                            iconSize="5" 
                                            roundness="20%" 
                                            url="https://some-website.com/my-social-media-url" size="100" />
                        </Badge>{' '}
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        )
    }
}

