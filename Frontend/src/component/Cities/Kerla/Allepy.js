import React from 'react'
import alley1 from '../../image/alley1.jpg';
import alley2 from "../../image/alley2.jpg";
import alley3 from "../../image/alley3.jpg";
import alley4 from "../../image/alley4.jpg";
import alley5 from "../../image/alley5.jpg";
import alley6 from "../../image/alley6.jpg";
import { useNavigate } from 'react-router-dom'

const Allepy = () => {

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
        <span>A</span>
        <span>L</span>
        <span>L</span>
        <span>E</span>
        <span>P</span>
        <span>P</span>
        <span>E</span>
        <span>Y</span>
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
                src={alley1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Houseboats In Alleppey
                </h5>
                <p className="card-text">
                  A Vacation To Kerala Is Incomplete Without Spending Some
                  Relaxing Time In The Fantastic Backwaters Of Alleppey.You Can
                  Sit Back And Relax As You Enjoy The Magnificent Setting Of
                  Beautiful Coconut Fringed Waters, Paddy Fields And Lovely
                  Sights Of The Human-Made Islands. A Houseboat Experience Is
                  Truly The Best Of Both Worlds As You Enjoy The Luxury Style
                  Treatment Of Comfortable Interiors And Delicious Food To Make
                  Your Experience Memorable And Worthwhile.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={alley2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Marari Beach
                </h5>
                <p className="card-text">
                  One Of The Great Delights Of The Malabar Coast, The Marari
                  Beach Is An Idyllic Serene Beach. About 11 Km From The City Of
                  Alleppey, This Beach Is A Hotspot For Fishing Activity,
                  Deriving Its Name From The Local Fishing Village Mararikulam.
                  Visiting In August Gives Tourists The Exclusive Opportunity To
                  View Snake Boat Races Across The Waters. The Serenity And
                  Quietude On The Beach Are Beyond Description, So Much So That
                  Marari Beach Has Been Enlisted Among The Top Five Hammock
                  Beaches Of The World By National Geographic Survey.
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
                src={alley3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ambalappuzha Sree Krishna Temple
                </h5>
                <p className="card-text">
                  Ambalapuzha Sree Krishna Temple Is A Hindu Temple Dedicated To
                  Lord Krishna Situated In Alappuzha District. Built-In The
                  Traditional Kerala Style Architectural Pattern, The Temple Is
                  Famous For Its Delicious Rice Pudding Prepared In Sweet Milk,
                  Popularly Known As Pal Payasam.Also Called As The ‘Dwarka Of
                  The South’, The Temple Is Believed To Have Been Built Between
                  15th - 17th AD By The Local King Chembakkassery Pooradam
                  Thirunal Devanarayanan Thampuran. The Main Deity Presiding The
                  Temple Called Parthasarathi (Another Name For Lord Krishna) Is
                  Carved Out Of Black Granite Stone And Carries The Sacred Conch
                  (Shankh) In The Left Hand And A Whip In The Right.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={alley4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thottappally Beach
                </h5>
                <p className="card-text">
                  Famed Through A Celebrated Novel And Movie “Chemmeen”,
                  Thottappally Beach Is A Quiet Escape In The Village. It An
                  Active Fishing Harbour That Draws Locals Every Day. The
                  Thottappally Spillway Located Nearby Is Also Quite An
                  Attraction. It Helps Separate The Freshwater Of The
                  Thottappally Lake And The Saline Water At The Mouth Of The
                  River That Drains Into The Arabian Sea.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={alley5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kuttanad
                </h5>
                <p className="card-text">
                  Kuttanad Is A Region Covering A Large Part Of Alappuzha And
                  Some Of Kottayam District, The Heart Of The Backwaters Of
                  Kerala. Kuttanad Is The 'Rice Bowl Of Kerala', Being Home To
                  Lush Green Rice Fields Spread Extensively, Divided By Dykes.
                  Travelling Through This Secluded Alcove Of Nature Will Give
                  You A Feel Of Traditional Countryside Life Of Kerala. A
                  Special Peculiarity Of This Place Is Its Geography. It Lies
                  Around 2 Metres Below The Main Sea Level, Making It The Lowest
                  Altitude Place In The Country.In These Lowlands, Kerala
                  Produces Large Portions Of The Everyday Meal On Reclaimed
                  Lands, Split Up By Many Small And Big Rivers And Creeks.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={alley6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thaikal Beach
                </h5>
                <p className="card-text">
                  Located In Cherthala, North Of Alleppey, Thaickal Beach Is A
                  Wide Sandy Beach Known For Its Serene Atmosphere And Beautiful
                  Sunset. Apart From The Narrow Roads, Which Might Be A Hassle
                  To Park Your Vehicle, The Beach Is Easily Accessible By Road.
                  Thaikal Beach Isn't Too Crowded; You'll Mostly Find Fishers
                  And Locals; Hence, There Are No Lifeguards Or Other
                  Facilities; You'll Need To Walk Ahead For 2 Kms To Find Local
                  Shops And Stores. A Day's Tour To The Beach And Arthunkkal
                  Church In Cherthala Will Be A Good Experience
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

export  default Allepy