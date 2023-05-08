import React from 'react'
import ram1 from '../../image/ram1.jpg';
import ram2 from "../../image/ram2.jpg";
import ram3 from "../../image/ram3.jpg";
import ram4 from "../../image/ram4.jpg";
import ram5 from "../../image/ram5.jpg";
import ram6 from "../../image/ram6.jpg";
import { useNavigate } from 'react-router-dom'

 const Ramewashwaram = () => {

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
        <span>R</span>
        <span>A</span>
        <span>M</span>
        <span>E</span>
        <span>S</span>
        <span>W</span>
        <span>A</span>
        <span>R</span>
        <span>A</span>
        <span>M</span>
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
                src={ram1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Five Faced Hanuman Temple
                </h5>
                <p className="card-text">
                  Highly Revered By The Hindus, The Temple Of Five Faced Hanuman
                  Is Only 2 Km From The Ramanathaswamy Temple Also Known As
                  Panchmukha Anjaneya It Is Believed That Hanumana Revealed His
                  Five-Faced Form For The First Time In This Place. The Statue
                  Of Lord Hanuman Is Smeared With Sindoor And Worshipped With
                  Utmost Devotion.The Temple Here Enshrines The Statues Of Rama,
                  Laxman And Sita. There Is A Floating Stone In The Temple Which
                  Is Believed To Have Been Used During Sethu Bandhanam As
                  Mentioned In The Ramayana.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ram2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Villondi Teertham
                </h5>
                <p className="card-text">
                  Literally Meaning The Buried Bow, Villoondi Tirtham Is A
                  Quaint Religious Destination Where Lord Rama Dipped His Bow
                  Into The Seawater To Quench His Consort Sita’s Thirst. It Is
                  Said That Before Burying The Bow Here Lord Rama Shot An Arrow
                  Into Earth From Where A Stream Of Sweet Water Emerged To
                  Quench Sita’s Thirst. There Is Ekantha Ramar Temple Which Is
                  Constructed On The Same Place Where Lord Rama Took Rest Before
                  Launching Attack On Lanka.
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
                src={ram3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sri Ramanathaswamy Temple
                </h5>
                <p className="card-text">
                  This Hindu Temple, Dedicated To Lord Shiva, Was Built In The
                  17th Century Exhibiting Spectacular Architectural Beauty.It Is
                  One Of The Twelve Jyotirlinga And Is Said To Have Been Built
                  By Lord Rama Himself. Hence, It Is Accounting To One Of The
                  Popular Tourist Attractions In Rameshwaram And Holds
                  Importance In The Hindu Culture. This Massive Structure Has
                  The Longest Temple Corridor In The World With 1200 Granite
                  Pillars.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ram4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Adam’s Bridge
                </h5>
                <p className="card-text">
                  Also Known As “Rama’s Bridge Or Rama Setu”, It Is A Trail Of
                  Limestone Shoals Connecting The Southernmost Part Of Indian
                  And Northwestern Coast Of Sri Lanka. The Importance Of This
                  Enchanting Bridge In Hindu Mythology And Islamic Legend Makes
                  It One Of The Best Tourist Spots In Rameshwaram. This
                  Submerged Bridge Is Said To Be About Eighteen Thousand Years
                  Old.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ram5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ariyaman Beach
                </h5>
                <p className="card-text">
                  One Of The Serene Beaches In Rameshwaram Attracts People From
                  All Walks Of Life. The Picturesque Water And Enthusiastic
                  Water Sports Make It An Ideal Location For Short Day Trips.
                  This Is One Of The Best Tourist Spots In Rameshwaram Dotted
                  With Tall, Beautiful Trees. One Can Enjoy Boating,
                  Parasailing, And Many Other Adventure Sports On The Beach.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ram6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Annai Indira Gandhi Road Bridge
                </h5>
                <p className="card-text">
                  One Of The Spectacular Bridges Of India Is The Best Example Of
                  Architectural Marvel And Excellence. Even Though The Bridge Is
                  Built In The Most Corrosive Environment And Cyclone Prone
                  High-Wind Velocity Zone, It Still Stands Tall And Strong. It
                  Is Claimed To Be India’s First Sea Bridge. Also Called “Pamban
                  Bridge”, It Is The Longest Bridge In Southern India.
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

export default Ramewashwaram
