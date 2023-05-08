import React from 'react'
import coo1 from '../../image/coo1.jpg';
import coo2 from "../../image/coo2.jpg";
import coo3 from "../../image/coo3.jpg";
import coo4 from "../../image/coo4.jpg";
import coo5 from "../../image/coo5.jpg";
import coo6 from "../../image/coo6.jpg";
import { useNavigate } from 'react-router-dom';


 const Coorge = () => {
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
        <span>C</span>
        <span>O</span>
        <span>O</span>
        <span>R</span>
        <span>G</span>
        <span>E</span>
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
                src={coo1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Abbey Falls
                </h5>
                <p className="card-text">
                  Abbey Falls, Also Known As Abbi Falls, Is Located Around 10
                  Kilometres Away From The Town Of Madikeri And Is One Of The
                  Most Popular Tourist Attractions In And Around Coorg. The
                  Water Cascade Coming Down From The Cliff From A Height Of 70
                  Feet Provides A Spectacular Scene To Behold. The Walk To The
                  Falls From The Main Entrance Has Around 200 Steps Downwards
                  Throughout And Takes You Through Exotic Coffee, Cardamom,
                  Pepper And Other Spice Plantations. Even Though Bathing Is
                  Prohibited In The Falls Now, There Is An Over-Bridge Opposite
                  The Falls To Witness The Beauty.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card mb-2" style={{ width: "24rem", height: "auto" }}>
              <img
                src={coo2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Golden Temple (Namdroling Monastery)
                </h5>
                <p className="card-text">
                  Namdroling Monastery, Situated At A Distance Of 34 Km From The
                  Coorg, Is The Largest Teaching Centre Of The School Of Tibetan
                  Buddhism Known As Nyingmapa. Popularly Known As The 'Golden
                  Temple', The Namdroling Monastery Holds Some Excellent
                  Examples Of Tibetan Architecture And Artwork, As Seen With The
                  Elaborately Decorated Temple Tower And Ornate Outer Walls,
                  Intricately Adorned With Beautiful Murals.It Is Spread Over An
                  Area Of 80 Square Feet And Was Built From Bamboo Which Was
                  Donated By The Indian Government To The Tibetans In Exile.
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
                src={coo3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Madikeri Fort
                </h5>
                <p className="card-text">
                  The Madikeri Fort Is A Popular Attraction In Coorg In
                  Karnataka. Situated In The Centre Of Madikeri Town, The
                  Majestic Fort Offers Tourists Insights Into The History Of
                  Coorg. The Elevated Structures Of The Fort Also Provide
                  Panoramic Views Of The Town. This Ancient Fort Was First
                  Constructed In The Latter Half Of The Seventeenth Century By
                  Muddu Raja, The Ruler At The Time, On The Occasion Of
                  Declaring Madikeri As The New Capital Of Coorg. The Possession
                  Of This Fort Passed Through Various Hands After It Was
                  Captured By Tipu Sultan.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={coo4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Tadiandamol Peak
                </h5>
                <p className="card-text">
                  Tadiandamol Is The Highest Mountain Peak In Coorg, At An
                  Elevation Of 1748m. Most Tourists Interested In Trekking Are
                  Drawn To This Place As The Journey Is Difficult, But The View
                  From The Top, Unparalleled. While Being The Second Highest
                  Peak In All Of Karnataka, Tadiandamol Trek Is Also A Very Good
                  Option For Nature Lovers Who Desire Scenic Surroundings And
                  Are Beginners In The Trekking Scene. Apart From The Treks,
                  Nature Lovers Can Visit The Place As Almost Half The Journey
                  Can Be Reached By A Vehicle.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={coo5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Iruppu Falls
                </h5>
                <p className="card-text">
                  Iruppu Falls Is A Picturesque Waterfall Cascading Along The
                  Brahmagiri Mountain Range In The Coorg District Of South
                  Karnataka. Also Known As The Lakshmana Tirtha Falls, Which Is
                  A Name Derived From The Tributary Of Cauvery River Of The Same
                  Name Of Which These Falls Are A Part Of. People Come Here To
                  Enjoy The Blissful Vicinity Of Nature, The Grandeur Of The
                  Falls And For Also For Its Religious Significance.En Route To
                  The Magnificent Falls Stands The Famous Shiva Temple
                  Rameshwara Along The Banks Of The River.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={coo6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  River Rafting In Coorg
                </h5>
                <p className="card-text">
                  Barapole River Is A Famous White River Rafting Destination In
                  Coorg. The White Frothy River With Speedy Waters And Rapids,
                  Flowing Through Beautiful Landscapes, Makes For An Ideal River
                  Rafting Experience. White Water Rafting Is Organized In Upper
                  Barapole In Kithu-Kakkatu River Which Is A Strong Catchment
                  Area For The Monsoons, Thus Providing Some Of The Most
                  Challenging Stretches Of Rapids. The Barapole River Surges
                  Through Dense Forests And Offers Rafting Participants A
                  Breathtaking View Of The Brahmagiri Wildlife Sanctuary.
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
export default Coorge
