import React from 'react'
import spi1 from '../../image/spi1.jpg';
import spi2 from '../../image/spi2.jpg';
import spi3 from '../../image/spi3.jpg';
import spi4 from '../../image/spi4.jpg';
import spi5 from '../../image/spi5.jpg';
import spi6 from '../../image/spi6.jpg';
import { useNavigate } from 'react-router-dom'

 const Spitivally = () => {


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
        <span>S</span>
        <span>P</span>
        <span>I</span>
        <span>T</span>
        <span>I</span>
        <span>V</span>
        <span>A</span>
        <span>L</span>
        <span>L</span>
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
                src={spi1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Chandratal Lake
                </h5>
                <p className="card-text">
                  Chandratal Lake Is Often Referred To As One Of The Most
                  Beautiful Lakes Located At An Altitude Of About 4300 M In The
                  Mighty Himalayas. The Stunning Lake Is Situated On The Samudra
                  Tapu Plateau In The Lahaul Region Of The Lahaul And Spiti
                  District And Is The Source Of The Chandra River. The Name
                  "Chandra Taal" (Lake Of The Moon) Comes From Its Crescent
                  Shape. This Lake Is Also One Of Two High-Altitude Wetlands Of
                  India That Have Been Designated As Ramsar Sites.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={spi2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Key Monastery
                </h5>
                <p className="card-text">
                  The Key Monastery Is A Famous Tibetan Buddhist Monastery In
                  The Lahaul And Spiti District Of India. Located At An Altitude
                  Of 4,166 Metres Above Sea Level, The Monastery Is Very Close
                  To The Spiti River In The Spiti Valley Of Himachal Pradesh In
                  India. Also Known As The Kye Monastery And Ki Monastery, It Is
                  Believed To Have Been Founded By Dromton, Who Was A Student Of
                  The Famous Teacher Atisha In The 11th Century.
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
                src={spi3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kunzum Pass
                </h5>
                <p className="card-text">
                  Kunzum Pass Or Kunzum La, As It Is Called By Locals, Is One Of
                  The Highest Motorable Mountain Passes Of India, Located At An
                  Altitude Of 4,551m Above Mean Sea Level. It Serves As A
                  Gateway To The Beautiful Spiti Valley Via Kullu And Lahaul. It
                  Lies On The Eastern Kunzum Range Of The Himalayas And Is At A
                  Distance Of 122 Km From Manali. Kunzum Lake Offers An
                  Incredible 360-Degree View Of Bara-Vista Of Chandrabhaga Range
                  And A Spectacular View Of The Spiti Valley.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={spi4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Pin Valley National Park
                </h5>
                <p className="card-text">
                  Set Amidst Semi-Frozen Rivers In The Pin Valley, The Pin
                  Valley National Park Is Situated In The Cold Desert Biosphere
                  Reserve Situated In The Lahaul And Spiti District Of Himachal
                  Pradesh. The Elevation Of The Park Ranges From About 3,500
                  Metres Near Ka Dogri To More Than 6,000 Metres At Its
                  Pinnacle. One Of The Fascinating Facilities Of Its Kind, The
                  Pin Valley National Park Is Home National Park Is Most Famous
                  For Its Incredible Trek Which Is A Delight For All Its
                  Visitors.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={spi5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Tabo Monastery
                </h5>
                <p className="card-text">
                  Standing Tall And Strong At A Dizzying Height Of 10,000 Feet,
                  The Tabo Monastery Is One Of The Oldest Monasteries Located In
                  The Tabo Village Of Spiti Valley. In Fact, It Is The Oldest
                  Monastery In India And The Himalayas That Has Been Functioning
                  Continuously Since Its Inception. This Alluring Monastery Is
                  Renowned As The 'Ajanta Of The Himalayas'.This Is Because The
                  Walls Of The Monastery Are Decorated With Fascinating Murals
                  And Ancient Paintings, Much Like The Ajanta Caves In
                  Maharashtra.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={spi6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Dhankar Lake
                </h5>
                <p className="card-text">
                  At A Distance Of 5 Km From The Dhankar Monastery That Sits
                  Dangerously On A Cliff, Lies The Dhankar Lake On The Other
                  Side Of The Mountain. It Takes About An Hour To Reach The Lake
                  After Following A Well Marked Trail From The Monastery. If You
                  Spend Enough Time At The Lake, You Can See The Sky Change
                  Colors And Reflect On The Crystal-Like Lake, Making It More
                  Spell Binding Each Time, Within A Span Of Just A Few Hours.
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

export default Spitivally