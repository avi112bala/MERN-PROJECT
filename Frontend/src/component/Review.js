import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Slider from "react-slick";
import pic1 from './image/pic1.png'
import pic2 from "./image/pic2.png";
import pic3 from "./image/pic3.png";
import pic4 from "./image/pic4.png";
import pic5 from "./image/pic5.jpg";
import pic6 from "./image/pic6.jpg";




const Review = () => {

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    // pauseOnHover: true,
  });
  return (
    <>
     
      <div className="sectionp">
        {/* Title  */}
        <div>
          <h1 class="heading">
            <span>R</span>
            <span>E</span>
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
          </h1>
        </div>
        {/* Title */}
        <Slider {...settings}>
          <div>
            <div className="card" style={{ width: "20rem", height: "25rem" }}>
              <img
                src={pic1}
                className="card-img-top"
                alt="..."
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  marginTop: ".5rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Vikas Mishra</h5>
                <p className="card-text text-center">
                  I could not have asked for a better trvel places than Uttar
                  pradesh.It took us to very good places. Thanks to Rove India.
                </p>
                <div className="text-center">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className="card" style={{ width: "20rem", height: "25rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  marginTop: ".5rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Sandeep kaur</h5>
                <p className="card-text text-center">
                  "We got a great last minute rate with Rove India and the
                  places on it was massive. Thanks for Guide us Rove India
                </p>
                <div className="text-center">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className="card" style={{ width: "20rem", height: "25rem" }}>
              <img
                src={pic3}
                className="card-img-top"
                alt="..."
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  marginTop: ".5rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Nishant Mishra</h5>
                <p className="card-text text-center">
                  I have used this website to find a weekend visiting places and
                  I really like it! It can be very time consuming to find a good
                  places but this website makes it easy. Thanks Rove India
                </p>
                <div className="text-center">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div>
            <div className="card" style={{ width: "20rem", height: "25rem" }}>
              <img
                src={pic4}
                className="card-img-top"
                alt="..."
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  marginTop: ".5rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Hitesh singla</h5>
                <p className="card-text text-center">
                  Great website! pretty sure my wife wants to take about 8
                  vacations next summer now. Thanks Rove India
                </p>
                <div className="text-center">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div>
            <div className="card" style={{ width: "20rem", height: "25rem" }}>
              <img
                src={pic5}
                className="card-img-top"
                alt="..."
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  marginTop: ".5rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-center">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div>
            <div className="card" style={{ width: "20rem", height: "25rem" }}>
              <img
                src={pic6}
                className="card-img-top"
                alt="..."
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  marginTop: ".5rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-center">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Review;
