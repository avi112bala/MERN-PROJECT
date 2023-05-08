import React from 'react'
import chen1 from '../../image/chen1.jpg';
import chen2 from "../../image/chen2.jpg";
import chen3 from "../../image/chen3.jpg";
import chen4 from "../../image/chen4.jpg";
import chen5 from "../../image/chen5.jpg";
import chen6 from "../../image/chen6.jpg";
import { useNavigate } from 'react-router-dom'

 const Chennai = () => {

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
        <span>C</span>
        <span>H</span>
        <span>E</span>
        <span>N</span>
        <span>N</span>
        <span>A</span>
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
                src={chen1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Marina Beach
                </h5>
                <p className="card-text">
                  Situated In The City Of Chennai In Tamil Nadu, Marina Beach Is
                  A Natural Urban Beach Along The Bay Of Bengal. The Beach Is
                  Stretched Out To A Distance Of 13 Kilometres Making It The
                  Longest Natural Urban Beach In The Country, Second Largest In
                  The World And Also The Most Crowded Beach In India With Almost
                  30,000 Visitors A Day. With A White Sandy Shore That Looks As
                  Though Extending To Infinity, The Landscape Of Marina Beach Is
                  A Mesmerising And Serene Sight To Behold
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={chen2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Marundeeswarar Temple
                </h5>
                <p className="card-text">
                  The Magnificent Marundeeswarar Temple, In Tiruvanmiyur, Near
                  Chennai Has The Temple Deity Shiva In The Form Of Marundeeswar
                  Or Aushadeeswarar, The God Of Medicines. A Fine Specimen Of
                  Dravidian Architecture, This Temple Is A Must Visit For Anyone
                  Visiting Chennai Or Nearby Cities. Glorified In The 7th-8th
                  Century By Nayanars (Saivite Saints), Tirugnana Sambandar, And
                  Appar, The Temple Was Expanded By The Chola Kingdom In The
                  11th Century
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
                src={chen3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Parasailing
                </h5>
                <p className="card-text">
                  If You Think The City Of Chennai Is All About Glitzy Temples
                  And Serene Beaches, Look Deeper Cause The Uber City Is Home To
                  One Of The Most Adventurous Sports Of All Times - Parasailing.
                  Unlike Several Other Water Sports, This One Is Not For The
                  Faint Hearted. Parasailing Allows You To Sail Above The Water
                  With A Safely Harnessed Parachute Tied To Your Back. The
                  Forward Moving Motor Speed Boat Fills The Parachute With Air
                  Allowing The Participant To Gloat Over The Turquoise Blue
                  Ocean
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={chen4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Scuba Diving
                </h5>
                <p className="card-text">
                  Chennai Could Get Quite Hot In The Summer And Beating The Heat
                  Would Be The Top Priority In Summers. Then Why Not Dive Into
                  The Bay Of Bengal Somewhere Off The Coast Of Chennai.
                  Discovering A Totally Different World Under The Surface Of The
                  Sea And Cooling Yourself At The Same Time Is The Best Deal
                  About Chennai.To Experience Scuba Diving, You Will Need To
                  Undergo Proper Training And Get Acquainted With Scuba
                  Equipments Like Masks, Oxygen Tanks, Snorkel, Fins,
                  Regulators, Weights, Buoyancy Control Devices Etc.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={chen5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Surfing
                </h5>
                <p className="card-text">
                  Getting In The Water And Riding The Waves On A Surfboard Is
                  Not A Thing That Everyone Can Do. But Some Hours Of Practice
                  Can Make That Joy Possible. There Are A Number Of Surfing
                  Schools That Offer Courses And Help You Tame The Waves Under
                  Your Feet.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={chen6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Jungle Safari
                </h5>
                <p className="card-text">
                  The Tropical Climate Of Chennai Has Blessed The Land With
                  Ample Amount Of Lush Greenery And Equally Rich Wildlife.
                  Safari In Chennai’s Wildlife Parks Award The Visitors With
                  Some Amazing Experiences Around Our Neighbours Of Nature.
                  Interacting With The Wild Animals Makes Us Realize The True
                  Nature Of Wilderness. There’s A Lot To Learn And Understand
                  From Animals.
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

export default Chennai