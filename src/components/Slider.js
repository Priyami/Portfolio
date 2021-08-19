import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            width={800} height={500}
                            className="d-block w-100"
                            src="images/Flower pattern.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Web Developer</h3>
                            <h4>HTML, CSS, SASS, React-Bootstrap, ReactJs</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} height={500}
                            className="d-block w-100"
                            src="images/Fall2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Photography</h3>
                            <h4><a href="https://500px.com/p/priyaramachanriya">Gallery</a></h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} height={500}
                            className="d-block w-100"
                            src="images/Fireworks1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Guitar</h3>
                            <h4><a href="https://soundcloud.com/priya-surendranath">Sound Recorded</a></h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}