import React from 'react'
import manali1 from '../../image/manali1.jpg';
import manali2 from "../../image/manali2.jpg";
import manali3 from "../../image/manali3.jpg";
import manali4 from "../../image/manali4.png";
import manali5 from "../../image/manali5.jpg";
import manali6 from "../../image/manali6.jpg";
import { useNavigate } from 'react-router-dom'

 const Manali = () => {


    const navigate=useNavigate();

    function handlechange(){
        navigate('/himachal')
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
        <span>M</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
        <span>L</span>
        <span>I</span>
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
                src={manali1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Solang Valley
                </h5>
                <p className="card-text">
                  When Heading To Manali For A Vacation, Two Absolutely
                  Essential Destinations In The Itinerary Are Rohtang And Solang
                  Valley. 14 Kilometres To The North West Of The Main Town Of
                  Manali, Solang Valley Is One Of The Most Popular Tourist
                  Destinations In Himachal Pradesh. Situated On The Way To
                  Rohtang From Manali, Every Year The Valley Welcomes Tourists
                  In Huge Numbers. A Favourite For Adventure Enthusiasts,
                  Parachuting To Paragliding,
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={manali2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Jogini Waterfall
                </h5>
                <p className="card-text">
                  Jogini Waterfall Is Located In The Beautiful Valley Of Manali,
                  About 3 Kilometres Away From The Bustling Town And Around 2
                  Kilometres Away From The Famous Vashisht Temple. What Makes It
                  A Popular Tourist Spot Is The Trek From Vashisht Temple,
                  Through Pine Trees And Orchards, To The Mesmerising Jogini
                  Waterfalls Cascading From A Height Of 160 Feet. The Trekkers
                  Are Enchanted As They Cross Several Smaller Streams With A
                  Dazzling View Of River Beas And The Snow-Dusted Peaks Of
                  Rohtang
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
                src={manali3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Hidimba Temple
                </h5>
                <p className="card-text">
                  Located Amidst The Snow-Covered Hills Of Manali, The Hadimba
                  Temple Is A Unique Shrine Dedicated To Hidimba Devi, Who Was
                  The Wife Of Bhima And Mother Of Ghatothkach. Surrounded By
                  Gorgeous Cedar Forests, This Beautiful Shrine Is Built On A
                  Rock Which Is Believed To Be In The Image Of Goddess Hidimba
                  Herself.Locally Known As Dhungari Temple, The Construction
                  Style Of The Hidimba Devi Temple Is Entirely Different From
                  That Of Any Of The Other Temples, With Its Wooden Doorways,
                  Walls, And Cone-Shaped Roof.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={manali4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Rohtang Pass
                </h5>
                <p className="card-text">
                  Located At A Distance Of Just 51 Kilometres From Manali,
                  Rohtang Pass Can Be Reached Only By Road. The Pass Is Located
                  At A Massive Height Of 3978 Metres On Manali- Keylong Road.
                  When Planning A Trip To Manali, A Day Off To The Vista Point
                  Of Rohtang Pass Is The Ultimate And Almost Essential
                  Attraction Of The Itinerary. Owing To Its Splendid Natural
                  Beauty,Rohtang Pass Is A Favourite Among The Community Of Film
                  Directors. Many Blockbusters Ranging From 'Jab We Met' To
                  'YehJawani Hai Deewani' Have Been Shot Here.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={manali5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sethan Valley
                </h5>
                <p className="card-text">
                  Sethan Is A Quaint Village In Himachal Pradesh, Approximately
                  12 Km From Manali. This Buddhist That Oversees The Dhauladhar
                  Range. Covered In Snow During Winters, Sethan Valley Is A
                  Great Place To Try Out Skiing And Snowboarding.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={manali6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kullu
                </h5>
                <p className="card-text">
                  Kullu, A Popular Tourist Destination In Himachal Pradesh Is
                  Located On The Banks Of The Beas River. Kullu Is Known For Its
                  Dusshera Festival, Ancient Temples, And Rafting. Kullu Is
                  Generally Coupled With Its Sister Town Manali Which Is At A
                  Much Higher Altitude And Provides More Scenic Views Of
                  Snow-Capped Mountains. Kullu Is Also Home To Bhuntar Airport
                  And Bus Junction And Is Used As The Base Town To Reach
                  Manikaran, Kasol, Malana,Naggar. Kullu Also Has Few Important
                  Temples Like The Raghunath Temple And Jagannath Devi Temple.
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
          Back To Himachal Pradesh
        </button>
      </div>
    </>
  );
}

export default Manali