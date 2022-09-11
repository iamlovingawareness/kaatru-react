import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { weatherData } from "../data";

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {weatherData.map((city) => {
          return (
            <div className="cardd" key={city.id}>
              <div className="top"></div>
              <div className="info">
                <h4 className="country">
                  {city.name}&nbsp;&nbsp;07:19 <br />
                </h4>
                <small className="small">Today 28 Sept&nbsp;&nbsp;12:32 </small>
              </div>
              <div className="hero">
                <p>{city.temperature} &#8451;</p>
                <div className="forecast">{city.forecast}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
