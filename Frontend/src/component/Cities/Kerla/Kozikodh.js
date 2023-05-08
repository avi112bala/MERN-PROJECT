import React from 'react'
import ko1 from '../../image/ko1.jpg';
import ko2 from "../../image/ko2.jpg";
import ko3 from "../../image/ko3.jpg";
import ko4 from "../../image/ko4.jpg";
import ko5 from "../../image/ko5.jpg";
import ko6 from "../../image/ko6.jpg";
import { useNavigate } from 'react-router-dom'

const Kozikodh = () => {


  const navigate=useNavigate();

  function handlechange(){
    navigate('/kerala')
  }
  return (
    <>
      {/* Title  */}

      <h1 class="heading">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        <span class="space"></span>
        <span>T</span>
        <span>O</span>
        <span class="space"></span>
      </h1>
      <h2 class="heading">
        <span>K</span>
        <span>O</span>
        <span>Z</span>
        <span>I</span>
        <span>K</span>
        <span>O</span>
        <span>D</span>
        <span>H</span>
      </h2>

      {/* Title  */}
      {/* card */}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div
              className="card mb-3"
              style={{ width: "24rem", height: "auto" }}
            >
              <img
                src={ko1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Backwaters In Kozhikode
                </h5>
                <p className="card-text">
                  Located On The Northern Side Of The Scenic State Of Kerala,
                  Kozhikode Has Always Been A Popular Destination For Its
                  Backwaters. These Backwaters Are A Distinctive Feature Of This
                  Area And Have Been Generously Blessed With Abundant Natural
                  Beauty, Dense Greenery And Exotic Flora And Fauna. The
                  Palm-Fringed Rivulets, Lakes And Canals Of Kozhikode Are
                  Decked With Engaging Beauty.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ko2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thikkoti Light House
                </h5>
                <p className="card-text">
                  Said To Be Built On The Remains Of A Shipwreck, The Thikkoti
                  Lighthouse Is One Of The Major Attractions Of Kozhikode.
                  Located On A Rocky Shoreline, The Place Is Best Known For The
                  Scenic Views It Offers As Well As Several Species Of Nomadic
                  Birds
                </p>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className="col">
            <div
              className="card mb-2"
              style={{ width: "24rem", height: "auto" }}
            >
              <img
                src={ko3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Beypore Beach
                </h5>
                <p className="card-text">
                  Beypore Beach Is A Beautiful Beach On The Western Coastline Of
                  India. It Is Located About 10 Kilometres From Kozhikode In
                  God's Own Country, Kerala. The Beach Is Located At The Mouth
                  Of River Chaliyar And Is A Famous Beach Destination All Across
                  The World. The Beautiful Skies Over The Pristine Sea And The
                  Long Stretch Of Golden Sand And The Tall Coconut Trees Make
                  For A Fabulous Vacation Destination In Kerala. Sunsets Are A
                  Special Treat To The Eyes Here After A Long Stroll.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ko4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kallai River
                </h5>
                <p className="card-text">
                  Now Reminiscent Of The Bygone Era Of Timber Trade, The Kallai
                  River Once Fed The Timber Hub- The Second Largest Timber
                  Trading Centre In Asia After Japan.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ko5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kozhikode Beach
                </h5>
                <p className="card-text">
                  Kozhikode Beach Is Also Known As The Calicut Beach And Is
                  Situated On The Malabar Coast. The Beach Road Was Named As
                  'Gandhi Road' After Mahatma Gandhi Paid A Visit To Calicut In
                  1934. The Place Has Always Been Prominent For Hosting Public
                  Meetings. It Has A Long Drive From Beypore In The South To
                  Kappad In The North. The Beach Is Ideal For Witnessing The
                  Orange Sunsets In Calicut.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ko6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Elathur
                </h5>
                <p className="card-text">
                  Surrounded By A Lake On One Side, And A River On The Other,
                  Elathur Is A Quaint Little Village With Serene Surroundings.
                  The Place Is Also A Paradise For Seafood Lovers As You Will Be
                  Served With Some Of The Best Seafood, Fresh-Water Fishes And
                  Toddy To Complete The Beach-Side Experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-3 mb-3">
        <button
          type="button"
          class="btn btn-danger "
          style={{ color: "white", fontWeight: "500 " }}
          onClick={handlechange}
        >
          Back To Kerala
        </button>
      </div>
    </>
  );
}

export  default Kozikodh