import React from 'react'
import kasol1 from '../../image/kasol1.jpg';
import kasol2 from "../../image/kasol2.jpg";
import kasol3 from "../../image/kasol3.jpg";
import kasol4 from "../../image/kasol4.jpg";
import kasol5 from "../../image/kasol5.jpg";
import kasol6 from "../../image/kasol6.jpg";
import { useNavigate } from 'react-router-dom'

 const Kasol = () => {

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
        <span>O</span>
        <span>L</span>
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
                src={kasol1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Magic Valley
                </h5>
                <p className="card-text">
                  Magic Valley, Officially Known As Waichin Valley, Is A Hidden
                  Gem In Himachal Pradesh, Located Above Malana Village At An
                  Altitude Of 2,700m. An Absolute Treat For Nature And Adventure
                  Lovers, Magic Valley Is Known For Its Views Of The Majestic
                  Snow-Covered Himalayas Including Tiger Mouth Peak And Khiksa
                  Thaj Glacier, Gushing Waterfalls, Dense Coniferous Forests And
                  Streams.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kasol2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sar Pass Trek
                </h5>
                <p className="card-text">
                  Endowed With Diverse Terrain And Rich In Nature’s Beauty, Sar
                  Pass Trek Is A Perfect Trek Destination For Beginners.Steeped
                  In Great Beauty, The Trail Passes Through Thick Forests, Lush
                  Green Meadows, Rustic Villages, And Snow Clad Mountains
                  Gracing The Backdrop.
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
                src={kasol3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Pin Parvati Pass
                </h5>
                <p className="card-text">
                  Pin Parvati Pass Serves As A Perfect Destination For The
                  Trekkers Seeking Challenging Adventure. It Is One Of An
                  Amazing Trans Himalayan Trek That Will Not Only Leave
                  Spellbound By Its Beauty But Also Gushing With Adrenaline With
                  The Challenges It Throws At You
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kasol4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kheerganga Trek
                </h5>
                <p className="card-text">
                  Kheer Ganga (3050 Meters) Lies At The Extreme End Of Parvati
                  Valley And The Last Inhibited Village While Trekking To Pin
                  Valley Via Pin-Parvati Pass. Kheerganga's Panoramic Skies And
                  Vast Greenery Are A Much-Needed Delight To The Trekker's Eyes
                  And Especially The Tired Legs. It Is A Holy Place With A Hot
                  Water Spring, A Small Temple Of Lord Shiva And A Bathing Tank.
                  It Makes A Rare Combination For Any Trekker To Bath In Hot
                  Spring Water When Everything Is Covered By Snow.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={kasol5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  MANIKARAN GURUDWARA
                </h5>
                <p className="card-text">
                  Believed To Be Visited Once By The First Religious Leaders Of
                  The Sikhs, Guru Nanak, The Gurudwara At Manikaran Sahib Is One
                  Of The Most Revered Pilgrimage Sites In Sikhism And Is One Of
                  The Best Places To Visit In Kasol. Associated With A Lot Of
                  Legends, The Hot Springs Here Are Considered To Be Sacred.
                  That Is The Reason Why The Offerings To God Here Are Cooked In
                  These Hot Springs And Are Consumed As Divine.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kasol6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Tosh Village
                </h5>
                <p className="card-text">
                  Located At An Altitude Of 2,400m Above Sea Level, Tosh Is A
                  Small Village Located On The Banks Of River Tosh. Situated At
                  One Edge Of The Parvati Valley, Tosh Is An Offbeat Destination
                  In Kasol That Attracts A Lot Of Tourists From Across The
                  Country Because Of Its Scenic Beauty. The Trek To Tosh Starts
                  From The Base Of Kheerganga And Is One Of The Most Scenic
                  Routes In The Valley As You Walk Side By Side The Rivulet Tosh
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

export default Kasol
