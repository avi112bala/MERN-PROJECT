import React from 'react'
import c1 from '../../image/C1.jpg';
import c2 from "../../image/C2.jpg";
import c3 from "../../image/C3.jpg";
import c4 from "../../image/C4.jpg";
import c5 from "../../image/C5.jpg";
import c6 from "../../image/C6.jpg";
import { useNavigate } from 'react-router-dom';

 const Chandigarh = () => {
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
        <span>C</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>I</span>
        <span>G</span>
        <span>A</span>
        <span>R</span>
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
                src={c1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sukhna Lake
                </h5>
                <p className="card-text">
                  Nestled At The Foot Of Shivalik Hills, Sukhna Lake In
                  Chandigarh Paints A Pretty Picture. Stretching For A Distance
                  Of 3sq. Km., Sukhna Lake Is A Man-Made Lake And Is The Only
                  One Of Its Kind In The City Created In The Year 1958 By
                  Damming The Seasonal Sukhna Choe (Stream) That Flows Down The
                  Shivalik Hills. With Its Pristine Blue Water, The Lake Serves
                  As A Perfect Location For A Stream Of Morning Joggers And
                  Walkers Who Can Also Enjoy The Fresh Air. In Fact, The
                  Architect Of Chandigarh - India's First Planned City - Le
                  Corbusier Claimed That This Lake Would Be The Centre Of
                  Wellness Pursuits For The Resident.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div
              className="card mb-2"
              style={{ width: "24rem", height: "auto" }}
            >
              <img
                src={c2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Rock Garden
                </h5>
                <p className="card-text">
                  Located In Sector 1 Of Chandigarh, The Rock Garden Is A
                  Massive Open-Air Exhibition Hall That Displays Sculptures Made
                  From Urban And Industrial Wastes That Have Been Designed And
                  Executed By Nek Chand, A Former Road Inspector In Chandigarh.
                  It Is Located Between The Famous Sukhna Lake And The Capitol
                  Building And Is A Spectacle That Is Also Known As Nek Chand's
                  Rock Garden, This Massive 40-Acre Garden Is A Colourful Mosaic
                  Of Art Pieces And Sculptures.The Rock Garden Is Situated At
                  Uttar Marg In Sector 1, 1.5 Km From Sukhna Lake If You Are
                  Travelling By Cab. Buses And Auto-Rickshaws Are Also Easily
                  Available.
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
                src={c3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Rose Garden
                </h5>
                <p className="card-text">
                  Located In Sector 16 Of Chandigarh, Rose Garden Is A Blooming
                  Exhibit That Showcases Around 825 Varieties Of Flowers And
                  32,500 Varieties Of Trees And Medicinal Shrubs. Also Known As
                  Zakir Hussain Rose Garden After The Former President Of India,
                  This Garden Is Spread Over 30 Acres And Is Decked Up With An
                  Exquisite Variety Of Flowers Making It Quite Popular Among
                  Tourists And Nature Enthusiasts. The Best Time To Visit The
                  Rose Graden, Chandigarh Is Between The Months Of February And
                  March As The Flowers Are In Full Bloom During This Season. The
                  Rose Festival Also Takes Place During These Months, Making It
                  A Good Time To Visit.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={c4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Japanese Garden
                </h5>
                <p className="card-text">
                  Located In Sector 31A In Chandigarh, Japanese Garden Is A
                  Well-Groomed, Beautifully Maintained Park Which Houses A
                  Park,Water Bodies, Pagoda Towers, Waterfalls, Meditation
                  Centres, Buddha Idol And Several Other Structures. The Park
                  Has Two Phases Interconnected By An Underground Tunnel Which
                  Is Adorned With Beautiful Japanese Paintings.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={c5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Chattbir Zoo
                </h5>
                <p className="card-text">
                  Chattbir Zoo, Also Known As Mahendra Choudhary Zoological Park
                  Is A Zoological Park In Zikarpur Near Chandigarh. The Park Is
                  Home To A Vast Variety Of Animals, Birds And Reptiles.
                  Sprawling Over An Expansive Offers An Open Enclosure To The
                  Animals To Retain Their Natural Habitat Environment. The
                  Highlight Of The Zoo Is Royal Bengal Tiger.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={c6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Fun City Waterpark
                </h5>
                <p className="card-text">
                  Located On An Expanse Of 43 Acres, This Water Amusement Park
                  In Ramgarh Is The Biggest In North India. It Boasts Of One
                  Activity Pool, Three Landing Pools And A Wave Pool, A Cluster
                  Of Water Slides Of Various Shapes And Sizes, Which Makes For A
                  Delightful Ride For The Water Lovers.Other Popular Draws Are
                  The Lazy River Ride, Splash Pool, Aqua Dance, Slides Like
                  White Multi Lane, Typhoon Tunnel,White Slide, Red Dragon
                  Slide, Run Away Raft Slide And Pendulum Slide.
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

export default Chandigarh