import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import imageforMobile from "../../../assets/images/CarouselMobile.svg";
import imageforDesktop from "../../../assets/images/CarouselDesktop.svg";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsDesk = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselComponent: React.FC = () => {
  return (
    <>
      <div className="carousel__Mobile">
        <Slider {...settings}>
          <img  src={imageforMobile}  alt="MobileCarousel"  width="100%"  height="auto"/>
          <img  src={imageforMobile}  alt="MobileCarousel"  width="100%"  height="auto"/>
          <img  src={imageforMobile}  alt="MobileCarousel"  width="100%"  height="auto"/>
          <img  src={imageforMobile}  alt="MobileCarousel"  width="100%"  height="auto"/>
        </Slider>
      </div>
      <div className="carousel__Desktop">
        <Slider {...settingsDesk}>
          <img  src={imageforDesktop}  alt="DesktopCarousel"  width="100%"  height="auto"/>
          <img  src={imageforDesktop}  alt="DesktopCarousel"  width="100%"  height="auto"/>
          <img  src={imageforDesktop}  alt="DesktopCarousel"  width="100%"  height="auto"/>
          <img  src={imageforDesktop}  alt="DesktopCarousel"  width="100%"  height="auto"/>
        </Slider>
      </div>
    </>
  );
};

export default CarouselComponent;
