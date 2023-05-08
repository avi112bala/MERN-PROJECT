import React from 'react'

import amritsar1 from '../../image/amritsar1.jpg'
import amritsar2 from "../../image/amritsar2.jpg";
import amritsar3 from "../../image/amritsar3.jpg";
import amritsar4 from "../../image/amritsar4.jpg";
import amritsar5 from "../../image/amritsar5.jpg";
import amritsar6 from "../../image/amritsar6.jpg";
import { useNavigate } from 'react-router-dom';

 const Amritsar = () => {

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
        <span>A</span>
        <span>M</span>
        <span>R</span>
        <span>I</span>
        <span>T</span>
        <span>S</span>
        <span>A</span>
        <span>R</span>
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
                src={amritsar1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Golden Temple
                </h5>
                <p className="card-text">
                  The Golden Temple, Also Known As Sri Harmandir Sahib, Is The
                  Holiest Shrine In All Of Sikhism. Located Right In The Heart
                  Of Amritsar, The Stunning Golden Architecture Of The Temple
                  And The Daily Langar (Community Kitchen) Attract A Large
                  Number Of Visitors And Devotees Each Day. The Spiritual Focus
                  Is The Tank, The Amrit Sarovar, Which Surrounds The Glistening
                  Central Shrine. Around The Edges Of The Compound, There Are
                  More Shrines And Monuments Including The Sikh Museum.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={amritsar2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Wagah Border
                </h5>
                <p className="card-text">
                  Located At A Distance Of 28 Km From Amritsar, The Wagah Border
                  Marks The Boundaries Between Indian And Pakistani Borders,
                  Running Along The Grand Trunk Road. The Wagah Border Ceremony
                  Or The Beating Retreat Ceremony, Held Every Day Before Sunset,
                  Is The Prime Attraction. This Ceremony Includes The Closing Of
                  The International Gates And Lowering The Flags Of Both
                  Countries
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
                src={amritsar3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Jallianwala Bagh
                </h5>
                <p className="card-text">
                  Located Near The Famous Golden Temple Of Amritsar, Jallianwala
                  Bagh Is A Public Garden That Also Houses A Memorial To
                  Commemorate The Massacre Of Peaceful Celebrators By The
                  British Forces. Spread Over 6.5 Acres Of Land, Jallianwala
                  Bagh Is Associated With One Of The Saddest Days In Indian
                  History When Thousands Of Innocent People Were Killed On The
                  Orders Of General Dyer As They Gathered For A Peaceful
                  Celebration Of Baisakhi. The Place Has Now Been Turned Into A
                  Beautiful Park And Is Managed By The Jallianwala Bagh National
                  Memorial Trust.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={amritsar4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Maharaja Ranjit Singh Museum
                </h5>
                <p className="card-text">
                  The Maharaja Ranjit Singh Museum Is A Museum Located In
                  Company Bagh, Amritsar. It Served As The Summer Palace Of The
                  First King Of The Sikh Empire, Maharaja Ranjit Singh, After
                  Whom The Museum Is Named. The Museum Now Provides An Insight
                  Into The Life The Maharaja Alongside The History, Art And
                  Architecture Of The Sikh Community Between The 18th And 19th
                  Century. The Museum Is At A Distance Of 1.5 Km From Amritsar
                  Junction And About 4 Km From The Golden Temple.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={amritsar5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Partition Museum
                </h5>
                <p className="card-text">
                  The Partition Museum In Amritsar Is A Museum Housing A
                  Collection Of Stories, Memoirs, Art And Artefacts That Hold
                  The Memory Of The Time Before, During And After The Partition
                  Of British India. Located At The Town Hall In Amritsar And
                  Developed By The Arts And Cultural Heritage Trust (TAACHT),
                  The Museum Is A Part Of The Newly Inaugurated Heritage Street
                  At Amritsar, Which Begins From The Golden Temple And Ends At
                  The Town Hall.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={amritsar6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sadda Pind
                </h5>
                <p className="card-text">
                  Sadda Pind Is A Punjabi Culture Living Village Museum Spread
                  Across 12 Acres Of Land. It Brings You A Chance To Experience
                  Authentic Culture, Colours And Flavours Of Punjab In One
                  Place.Https://Www.Saddapind.Co.In/ Situated In The Holy City
                  Of Amritsar, Just 8 KM From Golden Temple And 7 KM From
                  Airport, Sadda Pind Offers A Perfect Setting For A Weekend
                  Getaway Or A Short Stay With Family And Friends.The People
                  Behind Sadda Pind Have Over 29 Years Of Experience In
                  Hospitality And Administration. Sadda Pind Is An Endeavour To
                  Redefine Punjabi Culture And Hospitality Through Commitment
                  And World-Class Service. Sadda Pind Offers Something New For
                  Everyone.
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


export default Amritsar