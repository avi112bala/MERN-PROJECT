import React from 'react'
import Slider from 'react-slick-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vid1 from './video/vid1.mp4'
import vid2 from './video/vid2.mp4'
import vid3 from './video/vid3.mp4'
import vid4 from './video/vid4.mp4'
import vid5 from './video/vid5.mp4'
import "../App.css"
import Book from "../component/Book";
// import Services from "./component/Services";
// import Gallery from "./component/Gallery";
// import Review from "./component/Review";
// import Contact from "./component/Contact";
// import Signin from "./component/Signin";
import { Package } from "../component/Package";



 const Home = () => {
    const settings = {
      // dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
  return (
    <>
      <div className="slide">
        <Slider {...settings}>
          <div>
            <video width="100%" height="100%" autoPlay loop muted>
              <source src={vid1} />
            </video>
          </div>
          <div>
            <video width="100%" height="100%" autoPlay loop muted>
              <source src={vid2} type="video/mp4" />
            </video>
          </div>
          <div>
            <video width="100%" height="100%" autoPlay loop muted>
              <source src={vid3} type="video/mp4" />
            </video>
          </div>
          <div>
            <video width="100%" height="100%" autoPlay loop muted>
              <source src={vid4} type="video/mp4" />
            </video>
          </div>
          <div>
            <video width="100%" height="100%" autoPlay loop muted>
              <source src={vid5} type="video/mp4" />
            </video>
          </div>
        </Slider>
      </div>
      <Book />
      <Package/>
    </>
  );
}

export default Home