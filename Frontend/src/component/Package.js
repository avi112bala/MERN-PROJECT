import React from 'react'
import Rating from "@material-ui/lab/Rating";
import package1 from './images/package1.jpg'
import package2 from './images/package2.jpg'
import package3 from "./images/package3.jpg";
import package4jpg from "./images/package4jpg.jpg";
import package5 from "./images/package5.jpg";
import package6 from "./images/package6.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useNavigate } from 'react-router-dom';
import './Package.css'



export const Package = () => {
  const navigate=useNavigate();

  function handlechange(){
    navigate('./States/Uttarpradesh.js')
  }
   function handlechange1() {
     navigate('./States/Punjab.js');
   }

   function handlechange2(){
    navigate('./States/Kerala.js')
   }

   function handlechange3(){
    navigate('./States/Himachal.js')
   }

   function handlechange4(){
    navigate('./States/Tamilnadu.js')
   }

   function handlechange5(){
    navigate('./States/Karanataka.js')
   }


  return (
    <>
      <div className="sectionp">
        <div>
          <h1 class="heading">
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>S</span>
          </h1>
        </div>

        {/* card */}
        <div className="container text-center">
          <div className="row row-package" style={{marginBottom:"5rem"}}>
            <div className="col" >
              <div
                className="card"
                style={{ width: "24rem", height: "33.14rem" }}
              >
                <img
                  src={package1}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    <LocationOnIcon style={{ color: "orange" }} />
                    Uttar Pradesh
                  </h5>
                  <p className="card-text">
                    Uttar Pradesh Is A Land Of Culture, Tradition, History,
                    Festival, Black Spell, Agriculture, Cuisines,And Tourist
                    Spots. From Ancient Temples To National Parks, Wildlife
                    Sanctuaries, Historic Places, Spectacular Architectural
                    Marvels, Massive Forts
                  </p>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                  <Link to={"/uttarpradesh"}>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "white", fontWeight: "500 " }}
                      onClick={handlechange}
                    >
                      Explore uttar Pradesh
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2nd */}

            <div className="col">
              {" "}
              <div
                className="card"
                style={{ width: "24rem", height: "33.14rem" }}
              >
                <img
                  src={package2}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    <LocationOnIcon style={{ color: "orange" }} />
                    Punjab
                  </h5>
                  <p className="card-text">
                    Punjab Has One Of The Oldest And Richest Cultures Of The
                    World.While The Punjabis Are Known For Their Strong
                    Determination, Their Culture Presents A Multi-Hued Heritage
                    Of Ancient Civilizations.The Golden Temple Is The Famous
                    Visting Place
                  </p>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                  <Link to={"/punjab"}>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "white", fontWeight: "500 " }}
                      onClick={handlechange1}
                    >
                      Explore Punjab
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3rd */}

            <div className="col">
              {" "}
              <div
                className="card"
                style={{ width: "24rem", height: "33.14rem" }}
              >
                <img
                  src={package3}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    <LocationOnIcon style={{ color: "orange" }} />
                    Kerala
                  </h5>
                  <p className="card-text">
                    Kerala Is A State In India, Situated In The South West
                    Region.The Capital City Of Kerala Is Trivandrum. The
                    Official Language Of Kerala Is Malayalam.The State Is
                    Bordered By A Number Of Beaches; Covered By Hills Of Western
                    Ghats And Filled With Backwaters!
                  </p>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                  <Link to={"/kerala"}>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "white", fontWeight: "500 " }}
                      onClick={handlechange2}
                    >
                      Explore Kerala
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4th */}

            <div className="col">
              <div
                className="card"
                style={{ width: "24rem", height: "33.14rem" }}
              >
                <img
                  src={package4jpg}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    <LocationOnIcon style={{ color: "orange" }} />
                    Himachal Pradesh
                  </h5>
                  <p className="card-text">
                    With Plunging River Valleys And Picturesque Snowy Peaks,
                    Himachal Pradesh Is India’s Adventure Playground. Surrounded
                    By The Majestic Himalayas, Lush Green Forests, Breathtaking
                    Lakes, And Towering Mountains, Himachal Is Perhaps A
                    Paradise For Backpackers.
                  </p>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                  <Link to={"/himachal"}>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "white", fontWeight: "500 " }}
                      onClick={handlechange3}
                    >
                      Explore Himachal Pradesh
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5th */}

            <div className="col">
              {" "}
              <div className="card mb-3" style={{ width: "24rem" }}>
                <img
                  src={package5}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    <LocationOnIcon style={{ color: "orange" }} />
                    Tamil Nadu
                  </h5>
                  <p className="card-text">
                    Situated Along The Bay Of Bengal In South India, Tamil Nadu
                    Is One Of India's Most Well-Known Tourist Destinations Owing
                    To Its Natural Splendour, Unique Culture As Well As
                    Religious Significance. The State Boasts Of A Plethora Of
                    Religious Sites That Attract Pilgrims Attraction.
                    
                  </p>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                  <Link to={"/tamilnadu"}>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "white", fontWeight: "500 " }}
                      onClick={handlechange4}
                    >
                      Explore Tamil Nadu
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 6th */}

            <div className="col">
              {" "}
              <div
                className="card"
                style={{ width: "24rem", height: "33.14rem" }}
              >
                <img
                  src={package6}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    <LocationOnIcon style={{ color: "orange" }} />
                    Karnataka
                  </h5>
                  <p className="card-text">
                    Capital Of Karnataka Is Bangalore. Kannada Is The Most
                    Widely Spoken Language In Karnataka. It Is The Largest State
                    In South India.It Is Bound By Arabian Sea To Its West.The
                    Silicon Valley Of India Is Located In Karnataka
                  </p>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                  <Link to={"/karnataka"}>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "white", fontWeight: "500 " }}
                      onClick={handlechange5}
                    >
                      Explore Tamil Nadu
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
