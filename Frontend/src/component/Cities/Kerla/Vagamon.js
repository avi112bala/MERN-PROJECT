import React from 'react'
import va1 from '../../image/va1.jpg';
import va2 from "../../image/va2.jpg";
import va3 from "../../image/va3.jpg";
import va4 from "../../image/va4.jpg";
import va5 from "../../image/va5.jpg";
import va6 from "../../image/va6.jpg";
import { useNavigate } from 'react-router-dom'

 const Vagamon = () => {

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
        <span>V</span>
        <span>A</span>
        <span>G</span>
        <span>A</span>
        <span>M</span>
        <span>O</span>
        <span>N</span>
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
                src={va1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ulipooni Wildlife Sanctuary
                </h5>
                <p className="card-text">
                  Located 10km Away From Vagamon, Ulipooni Makes Up For A
                  Perfect Picnic Spot. It Is Away From The Noisy Crowd Of The
                  City, You Might Spot Couples Boating Here.It Is A Peaceful
                  Romantic Destination, A Good Place To Spend A Day With Your
                  Family Or Spouse.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={va2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Vagamon Meadows
                </h5>
                <p className="card-text">
                  The Lush Green Grassland Of Vagamon, Just Being There,
                  Surrounded By The Hills Of Vagamon, Greenery, Cool Breeze
                  Which Will Take Away Your Worries And Stress As They Blow By
                  You.
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
                src={va3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Vagamon Falls
                </h5>
                <p className="card-text">
                  Amidst Dense Vegetation And Beautiful Surroundings, Vagamon
                  Falls Is A Famous Picnic Spot. The Sight Of The Waterfall
                  Gushing Down The Slopes Is A Treat To The Eyes And The Scenic
                  Beauty A Paradise For Photographers. The Waterfall Is Also
                  Called Palaruvi And Is A Perfect Attraction For Nature Lovers.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={va4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Pattumala Church
                </h5>
                <p className="card-text">
                  Pattumalai Church, A Marvellous Roman Catholic Latin Rite
                  Church, Was Designed By J P Bright. The Architectural Beauty
                  Of The Structure Amidst Lush Green Tea Plantations Is A Visual
                  Treat. In Fact, The Name ÐPattumalaiÓ, Meaning A Hill Covered
                  With Silk, Is An Apt Description Of The Attraction Which Is
                  Situated On An Elevation And Offers A Splendid View Of The
                  Plantations Down The Slope.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={va5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Mundakayam Ghat
                </h5>
                <p className="card-text">
                  Mundakayam Ghat Is A Ghat Passing Through A Mesmerizing
                  Terrain In The Region. It Is Famous For Bird Watching And
                  Nature Walks. One Can Get A Beautiful Top View Of The Scenic
                  Location As Well. The Terrain Also Makes The Ghat An Apt
                  Location For Paragliding.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={va6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Marmala Waterfalls
                </h5>
                <p className="card-text">
                  Located At A Distance Of Few Kms From Erattupetta In Kottayam
                  Inside A Private Rubber Estate, Marmala Waterfalls Are
                  Popularly Known As The ‘Enchantress Of The Jungle’. Plummeting
                  From A Height Of 200 Feet, The Unblemished Clear Waters Create
                  An Aura Of Mist Around Them. The Tantalising Waterfalls Splash
                  Into A 12 Feet Pond And Run Down To Join The River Teekoy.
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

export default Vagamon