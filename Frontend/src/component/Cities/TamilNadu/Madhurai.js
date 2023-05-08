import React from 'react'
import madh1 from '../../image/madh1.png';
import madh2 from '../../image/madh2.jpg';
import madh3 from "../../image/madh3.jpg";
import madh4 from "../../image/madh4.jpg";
import madh5 from "../../image/madh5.jpg";
import madh6 from "../../image/madh6.jpg";

import { useNavigate } from 'react-router-dom'

 const Madhurai = () => {

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
        <span>M</span>
        <span>A</span>
        <span>D</span>
        <span>H</span>
        <span>U</span>
        <span>R</span>
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
                src={madh1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Meenakshi Amman Temple
                </h5>
                <p className="card-text">
                  The Historic Meenakshi Amman Temple Is Located On The Southern
                  Bank Of The Vaigai River, Madurai, Tamil Nadu. Built Sometime
                  Between The Year 1623 And 1655, The Wonderful Architecture Of
                  The Place Is Renowned Globally. Meenakshi Temple Is Primarily
                  Dedicated To Parvati, Known As Meenakshi, And Her Spouse,
                  Shiva. What Makes This Temple Different From The Others Is The
                  Fact That Both God And Goddess Are Worshipped Together.The
                  Most Striking Feature Of The Temple Is Its Exquisite Facade,
                  Which Has Highly Minute Details With Great Art Pieces
                  Incorporated In The Walls And Pillars.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={madh2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thirumalai Nayakar Mahal
                </h5>
                <p className="card-text">
                  Thirumalai Nayakar Palace Was Erected In 1636 AD In The City
                  Of Madurai, By King Thirumalai Nayak. The Palace Depicts The
                  Perfect Blend Of Dravidian And Rajput Styles. After
                  Independence, This Palace Was Declared As A National Monument
                  And Till Date Continues To Be One Of The Spectacular Monuments
                  Of Southern India. The Magnificent Palace Is Located In The
                  Vicinity Of The Very Famous Meenakshi Amman Temple. Depicting
                  The Saracenic Style Of Architecture, It Was Constructed During
                  The Rule Of Nayak Dynasty And Is Widely Considered As The Most
                  Illustrious Monument Built By The Madurai Nayak Dynasty.
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
                src={madh3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Gandhi Museum
                </h5>
                <p className="card-text">
                  The Gandhi Memorial Museum Serves As A Remembrance And Tribute
                  To The Efforts Of Our Very Own Father Of The Nation, Mahatma
                  Gandhi. Established In 1959 In His Cherished Memory, Eleven
                  Years After His Demise, It Is One Of The Few Gandhi Museums In
                  The Country. Located In The Heart Of Madurai, The Museum
                  Houses A Wealth Of Remarkable Mementoes Associated With Indian
                  History Such As The Bloodstained Cloth Gandhi Was Wearing When
                  He Was Assassinated In 1948.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={madh4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Athisayam
                </h5>
                <p className="card-text">
                  Located On The Madurai - Dindigul National Highway Near
                  Madurai, Athisayam Is A Massive Water Cum Amusement Park.
                  Sprawling Over A Vast 70 Acres Of Land, The Park Boasts Of A
                  Total Of 40 Games And 20 Water Rides. The Park Also Has A 7D
                  Theatre, An Eatery And A Recreation Garden For Kids.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={madh5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  ISKCON Madurai
                </h5>
                <p className="card-text">
                  Situated In The Mani Nagaram Main Road In Madurai, ISKCON
                  Madurai Is A Revered Hindu Temple Dedicated To Lord Krishna
                  And His Consort Goddess Radha. The Temple Reverberates With
                  Mantras And Songs At All Times And Devotees Are Fed With
                  Prasad. The Premises Also Has A Pure Veg Tiny Eatery For The
                  Devotees And Other Visitors. .
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={madh6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Vaigai Dam
                </h5>
                <p className="card-text">
                  Vaigai Dam, A Magnificent Human-Made Structure, Is Constructed
                  Over River Vaigai Near Andipatti, Theni District In The South
                  Indian State Of Tamil Nadu. Andipatti Lies About 70 Kilometres
                  From Madurai And Travellers On Their Way To Periyar Wildlife
                  Sanctuary Often Visit This Massive And Wondrous Dam. Over The
                  Years, The Site Has Become A Favourite Picnic Spot As It Gets
                  Beautifully Illuminated In The Evenings Especially On
                  Weekends, And One Can Spend Hours Admiring The Splendid View.
                  The Soft And Warm Sunrises By The Reservoir Are Worth
                  Experiencing Too.
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

export default Madhurai