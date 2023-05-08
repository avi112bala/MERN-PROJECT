import React from 'react'
import sim1 from '../../image/sim1.jpg';
import sim2 from "../../image/sim2.jpg";
import sim3 from "../../image/sim3.jpg";
import sim4 from "../../image/sim4.jpg";
import sim5 from "../../image/sim5.jpg";
import sim6 from "../../image/sim6.jpg";
import { useNavigate } from 'react-router-dom'

const Shimla = () => {

    const navigate=useNavigate();

    function handlechange(){
        navigate('/himachal')
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
        <span>S</span>
        <span>H</span>
        <span>I</span>
        <span>M</span>
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
                src={sim1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  The Ridge
                </h5>
                <p className="card-text">
                  Located In The Heart Of The 'British Summer Capital' - Shimla,
                  The Ridge Is The Most Photographed Wide-Open Street Located On
                  The Side Of Shimla Mall Road. The Ridge Has Everything, From
                  Shops Selling Some Exclusive Artefacts To The Spectacular View
                  Of The Snow-Capped Mountain Ranges. It Is Famous For A Lot Of
                  Things, But Best Known For Shopping And For Being The Social
                  Hub Of The City. Shimla's Rich Past Is Evident From The Gothic
                  Buildings Standing In This Part Of The Town.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={sim2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Mall Road
                </h5>
                <p className="card-text">
                  The Mall Road In Shimla, Located In The Heart Of The Town, Is
                  The Main Street That Is Lined Up With A Myriad Of Restaurants,
                  Clubs, Banks, Shops, Post Offices And Tourist Offices. At The
                  Same Time, The Place Boasts Of The Other Exciting Attractions
                  That It Houses, Such As The Scandal Point And Kali Bari
                  Temple. One Of The Busiest And More Commercial Areas Of Shimla
                  Till Date, This Stretch Is A Mini-World In Itself. The Shimla
                  Mall Road Is The One Stretch,That Truly Celebrates The Spirit
                  Of The Hilltown, Its Tourist Rush And Valleys And Hills
                  Covered With Houses And Hotels.
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
                src={sim3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kalka Shimla Toy Train
                </h5>
                <p className="card-text">
                  The Kalka To Shimla Route Is Best Travelled By Way Of The Toy
                  Train That Runs On A Narrow-Gauge Track And Is Known For Its
                  Dramatic Views Of The Hills And Surrounding Villages. The
                  Historic Kalka Shimla Toy Train Is Part Of The UNESCO World
                  Heritage List And Takes Individuals On A Ride Amongst Vast
                  Green Hills And Deodar And Pine Forests.The Journey Was Carved
                  Through The Abundance Of Nature In Himachal Pradesh During The
                  British Rule Due To Which The Kalka Shimla Toy Toy Train Is
                  Bound To Take You Back To A Completely Different Era In
                  History And Through One Of The Most Scenic Railway Journeys In
                  India.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={sim4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Green Valley
                </h5>
                <p className="card-text">
                  The Green Valley Is A Beautiful And Breathtaking Mountain
                  Range That Falls On The Way To Kufri From Shimla. The Green
                  Valley Is Surrounded By Verdant Hills On All Sides Covered
                  With Thick Pine And Deodar Forests. It Is Not Uncommon To
                  Sight Some Yaks Wandering And Grazing Around In The Valley.
                  The Place Is Undeveloped For Tourism, Nevertheless, It
                  Continues To Be A Crowd Puller And Capture The Attention Of
                  Tourists With Its Dense Deodar And Pine Trees That Line The
                  Majestic Hills.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={sim5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Chail
                </h5>
                <p className="card-text">
                  Chail Is A Quiet Hill Station Close (44km) To Shimla, Known
                  For The World's Highest Cricket Ground And A Heritage
                  Hotel,Chail Palace. Surrounded By Pine And Deodar Trees, Chail
                  Is Located At An Altitude Of 2,250m Above Sea Level.The Former
                  Summer Capital Of Patiala, Chail Was Built By The Former
                  Maharaja Of Patiala After He Was Banished From Shimla (He
                  Eloped With The Daughter Of Then Commander-In-Chief Of The
                  British Army, Lord Kitchner). Since Its Foundation In The Year
                  1893, Chail Has Been An Attraction For Tourists Seeking A
                  Vacation With The Beauty Of Shivalik Ranges.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={sim6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Skiing In Kufri
                </h5>
                <p className="card-text">
                  Kufri, The Winter Sports Capital Of Shimla, Leaves Each And
                  Every Visitor Splendid With Its Beautiful White Cover Of Snow.
                  It Is A Skier's Paradise. From The First Snowfall Of The Year
                  To The Time The Snow Melts It Is Flocked By Hundreds Of
                  Skiers. Skiing Is Kufri's Primary Allure. The Slopes, The
                  Heights, And The Snowy Carpet It Offers Are The Most
                  Adventurous Platforms For Skiing. The Thick Cover Of Snow Is
                  Perfect For Hosting The Adventurous Sport.
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
          Back To Himachal Pradesh
        </button>
      </div>
    </>
  );
}

export  default Shimla