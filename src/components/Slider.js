import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>

                        <img
                            width={800} height={300}
                            className="d-block w-100"
                            src="images/Fireworks1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className = "carousel-caption">
                        <img
                        src="images/priya_avatar.png"
                        width="100px"
                        height="100px"
                        className="d-inline-block align-top avatar-img"
                        alt="React Bootstrap logo"
                    /> {' '}
                            <h3>Priya R Surendranath</h3>
                            <h4>Web developer</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} height={300}
                            className="d-block w-100"
                            src="images/Fall2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className = "carousel-caption">
                            <h3>Photography</h3>
                            <h4><a href="https://500px.com/p/priyaramachanriya">Gallery</a></h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} height={300}
                            className="d-block w-100"
                            src="images/Flower pattern.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className = "carousel-caption">
                            <h3>Guitar</h3>
                            <h4><a href="https://soundcloud.com/priya-surendranath">Sound Recorded</a></h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}