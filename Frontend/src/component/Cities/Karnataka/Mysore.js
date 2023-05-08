import React from 'react'
import mys1 from '../../image/mys1.jpg';
import mys2 from "../../image/mys2.jpg";
import mys3 from "../../image/mys3.jpg";
import mys4 from "../../image/mys4.jpg";
import mys5 from "../../image/mys5.jpg";
import mys6 from "../../image/mys6.jpg";
import { useNavigate } from 'react-router-dom'

 const Mysore = () => {

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
        <span>M</span>
        <span>Y</span>
        <span>S</span>
        <span>O</span>
        <span>R</span>
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
                src={mys1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Mysore Palace
                </h5>
                <p className="card-text">
                  An Incredibly Breathtaking Example Of Indo - Saracenic Style
                  Of Architecture, The Mysore Palace Is A Magnificent Edifice
                  Located In Mysore In The State Of Karnataka. Also Known As The
                  Amba Vilas Palace, It Is The Former Palace Of The Royal Family
                  Of Mysore And Is Still Their Official Residence. Mysore Palace
                  Was Built In The Year 1912 For The 24th Ruler Of The Wodeyar
                  Dynasty And Is Counted Amongst One Of The Biggest Palaces In
                  The Country.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={mys2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Mysore Zoo
                </h5>
                <p className="card-text">
                  Sri Chamarajendra Zoological Gardens, Also Known As The Mysore
                  Zoo Is One Of The Best Zoological Gardens In India.Maharaja
                  Chamaraja Wodeyar Established This Zoo In The Year 1892 For
                  The Royals. Furthermore, After The Attainment Of Freedom, It
                  Was Handed Over To The Department Of Parks And Gardens Of The
                  State Govt. The Zoo's Meticulous Planning Is Responsible For
                  Making It A Special Zoological Garden. It Tends To Create A
                  Natural Habitat For The Animals In It. From Big To Small Cats,
                  Aquatic To Terrestrial Birds, And Primates To Reptiles, One
                  Hundred And Sixty-Eight Species Find Their Place In This Zoo
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
                src={mys3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Somanathapura Temple
                </h5>
                <p className="card-text">
                  On The Banks Of Holy River Kaveri Is A Tiny Tranquil Town Of
                  Somanathapura. Here Stands The Finest And Most Exemplary
                  Monument Of Hoysala Architecture Known As The Famous Prasanna
                  Chennakesava Temple Or Simply The Kesava Temple.Consecrated In
                  The Year 1258 CE, It Is A Vaishnav Hindu Temple Dedicated To
                  Might And Beauty Of Lord Krishna .Tourists From Near And Far
                  Come To Visit The Temple To Get A View Of The Beautiful Place
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={mys4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Karanji Lake
                </h5>
                <p className="card-text">
                  Karanji Lake, Also Known As The Fountain Lake, Is A Popular
                  Picnic Spot. Visitors Are Allowed To Bring Packed Food, And
                  There Is A Coffee Shop As Well. It Is A Beautiful Place To
                  Explore The Different Species Of Birds As The Lake Exhibits As
                  Many As 147 Species Including Herons, Asian Openbill Storks,
                  Cormorant, Grey Pelican, Etc.The Karanji Lake Is Said To
                  Possess The Largest Aviary In The Country. Its Set Up Cost Was
                  Nearly 3.8 Million, And It Measures 20m In Length, 50m In
                  Breadth And Has A Height Of 60m. There Is A Waterfall Too With
                  Two Water Bodies Alongside.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={mys5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ranganathittu Bird Sanctuary
                </h5>
                <p className="card-text">
                  Located In Karnataka, The Ranganathittu Bird Sanctuary In
                  Srirangapatna Is A Haven For Bird Watchers As It Houses A Wide
                  Array Of Bird Species. It Is The Largest Bird Sanctuary In The
                  State And Comprises Of Six Small Islands On The Banks Of The
                  River Kaveri. The Scenery Of The Local Vegetation And
                  Landscape, Coupled With The Colourful Species Of Birds Makes
                  It A Unique Learning Experience For Visitors Of All Ages And
                  Interests. This Destination Offers Many Things To Do For Its
                  Tourists; The Most Popular Ones Include Bird Watching,
                  Boating, And Some Good Old Nature Photography.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={mys6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Trinesvaraswamy Temple
                </h5>
                <p className="card-text">
                  This Ancient Temple Is Located Outside The Mysore Fort, The
                  Main Deity Being Trinesvara I.E. The Three Eyed Shiva. The
                  Gopura Of This Temple Was Destroyed In The 18th Century, But
                  The Beauty Of The Dravidian Architecture Is Still On Display
                  Here.
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

export default Mysore