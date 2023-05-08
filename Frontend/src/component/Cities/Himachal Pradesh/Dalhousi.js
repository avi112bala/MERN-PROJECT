import React from 'react'
import dal1 from '../../image/dal1.jpg';
import dal2 from "../../image/dal2.jpg";
import dal3 from "../../image/dal3.jpg";
import dal4 from "../../image/dal4.jpg";
import dal5 from "../../image/dal5.jpg";
import dal6 from "../../image/dal6.jpg";
import { useNavigate } from 'react-router-dom'

 const Dalhousi = () => {

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
        <span>D</span>
        <span>A</span>
        <span>L</span>
        <span>H</span>
        <span>O</span>
        <span>U</span>
        <span>S</span>
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
                src={dal1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Panchpula
                </h5>
                <p className="card-text">
                  Surrounded By A Cover Of Green Pine And Deodar Trees,
                  Panchpula Is A Popular Picnic Spot In Dalhousie, Located At A
                  Distance Of 3.5 Km From Gandhi Chowk In Dalhousie. It Is Best
                  Known For Saptdhara Waterfall, The Starting Point Of The Ganji
                  Pahari Trek And Activities Like Ziplining, And Burma Bridge.A
                  Samadhi (Monument) Is Built Near Panchpula In Memory Of The
                  Great Revolutionary, Sardar Ajit Singh (Uncle Of Martyr Bhagat
                  Singh), Who Breathed His Last Here.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={dal2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Khajjiar
                </h5>
                <p className="card-text">
                  Often Referred To As 'Mini-Switzerland Of India', Khajjiar Is
                  A Small Town Located Close (20km) To Dalhousie And Is Great
                  For A Day Or Overnight Trip. Khajjiar Is Known For Its Picture
                  Perfect Grassy Meadows.There Is A Small Lake In The Middle Of
                  The Meadow And You Could Enjoy The Scenery By Yourself Or Take
                  Part In Some Of The Adventure Sports Including Paragliding,
                  Zorbing, And Horse-Riding.Located At An Altitude Of 6,500
                  Feet, Khajjiar Is Also Known For Its Nine-Hole Golf Course
                  Which Is Nestled In The Midst Of Lush Greenery And A
                  Breathtaking Landscape
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
                src={dal3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kalatop Wildlife Sanctuary
                </h5>
                <p className="card-text">
                  Thick Deodar Foliage, A Plethora Of Wildlife, Snowcapped
                  Mountains, Carpets Of Verdant Grasslands And Easy On The Eye
                  Streams Of Fresh Water Make Up The Kalatop Wildlife Sanctuary.
                  Also Called The Kalatop Khajjiar Sanctuary, It Is Located In
                  The Picturesque Hilly Chamba District Of Himachal Pradesh.The
                  Name Kalatop Means 'Black Cap', Which Refers To The Thick,
                  Black Forest Cover On The Highest Hilltop In The Sanctuary.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={dal4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Satdhara Falls
                </h5>
                <p className="card-text">
                  The Stunning Satdhara Falls Is Situated In Dalhousie, Himachal
                  Pradesh. It Is Surrounded By Fantastic Views Of The Chamba
                  Valley - With Snow-Covered Ranges And Fresh, Green Pine And
                  Deodar Trees. 'Satdhara' Means Seven Springs. This Waterfall
                  Brings Together The Waters Of Seven Beautiful Springs - Their
                  Meeting Point Being 2036masl, Cascading Magnanimously In
                  Unison. The Water Here Is Said To Contain Mica, Which Has
                  Medicinal Properties To Cure Skin Diseases
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={dal5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  St. Patricks Church
                </h5>
                <p className="card-text">
                  An Old-World Charm, St Patricks Church Is One Of The Largest
                  Churches In Dalhousie. Located Near Balloon Falls,Dalhousie
                  Cantonment, The Church Is Located 2 Km Away From The Main Bus
                  Stand On Military Hospital Road. Owing To Its British
                  Architecture, It Is Known To Have Been Established By A Group
                  Of British Army Officers In 1909. Hosting Over 300 People
                  Every Sunday, The Dome-Shaped Shrine Attracts Not Just The
                  Devotees But Also Many History Buffs And Architecture Lovers
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={dal6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ganji Pahari Trek
                </h5>
                <p className="card-text">
                  Ganji Pahari Is A Scenic Hill Located Near Dalhousie. The 1-2
                  Hour Trek To Ganji Pahari Starts From Panchpula (About 3.5km).
                  The Name Ganji Pahari Was Derived From Its Salient Feature
                  Which Is The Complete Absence Of Flora On The Hill-'Ganji'
                  Meaning Bald In The Local Language, And 'Pahari' Meaning Hill.
                  During Winters, The Same Terrain Is Covered In A Thick Coat Of
                  Snow. A Tour To Ganji Pahari Can Also Be Accompanied By A
                  Guide Whom Tourists Can Hire From Dalhousie But It Is Not
                  Mandatory
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

export default Dalhousi