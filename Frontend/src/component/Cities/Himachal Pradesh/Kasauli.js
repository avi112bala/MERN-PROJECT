import React from 'react'
import ka1 from '../../image/ka1.jpg';
import ka2 from "../../image/ka2.jpg";
import ka3 from "../../image/ka3.jpg";
import ka4 from "../../image/ka4.jpg";
import ka5 from "../../image/ka5.jpg";
import ka6 from "../../image/ka6.jpg";
import { useNavigate } from 'react-router-dom';

 const Kasauli = () => {

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
        <span>K</span>
        <span>A</span>
        <span>S</span>
        <span>A</span>
        <span>U</span>
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
                src={ka1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Monkey Point Kasauli
                </h5>
                <p className="card-text">
                  Kasauli's Monkey Point Is The Highest Point Of The Town And Is
                  One Of The Most Famous Attractions Of The Place. Located At A
                  Mere Distance Of 4 Kilometres From The Bus Stand, This
                  Destination Has A Small Temple Dedicated To Lord Hanuman That
                  Remains Crowded With Monkeys. Being The Highest Point Of The
                  Town, The Monkey Point Offers A Bird's Eye View Of The Nearby
                  Cities Of Chandigarh, Kalka, Panchkula And Sutlej River From
                  This Point.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ka2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sunset Point
                </h5>
                <p className="card-text">
                  Sunset Point In Kasauli Is A Popular Yet A Very Quiet Spot To
                  Enjoy The Sunset, Pine-Laid Landscapes, Valleys And Sceneries.
                  Nearby To The Sunset Point, Is A Trail Or A Path Known As The
                  Lover's Lane Which Is An Only More Quiet Walk Through The
                  Valleys And Some Of Kasauli's Most Calm And Breath-Taking
                  Sceneries.However It Is Preferable To Leave The Area Before
                  Its Gets Dark Or Late In The Evening Since It Tends To Be A
                  Rather Off-Beat Place With Not To Many Facilities.
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
                src={ka3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  PTimber Trail
                </h5>
                <p className="card-text">
                  Wrapped In The Quiet Charms Of Himachal Pradesh, Timber Trail
                  In The City Of Kasauli Is A Quiet Little Hill Station. The
                  Destination Is An Emerald Beauty With Its Many Pine And
                  Coniferous Trees. Perhaps The Most Sought-After Destination
                  Around Kasauli's Parwanoo, Timber Trail Is A Favourite Among
                  The Backpacker Community And Students Alike.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ka4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Gurudwara Shri Guru Nanakji
                </h5>
                <p className="card-text">
                  This Gurudwara Is An Important Religious Center As Well As A
                  Favorite Tourist Spot. Other Than Daily Prayers And
                  Programmes, A Special Programme Is Held On The Sundays. The
                  Gurudwara Also Offers Accommodation Facilities
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ka5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Baptist Church
                </h5>
                <p className="card-text">
                  Built In The Year 1923 By The Britishers, The Architecture Of
                  This Church Is Influenced By A Blend Of Indian And Victorian
                  Styles. However The Church Was Damaged By A Fire In 2008 And
                  All Internal Furnishings Were Destroyed.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ka6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Gilbert Trail
                </h5>
                <p className="card-text">
                  Gilbert Trail Is An Easy Hike Of 1.5 Kilometres. Starting From
                  Kasauli Club, The Trail Ends At The Air Force Station,Close To
                  Sunset Point. The Path Is Wide In The Strat And Gets Narrow
                  After A While. Gilbert Tail Is Known For Its Views And
                  Different Species Of Birds.
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
};

export default Kasauli