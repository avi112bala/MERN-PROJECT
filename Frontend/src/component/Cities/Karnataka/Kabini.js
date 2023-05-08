import React from 'react'
import kab1 from '../../image/kab1.jpg';
import kab2 from "../../image/kab2.jpg";
import kab3 from "../../image/kab3.jpg";
import kab4 from "../../image/kab4.jpg";
import kab5 from "../../image/kab5.jpg";
import kab6 from "../../image/kab6.jpg";
import { useNavigate } from 'react-router-dom';

 const Kabini = () => {
        const navigate=useNavigate();

        function handlechange(){
            navigate('/karnataka')
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
        <span>B</span>
        <span>I</span>
        <span>N</span>
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
                src={kab1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kabini River: Spend A Quaint Time
                </h5>
                <p className="card-text">
                  Another One On The List Of Tourist Places In Kabini Is A
                  Famous River. Kabini River Is A Major Source For Boating Along
                  The Backwaters For An Absolute Dreamlike Experience. Boating
                  Down The Kabini River Is A Treat For Eyes With Jaw-Dropping
                  Scenic Views In The Backdrop. The Visual Sight Of A Few
                  Animals Strolling Around The Forest, The Changing Hues In The
                  Skies And The Birds Flying Back To Their Nests Is Absolutely
                  Surreal.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kab2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kabini Wildlife Sanctuary
                </h5>
                <p className="card-text">
                  Kabini Wildlife Sanctuary Is A Gift To Nature And Animal
                  Lovers Who Want To Experience The Rare Species Of Flora And
                  Fauna. It Is One Of The Other Best Places To See In Kabini.
                  Nestled On The Banks Of Kabini River, This Sanctuary With
                  Awe-Inspiring Diversity Should Definitely Be On You Travel
                  Itinerary. Spread Across 55 Acres Of Lush Greenery, This
                  Wildlife Shelter Is An Essential Part Of Nagarhole National
                  Park And Is Known For Housing Around 250 Species Of Birds
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
                src={kab3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Rameshwara Temple
                </h5>
                <p className="card-text">
                  Rameshwara Temple Is One Of The Other Best Places To Visit In
                  Kabini. Located On The Banks Of The Lakshmana Tirtha River,
                  The Temple Has Lord Shiva As Its Idol. It Is Visited By A
                  Large Number Of Devotees On The Occasion Of Shivaratri. Make
                  Sure To Visit This Famous Holy Place On Your Trip To Kabini.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kab4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Jungle Safari
                </h5>
                <p className="card-text">
                  A Jungle Safari Through The Kabini Region Of The Nagarhole
                  National Park Will Bring You To The Heart Of The Dense Foliage
                  Where Some Of The Most Majestic Mammals Of Asia Live. You Can
                  Spot Herds Of Elephants, Spotted Deer, Indian Gaur, Wild Boar,
                  Sambar Deer, Tigers And Even Black Leopards On A Safari
                  Through Kabini. Apart From The Fauna, The Landscape Itself Is
                  A Spectacular One. The Riotous Green Foliage Grows Unchecked
                  In These Parts Of The Forest And Offers A Pleasant Contrast To
                  The City Life
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={kab5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Stay At Wildlife Resorts
                </h5>
                <p className="card-text">
                  The Picturesque Surroundings And Uninhibited Reign Of Nature,
                  Make Kabini A Hub Of Wildlife Resorts And Lodges. You Can Book
                  A Lodge Bang In The Heart Of The Forest Like The Kaav Safari
                  Lodge Or Choose To Stay By The Banks Of A River And Book
                  Kabini Springs Resort. If You Are Interested In History, Then
                  You Might Want To Stay At Kabini River Lodge As It Once Served
                  As The Hunting Headquarters For The Maharaja Of Mysore
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kab6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kabini Dam
                </h5>
                <p className="card-text">
                  The Kabini Dam Sits On Top Of The Kabini River And Has Today
                  Become A Major Picnic Destination For Locals And Tourists
                  Alike. The Water Collected In The Reservoir Offers Dramatic
                  Views Which Are Elevated By The Surrounding Jungles. You Can
                  Sit At The Dam Site And See Colourful Birds Flying In And Out
                  Of The Tree Canopies And Animals Grazing On The Edges Of The
                  Forest. The Waters Of The Dam Also Offer Excellent
                  Opportunities To Enjoy Colourful Vistas Of The Sun As It Sets
                  Into The Horizon.
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
          Back To Karanataka
        </button>
      </div>
    </>
  );
}

export default Kabini