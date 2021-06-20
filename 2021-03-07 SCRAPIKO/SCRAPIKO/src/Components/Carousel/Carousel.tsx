import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../ImageContainer/ImageContainer';
import Scrap14 from '../../Assests/img/scrap14.jpeg';
import Scrap16 from '../../Assests/img/scrap16.jpg';
import Scrap20 from '../../Assests/img/scrap20.jpg';
import Scrap55 from '../../Assests/img/scrap55.png'
import { Carousel } from 'react-bootstrap';
console.log('imagesss', Images)
const CarouselComp = () => {
    return (
        <>
            <Carousel style={{ height: '500px' }}>
                <Carousel.Item>
                    <img src={Scrap14} className="carousel1" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Scrap16} className="carousel2" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Scrap20} className="carousel3" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Scrap55} className="carousel4" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default CarouselComp;