import React from 'react'
import patiala1 from '../../image/patiala1.jpg';
import patiala2 from "../../image/patiala2.jpg";
import patiala3 from "../../image/patiala3.jpg";
import patiala4 from "../../image/patiala4.jpg";
import patiala5 from "../../image/patiala5.jpg";
import patiala6 from "../../image/patiala6.jpg";
import { useNavigate } from 'react-router-dom'

 const Patiala = () => {

    const navigate=useNavigate();

    function handlechange(){
        navigate('/punjab')
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
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>A</span>
        <span>L</span>
        <span>A</span>
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
                src={patiala1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Baradari Garden
                </h5>
                <p className="card-text">
                  The Name Of This Garden Has A Meaning That Resembles Its
                  Structure. The Name Is Formed With Bara Which Means 12 And Dar
                  Meaning Gates And So, There Are Twelve Entrance Gates In The
                  Garden. Built By Rajinder Singh In 1876, The Garden Is Filled
                  With Lush Greenery And Is Home To Rare Species Of Trees And
                  Flowers. You Will Find Big Fruit Trees, The Fern House And
                  Rock Garden Which Show The Interest Of The King In Nature.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div
              className="card mb-2"
              style={{ width: "24rem", height: "auto" }}
            >
              <img
                src={patiala2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Sheesh Mahal
                </h5>
                <p className="card-text">
                  This Attractive Building Is The Palace That Was Given Birth To
                  By The Maharaja Narinder Singh In 1847. The Palace Is Really
                  Beautiful And Consists Of Paintings And Artwork That Depict
                  The Vision Of Sudras, Keshavs And More. There Is A Section Of
                  The Palace Which Is Called Palace Of Mirrors As It Is
                  Decorated With Mirrors And Colored Glass. Apart From That,
                  There Is A Bridge Called Lachman Jhoola And A Museum Which You
                  Must Visit.
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
                src={patiala3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Shri Dukh Niwaran Sahib
                </h5>
                <p className="card-text">
                  This Is One Of The Most Famous Places To Visit In Patiala. The
                  Pond Of Gurdwara Is Supposed To Be Very Pious And To Be The
                  Cure Of Various People Of The Area From A Disease. And Thus It
                  Got Its Name ‘Dukhniwaran’, That Is, The Eliminator Of
                  Suffering. The Gurdwara Is Very Beautiful As Well. If You Are
                  Looking For Peace, Then This Is The Place To Be.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={patiala4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Omaxe Mall
                </h5>
                <p className="card-text">
                  Apart From The Tourist Attractions, If You Want To Go Shopping
                  In Patiala, Then This Mall Is Where You Should Head To. This
                  Is The Only Mall In The City And Offers Everything From
                  Clothing Stores To Eateries. If You Are Visiting Patiala With
                  Friends And Done With Your Exploration You Can Visit The Mall
                  To Spend Some Good Time.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={patiala5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Qila Mubarak Complex
                </h5>
                <p className="card-text">
                  If You Want To See The Sikh Architecture, Then This Is The
                  Perfect Example Of It. The Complex Was Built Under The Rule Of
                  Maharaja Ala Singh In 1764. The Complex Is Divided Into
                  Multiple Sections That Depict The Life At The Time Of Its Use
                  By The Kings. The Various Sections Are Ran Baas, Darbar Hall,
                  Qila Androon And More.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={patiala6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Patiala Fun World
                </h5>
                <p className="card-text">
                  Fun Amusement Park Is The Most Sorted Out Places In Patiala,
                  Punjab. This Water-Themed Park Gets Your Adrenaline Pumped Up
                  With Over 20 Exhilarating Rides Like The Roller Coaster, Sun &
                  Moon, Pendulum And Motorcycle. It Is The Most Significant
                  Water-Themed Park In Punjab. It's Nestled Over A Large Area Of
                  Parkland On The Patiala. It's A Frolic Place With Mostly Wave
                  Pools And Water Slides Around The Place.
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
          Back To Punjab
        </button>
      </div>
    </>
  );
}

export default Patiala