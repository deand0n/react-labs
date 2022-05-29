import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import AnniImg from '../assets/anni.jpg';
import BrunoImg from '../assets/bruno.jpg';
import FionaImg from '../assets/fiona.jpg';
import TuesdayImg from '../assets/tuesday.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={AnniImg}
                    alt="Anni"/>
                    <Carousel.Caption>
                        <h3>Anni image</h3>
                        <p> Anni. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BrunoImg}
                        alt="Bruno"/>
                    <Carousel.Caption>
                        <h3>Bruno image</h3>
                        <p> Bruno. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FionaImg}
                        alt="Fiona"/>
                    <Carousel.Caption>
                        <h3>Fiona image</h3>
                        <p> Fiona. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TuesdayImg}
                        alt="Tuesday"/>
                    <Carousel.Caption>
                        <h3>Tuesday image</h3>
                        <p> Tuesday. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;
