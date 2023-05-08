import React from 'react'
import kod1 from '../../image/kod1.jpg';
import kod2 from "../../image/kod2.jpg";
import kod3 from "../../image/kod3.jpg";
import kod4 from "../../image/kod4.jpg";
import kod5 from "../../image/kod5.jpg";
import kod6 from "../../image/kod6.jpg";
import { useNavigate } from 'react-router-dom'

 const Kodaikanal = () => {
    const navigate=useNavigate();

    function handlechange(){
        navigate('/tamilnadu')
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
        <span>D</span>
        <span>A</span>
        <span>I</span>
        <span>K</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
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
                src={kod1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kodaikanal Lake
                </h5>
                <p className="card-text">
                  Kodaikanal Lake Is A Manmade Lake In The Kodaikanal City Which
                  Is Also Known As Kodai Lake. Vera Levinge Was The Man
                  Responsible For The Creativity And Resources Of This Lake
                  Amidst Kodaikanal Town. This Lake Was Developed By The British
                  And Early Missionaries From The USASA.The Star-Shaped Lake Is
                  Centrally Located In Kodaikanal And Is Surrounded By The Rich
                  Green Palani Hills Range The Main Watershed For The Lake. The
                  Lake Is Situated At An Elevation Of 2285m Above Sea Level And
                  Has An Average Depth Of 3.0m. The Lake Is At A Distance Of 3
                  Km From The Kodai Bus Stand.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kod2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Bear Shola Falls
                </h5>
                <p className="card-text">
                  Located At A Mere Distance Of 2 Kilometres From The Kodaikanal
                  Lake, The Bear Shola Falls Is A Popular Picnic Spot In The
                  Region. This Cascade Is A Seasonal Attraction That Comes To
                  Life In Its Fullest During The Monsoons. An Interesting Legend
                  Behind The Unique Name Of This Place Is That It Was A
                  Favourite Haunt Of A Bear Who Used To Frequent This Water Body
                  To Drink Water, Hence Imparting It The Name Bear Shola Falls.
                  Wrapped With Dense Forests Coupled With The Chirping Of Birds,
                  Bear Shola Falls Is A Little Heaven
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
                src={kod3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Pillar Rocks
                </h5>
                <p className="card-text">
                  Situated In The 'Princess Of Hill Stations', Kodaikanal, The
                  Pillar Rocks Have Become A Lovely Picnic Spot. Constituting A
                  Beautiful Mini Garden; The Place Is Named So As It Has Three
                  Vertically Positioned Boulders Reaching Up To A Height Of 400
                  Feet. The Aura Here Is Full Of Affection And Is Evidence Of A
                  Great Love Story. The 'White Cross' Which Once Existed On
                  These Rocks Represented David Gell's Excellent Tribute To
                  Love. The View Of Rocks Is Not Something To Be Missed. They
                  Stand As An Untouched Miracle For The Tourists Visiting
                  Kodaikanal.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kod4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thalaiyar Falls
                </h5>
                <p className="card-text">
                  Also Known As Rat Tail Falls, Thalaiyar Falls Is Located In
                  The Lush Green Slopes Of Palani Hill Ranges In The Dindigul
                  District, In Kodaikanal. With A Height Of 297m, It Is The
                  Highest Waterfall In Tamil Nadu, The Sixth Highest Waterfall
                  In India. There Is A View Tower In The Park At The Dum Dum
                  Rock, From Where You Can Get A Beautiful View Of The Falls And
                  The Manjalar Dam. There Is A Hiking Route Near The
                  Waterfall.The River Water Coming To The Falls Is From Perumal
                  Malai Village, Through A 9 Km Downstream And Is Said To Be
                  Clear
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={kod5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kurinji Temple
                </h5>
                <p className="card-text">
                  Kurunji Temple Is Mainly Dedicated To Lord Murugu And Is
                  Dexterously Based At A Distance Of 3 Km From The Lake.
                  Providing Delightful Views Of Small Villages, Palani Hills And
                  Northern Plains, And Carrots Plantation On The Terraced
                  Slopes, The Temple Is Also Associated With The Kurunji Flower
                  Which Blooms Once In 12 Years Carpeting The Whole Area With
                  Purple Flowers.According To The Authorities, The Flower Will
                  Next Bloom In The Year 2018. The Temple Complex Also Includes
                  A Park And A Small Shrub Garden Area
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kod6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Silver Cascade Falls
                </h5>
                <p className="card-text">
                  The Perfect Stop Over In-Between A Long Journey, These Silver
                  Cascade Falls Demand Your Attention While You Travel From
                  Kodaikanal Till Madurai. The Silver Cascade Falls Formed As A
                  Result Of The Over Flowing Of The Famous Man-Made Kodai Lake,
                  Are The Perfect Way To Have A Break While On A Long Road Trip.
                  One Can Also Take A Swim In The Waters Of The Waterfall
                  Provided The Temperature Is Right. The Fruit Sellers Selling
                  Exquisite, Mouth Watering Fruits Which You Can Buy And Enjoy
                  Under The Falls Is An Experience Unmatched.
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
          Back To TamilNadu
        </button>
      </div>
    </>
  );
}

export default Kodaikanal