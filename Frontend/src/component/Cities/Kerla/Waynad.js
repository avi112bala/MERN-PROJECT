import React from 'react'
import wa1 from '../../image/wa1.jpg';
import wa2 from "../../image/wa2.jpg";
import wa3 from "../../image/wa3.jpg";
import wa4 from "../../image/wa4.jpg";
import wa5 from "../../image/wa5.jpg";
import wa6 from "../../image/wa6.jpg";
import { useNavigate } from 'react-router-dom'

const Waynad = () => {

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
        <span>W</span>
        <span>A</span>
        <span>Y</span>
        <span>N</span>
        <span>A</span>
        <span>D</span>
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
                src={wa1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Banasura Sagar Dam
                </h5>
                <p className="card-text">
                  Lying In The Lap Of The Banasura Hills In The Wayanad District
                  Is The Picturesque Banasura Sagar Dam. Banasura Dam Is The
                  Largest Earthen Dam In The Country And The Second-Largest In
                  Asia. The View Of The Sprawling Reservoir From The Top Of The
                  Dam Is Breathtaking. Adventures Like Speed Boating Are Readily
                  Available, And A Trek Up To The Banasura Peak Is Filled With
                  Streams, Diverse Flora, Fauna, Lush Tropical Green And
                  Majestic Waterfalls. An Earthen Dam, Also Known As An
                  Embankment Dam Is Created By Placing Mounds Of Clay, Sand,
                  Rock Or Soil. The View Of Banasura Lake From The Top Of The
                  Hill Is Mesmerising.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={wa2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Wayanad Wildlife Sanctuary
                </h5>
                <p className="card-text">
                  Wayanad Wildlife Sanctuary Is The Second Largest Wildlife
                  Sanctuary In Kerala And Comprises Of Rare As Well As
                  Endangered Species Of Both Flora And Fauna. It Is Surrounded
                  By The Protected Areas Of Mudumalai In Tamil Nadu As Well As
                  Nagarhole And Bandipur In Karnataka. Founded In The Year 1973,
                  The Wildlife Sanctuary Is An Integral Part Of The Nilgiri
                  Biosphere Reserve Which Was The First Biosphere Out Of The 14
                  Present In India. The Sanctuary Is Spread Over An Area Of 345
                  Square Km And Comprises Of Two Parts Namely Upper Wayanad And
                  Lower Wayanad. Eucalyptus, As Well As Bamboo Trees, Are Grown
                  In The Region.
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
                src={wa3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Stay In A Treehouse
                </h5>
                <p className="card-text">
                  One Of The Best Things To Do In Kerala Is To Stay In A
                  Treehouse. And There Is No Better Place In The State Than
                  Wayanad. You Can Find Several Packages In The City Where You
                  Can Stay In The Pretty Wooden House And As Part Of The
                  Package, You Can Also Enjoy A Bonfire And Indulge In
                  Activities Like Rock Climbing, Rappelling, Nature Walks Etc.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={wa4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Soochipara Falls
                </h5>
                <p className="card-text">
                  Also Known As Sentinel Rock Waterfalls, Soochipara Falls Is A
                  Three-Tiered Waterfall Situated In Vellarimala, Wayanad.
                  Surrounded By Deciduous, Evergreen And Montane Forests, This
                  Waterfall Is Regarded As One Of The Best Waterfalls. The Drive
                  From Meppadi To Sentinel Rock Waterfalls Provides Visitors
                  With Scenic Views Of Some Of The Best Tea Estates In Wayanad.
                  This Enchanting Waterfall Is 200 Meters High That Also Offer A
                  Cliff Face, Ideal For Rock Climbing. Also, Since The Water
                  Falling From The Waterfall Forms A Large Pool, One Can Enjoy
                  Swimming And Bathing In It. The Water Falling From Soochipara
                  Later Joins Chulika River Aka Chaliyar River After Hills From
                  Kerela And Tamil Nadu.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={wa5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Vythiri
                </h5>
                <p className="card-text">
                  Vythiri Is A Small Town Located In The Wayanad District,
                  Surrounded By Lush Rainforest. It Is Known For Its Spice
                  Plantations And Indigenous Tribal Communities. It Is A Tourist
                  Favourite For Adventure Sports, Trekking, And Relaxing Amidst
                  The Serene Beauty Of The Town. Vythiri Receives The Highest
                  Rainfall In The District And Is Recorded As Receiving The
                  Second-Highest Amount Of Rain In The World. The Months Of
                  June-September Receive The Highest Rainfalls. Because Of Its
                  Height, At 700 Meters Above Sea Level, This Is One Of The
                  Colder Regions In Wayanad And Is An All-Weather Destination.
                  Vythiri Houses The Pookot Lake; Wherein One Can Enjoy A
                  Relaxing Boat Ride And Kayaking. Trekking A Tourist Favourite
                  Till The Top Of Lakkidi, A Village 5 Kms From Vythiri, From
                  Where One Can Enjoy The Breathtakingly Stunning View Of The
                  Valley Below.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={wa6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Koottamunu Glass Temple
                </h5>
                <p className="card-text">
                  An Important Pilgrimage For Jains, Koottamunu Glass Temple Was
                  Created To Honor The Famous Jain Saint Parshawanatha Swami.
                  Situated 22 Km From Kalpetta On The Hill Side Vellarimala,
                  Devotees Come Here To Pay Their Respect And Meditate. The
                  Interior Of The Temple Is Quite Tantalizing Decorated With
                  Mirrors Reflecting The Image Of The Idols Inside The Main
                  Temple. A Perfect Getaway From All The Usual Sightseeing In
                  Wayanad, This Temple Is Located In The Hills Of Vellarimala.
                  The Glass Temple Truly Showcase Its Name Since It Is Filled
                  With Thousands Of Glass Mirrors, And Is Perfect For An
                  Awe-Inspiring Experience. It Is A Photographer Delight Since
                  The Temple Is Beautiful And Unique In Its Own Sense, Nestled
                  In The Green Hills It Is A Delight For Nature Lover As Well.
                  There Is No Entry Fee To Enter Into The Premises, To Give You
                  A Delightful Experience. Located 20 Km Away From The Kalpetta,
                  You Can Reach Here Via Local Taxi Or Cabs. The Best Time To
                  Visit Here Is From October To May.
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

export  default Waynad