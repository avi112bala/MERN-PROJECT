import React from 'react'
import man1 from '../../image/man1.jpg';
import man2 from "../../image/man2.jpg";
import man3 from "../../image/man3.jpg";
import man4 from "../../image/man4.jpg";
import man5 from "../../image/man5.jpg";
import man6 from "../../image/man6.jpg";
import { useNavigate } from 'react-router-dom';
const Manglor = () => {

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
        <span>A</span>
        <span>N</span>
        <span>G</span>
        <span>L</span>
        <span>O</span>
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
                src={man1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Panambur Beach
                </h5>
                <p className="card-text">
                  Panambur Beach Is Located At A Distance Of 13 Km From
                  Mangalore To The South Of Mangalore Port. Every Year It Is
                  Visited By Hordes Of Tourists And Locals As It Hosts Several
                  Events Like Boat Racing, Kite Festival And Sand Sculptures
                  Competitions. Despite A Massive Footfall, It Is One Of The
                  Cleanest Beaches One Can Come Across In The Western Coastline
                  Of India. The Name Of The Beach Has Been Derived From 'Panam'
                  Meaning Money And 'Ur' Meaning Place.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card mb-2" style={{ width: "24rem", height: "auto" }}>
              <img
                src={man2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kudroli Temple
                </h5>
                <p className="card-text">
                  This Temple Was Consecrated By Sri Narayana Guru For The
                  Billava Community In 1912, Who Were Prohibited Entry Into Any
                  Other Temple In The Area. The Deity In This Temple Is
                  Gokarnanatheshwara, Lord Shiva. The Surrounding Temples And
                  The Main Temple Itself Are Built In Tamil Nadu Style,
                  Decorated With Murals Showing Various Mythological Legends.
                  The Temple Has A Massive Compound With Marble Flooring
                  Throughout And Many Fully-Equipped Air-Conditioned Marriage
                  Halls. During The Time Of Dasera, The Temple Is Lit To The
                  Grandeur And The Entire Kudroli Road Is Laden With Stalls
                  Selling Food And Souvenirs.
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
                src={man3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Tannirbhavi Beach
                </h5>
                <p className="card-text">
                  Tannirbhavi Beach Is One Of The Popular Beaches In The City.
                  The Coastline With Golden Sand And Cool, Fresh Air Is
                  Rejuvenating, And People Are Drawn To The Natural Beauty Of
                  The Location. Proper Seats And Other Facilities Make The Beach
                  A Frequently Visited Attraction, And It Is Crowded Often On
                  Weekends And Public Holidays. Entering The Sea Is Not
                  Advisable, But One Can Try Their Hand At One Of The Water
                  Sports At The Beach. There Are Lifeguards To Keep An Eye And
                  Rescue In Case Of An Accident, However, Visitors Are Advised
                  To Be Careful While Entering The Water.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={man4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  New Mangalore Port
                </h5>
                <p className="card-text">
                  The New Mangalore Port Situated In Panambur, Mangalore In The
                  State Of Karnataka Is Run And Governed New Mangalore Trust. It
                  Is One Of The Most Major Ports Located In Karnataka And Is The
                  Seventh Largest Port In The Country. It Was Inaugurated On 4th
                  May 1974 By The Then Prime Minister Of India, Indira Gandhi.
                  The Port Lies In Panambur That Is, The West Coast Of India. It
                  Lies To The North Of Phalguni River To The Arabian Sea. New
                  Mangalore Port Is A Remote Area Of All The Coasts Located In
                  Karnataka And Kerala.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={man5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  St Aloysius Chapel
                </h5>
                <p className="card-text">
                  St Aloysius Chapel Is A Catholic Church And A Famous
                  Attraction Set Atop The Lighthouse Hill And Has A Regal Look
                  Which Is Breathtaking Right From The Entrance. The Unique Wall
                  Paintings Of St. Aloysius Chapel Are Stunning And Attract
                  Visitors In Large Numbers.These Paintings Were Painted In 1899
                  By Antonio Moscheni, An Italian Jesuit When He Visited
                  Mangalore On A Mission In 1878. What We Get To See Are Mostly
                  Restored Paintings That Have Suffered Damage Over Time But The
                  Charm And Authenticity Of St Aloysius Chapel Are Still Very
                  Well Maintained.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={man6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ullal Beach
                </h5>
                <p className="card-text">
                  Ullal Beach Is A Prime Tourist Attraction In The City. Located
                  In Ullal, A Small Fishing Village Only 12 Kms Away From The
                  City Centre Of The Bustling City Of Mangalore, Ullal Beach
                  Mesmerises Its Visitors With A Panoramic View Of A Long
                  Coastline And The Majestic Arabian Sea. The Entire Coast Of
                  The Serene Ullal Beach Is Flanked With Tall Lush Casuarinas
                  And Dense Palm Trees That Make It Look Like A Scene From A
                  Beautiful Painting
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

export  default Manglor