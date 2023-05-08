import React from 'react'
import po1 from '../../image/po1.jpg';
import po2 from "../../image/po2.jpg";
import po3 from "../../image/po3.jpg";
import po4 from "../../image/po4.jpg";
import po5 from "../../image/po5.jpg";
import po6 from "../../image/po6.jpg";
import { useNavigate } from "react-router-dom";


const Poover = () => {


  const navigate = useNavigate();

  function handlechange() {
    navigate("/kerala");
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
        <span>P</span>
        <span>O</span>
        <span>O</span>
        <span>V</span>
        <span>E</span>
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
                src={po1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Poovar Beach
                </h5>
                <p className="card-text">
                  A Stunning Beach With Golden Sand And Gentle Breeze Nestled
                  Between The Gorgeous River Neyyar And Arabian Sea. The Swaying
                  Coconut Palms Add To The Beauty Of This Picture Perfect Beach
                  Which Is Only Accessible Via A Water Taxi Alone. Offering
                  Perfect Environs For Relaxing And Unwinding, The Beach Does
                  Not Indulge In Water Sports Due To The Active Fishing
                  Population.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card mb-2" style={{ width: "24rem", height: "auto" }}>
              <img
                src={po2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thirparappu Falls
                </h5>
                <p className="card-text">
                  Located At A Distance Of About 55 Kilometres From Kanyakumari,
                  The Cascading Waters Of The Tirparappu Falls Make Up For An
                  Enchanting Sight. This Waterfall Is A Manmade One And Falls
                  From A Height Of 50 Feet. The Water Collects In A Quaint Pool
                  Below Which Is An Ideal Place To Frolic Around, Especially For
                  Children. The Falls Are Surrounded By Thick Green Foliage And
                  Indigenous Fauna, Which Make It A Nature Lover's Paradise.
                  
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
                src={po3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Boat Race
                </h5>
                <p className="card-text">
                  Adrenaline Rushing Snake Boat Races Are A Specialty Of Kerala.
                  Poovar During The Local Boat Races Is A Sight To Be Held. The
                  Usually Calm And Tranquil Environment Is All Charged Up And
                  One Can See The Enthusiastic Festivity Mood All Around.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={po4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kovalam Beach
                </h5>
                <p className="card-text">
                  Famous For Its Esorts And Ayurvedic Massage Centre, Kovalam Is
                  A Coastal Town Located Around 13 Km From Thiruvananthapuram In
                  Kerala. The Largest Beach In Kovalam Is The Lighthouse Beach
                  That Features A 30-Metre Tall Lighthouse. The Other Two
                  Adjacent Beaches Are Samudra Beach And Hawa Beach. All These
                  Three Beaches Are Crescent-Shaped Shallow Water And Low Tidal
                  Beaches. Earlier A Fishing Village, Kovalam Started Attracting
                  Tourists In The 1930s And Shot To Fame In The Hippie Era Of
                  1970s. It Still Sees The Influx Of Tourists From Israel And
                  Europe.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={po5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Vizhinjam
                </h5>
                <p className="card-text">
                  Vinzhinjam Is A Popular Fishing Village Located Only 17 Kms
                  From The City Centre Of Thiruvananthapuram. You Can Witness A
                  Rare And Curious Sight Of Hundreds Of Fishing Boats Lined
                  Across The Fishing Harbour As They Cruise In Perfect Harmony
                  Without Colliding Into Each Other! Its Geographical Setting
                  Makes It A Natural Port And Quite An Important One. Other Than
                  Its Political And Economic Significance, Vinzhinjam Is A Very
                  Popular Tourist Attraction And One Of The Favourite Getaways
                  Of The South
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={po6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  The Great Elephant Race
                </h5>
                <p className="card-text">
                  Have You Ever Imagined What It Would Be Like To Experience The
                  Celebrated Tradition Of An Elephant Race? Become A Part Of
                  Such A Colourful Extravaganza With The Great Elephant Race
                  Organised By The Kerala Tourism Department. This Event Takes
                  Place In The Month Of January And Lasts For A Period Of Four
                  Days And Features A Grand Marching Of Around 101 Elephants
                  From Thrissur To Kovalam Beach Amidst A Lot Of Enthusiasm,
                  Splendour And Merriments.
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

export default Poover
