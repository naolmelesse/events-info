import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/carousel.scss'
import e1 from '../assets/event1.jpeg'
import e2 from '../assets/event2.jpeg'
import e3 from '../assets/event3.jpeg'
import e4 from '../assets/event4.jpeg'
import e5 from '../assets/event5.jpeg'
import e6 from '../assets/event6.jpeg'
const Carousel = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        fade: true,
        easing: true
      };
    return (
      <div className="carousel-wrapper">
        <h2 className="carousel-title">Upcoming Events</h2>
        <Slider className="carousel-container" {...settings}>
          <div className="carousel">
            <div className="carousel-image">
              <img src={e1} alt="event" />
            </div>
            <div className="carousel-text">
                <h2>Sep 09, 2022</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              incidunt architecto consequatur labore exercitationem assumenda
              nihil iure quia. Qui, dolorum! Corporis suscipit ea libero nam
              velit, quaerat non molestiae numquam.
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-image">
              <img src={e2} alt="event" />
            </div>
            <div className="carousel-text">
            <h2>Nov 17, 2022</h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              debitis accusamus possimus aliquid dolor ut tempore voluptates
              nesciunt odit quaerat libero, doloribus distinctio voluptatibus
              harum. Quibusdam quae aspernatur iusto minima!
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-image">
              <img src={e3} alt="event" />
            </div>
            <div className="carousel-text">
            <h2>Dec 25, 2022</h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              debitis accusamus possimus aliquid dolor ut tempore voluptates
              nesciunt odit quaerat libero, doloribus distinctio voluptatibus
              harum. Quibusdam quae aspernatur iusto minima!
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-image">
              <img src={e4} alt="event" />
            </div>
            <div className="carousel-text">
            <h2>Sep 09, 2022</h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              debitis accusamus possimus aliquid dolor ut tempore voluptates
              nesciunt odit quaerat libero, doloribus distinctio voluptatibus
              harum. Quibusdam quae aspernatur iusto minima!
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-image">
              <img src={e5} alt="event" />
            </div>
            <div className="carousel-text">
            <h2>Sep 09, 2022</h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              debitis accusamus possimus aliquid dolor ut tempore voluptates
              nesciunt odit quaerat libero, doloribus distinctio voluptatibus
              harum. Quibusdam quae aspernatur iusto minima!
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-image">
              <img src={e6} alt="event" />
            </div>
            <div className="carousel-text">
            <h2>Sep 09, 2022</h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              debitis accusamus possimus aliquid dolor ut tempore voluptates
              nesciunt odit quaerat libero, doloribus distinctio voluptatibus
              harum. Quibusdam quae aspernatur iusto minima!
            </div>
          </div>
        </Slider>
      </div>
    );
}




export default Carousel;