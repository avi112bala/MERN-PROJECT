import React from 'react'
import ludhiana1 from '../../image/ludhiana1.jpg';
import ludhiana2 from "../../image/ludhiana2.jpg";
import ludhiana3 from "../../image/ludhiana3.jpg";
import ludhiana4 from "../../image/ludhiana4.jpg";
import ludhiana5 from "../../image/ludhiana5.jpg";
import ludhiana6 from "../../image/ludhiana6.jpg";
import { useNavigate } from 'react-router-dom';

 const Ludhiana = () => {
    const navigate=useNavigate();

    function handlechange(){
        navigate('/punjab')
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
        <span>L</span>
        <span>U</span>
        <span>D</span>
        <span>H</span>
        <span>I</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
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
                src={ludhiana1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Lodhi Fort
                </h5>
                <p className="card-text">
                  Lodhi Fort Is One Of The Forts In The Vicinity Of Ludhiana In
                  Punjab. Locally Known As Purana Qila Or Old Fort, It Is A
                  Grand Structure Which Now Lies In Ruins Due To Poor
                  Maintenance. The Fort Stands On A Large Piece Of Land Now
                  Encroached From All Sides. What Was Once The Gateway To
                  Sikander Lodhi's Empire And The Pride Of Maharaja Ranjit
                  Singh, Now Lies Forgotten And In Ruins. Surprisingly, A Large
                  Percent Of The Local Population Is Not Even Aware Of The
                  Whereabouts Of This Fort.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card mb-2" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ludhiana2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Punjab Agriculture University Museum
                </h5>
                <p className="card-text">
                  The Punjab Agriculture University Museum On The Outskirts Of
                  Ludhiana, Punjab, Displays Artifacts From The Various Era Of
                  Rural Punjab. The Museum Which Was Highly Inspired By The
                  Open-Air Museum In Copenhagen Is An Excellent Insight Into
                  Traditional Punjab. It Resembles The Traditional Houses In
                  Rural Punjab With Long Paths Flanked By Water Channels On
                  Either Side. The Museum Is A Hybrid Of The Agricultural And
                  Cultural Portrayal Of Punjab Where On Can Visit The Goat Farm,
                  Cow Farm, And Horse Farm. The Models Of Miniature Mountains,
                  Rivers And Water Reservoirs Are The Crowd Pleasers.
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
                src={ludhiana3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Nehru Rose Garden
                </h5>
                <p className="card-text">
                  Nehru Rose Garden Is A Beautifully Landscaped Garden In The
                  Heart Of The City Ludhiana. Sprawling Over An Area 27
                  Acres,This Popular Tourist Attraction Is Home To Over 17000
                  Plants And 1600 Varieties Of Roses. The Vast Lawns Are Perfect
                  Picnic Spot With Water Fountains Around It. Every Night The
                  Fountains Are Illuminated With Colorful Lights And
                  Music.Although Being One Of The Oldest And Largest Leisure
                  Spots In Ludhiana, Established In The Year 1967, It's The Most
                  Verdure Spaces In The Vicinity.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ludhiana4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Maharaja Ranjit Singh Museum
                </h5>
                <p className="card-text">
                  With More Than Twelve Galleries Catering To Subjects Like The
                  Kargil War And Ancient History, The Maharaja Ranjit Singh War
                  Museum Contains An Extensive Memoir Of India's Past.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ludhiana5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Hardy's World Amusement Park
                </h5>
                <p className="card-text">
                  Hardy's World Amusement Park Is The Most Sorted Out Places In
                  Ludhiana, Punjab. This Water-Themed Park Gets Your Adrenaline
                  Pumped Up With Over 20 Exhilarating Rides Like The Roller
                  Coaster, Sun & Moon, Pendulum And Motorcycle. Situated 7 Km
                  Away From Ludhiana, It Is The Most Significant Water-Themed
                  Park In Punjab. It's Nestled Over A Large Area Of Parkland On
                  The Ludhiana - Jalandhar Highway. It's A Frolic Place With
                  Mostly Wave Pools And Water Slides Around The Place.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ludhiana6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Pavillion Mall
                </h5>
                <p className="card-text">
                  Pavilion Mall Was Built And Developed By Bharti Realty Ltd, At
                  The Center Of Fountain Chowk In Ludhiana City Of Punjab. The
                  Complex Comprises An Approximate 500,000 Sq.Ft. Of Leisure And
                  Shopping Facilities, Over 100 Premium Retail Units That
                  Includes A 17,000 Sq.Ft Food Court. With A Plethora Of High
                  Selling International Brands As Well As The National Products
                  And A Wholesale-Retail Mix Of Supermarket, Department Stores,
                  Seven-Screen Multiplex, Food Court, Kids Zone And Restaurants,
                  The Mall Is The Pride Of One Of The Most Affluent Cities In
                  India - Ludhiana.
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
          Back To Punjab
        </button>
      </div>
    </>
  );
}

export default Ludhiana