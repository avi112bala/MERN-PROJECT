import React from "react";
import { useNavigate } from "react-router-dom";
import kanpur1 from "../../image/kanpur1.jpg";
import kanpur2 from "../../image/kanpur2.jpg";
import kanpur3 from "../../image/kanpur3.jpg";
import kanpur4 from "../../image/kanpur4.jpg";
import kanpur5 from "../../image/kanpur5.jpg";
import kanpur6 from "../../image/kanpur6.jpg";





const Kanpur =()=>{

    const navigate=useNavigate();

    function handlechange(){
        navigate('/uttarpradesh')
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
          <span>N</span>
          <span>P</span>
          <span>U</span>
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
                  src={kanpur1}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    JK Temple
                  </h5>
                  <p className="card-text">
                    JK Temple, Otherwise Called As Juggilal Kamplapat Temple Is
                    Located On The Govind Nagar Road Of Sarvodaya Nagar In
                    Kanpur. It Is A Beautiful Combination Of Both Ancient And
                    Modern Architecture. There Are Nearby Lakes And Greenery
                    Such As The Popular Moti Jheel.Constructed Under The
                    Supervision Of The Singhania Family In 1953, The JK Temple
                    Is Largely Managed By The JK Trust, Even Till Today. The
                    Idol Of The Hindu Deity Radha Krishna Is Found At The Centre
                    Of The Temple Which Is Surrounded In Lush Greenery And Small
                    Lakes.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd */}

            <div className="col">
              <div className="card mb-2" style={{ width: "24rem", height: "auto" }}>
                <img
                  src={kanpur2}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    Blue World Theme Park
                  </h5>
                  <p className="card-text">
                    Situated On Mandhana-Bithoor Road, The Blue World Theme Park
                    Is A Fantastic Water And Amusement Park With Tons Of Rides.
                    The Rides Have Been Thematically Divided Into The Following
                    – European, Fairy Land Theme, Chinese Theme, Jungle Theme,
                    Mayan And Egyptian Culture And Indian Themes.Spread Across
                    25 Acres Of Land Containing A Water Park And An Amusement
                    Park, Blue World Theme Park Also Cites Multiple Restaurants
                    Inclusive Of All Ranges Of Budget And Culinary Authenticity.
                    There Are Also Musical Fountains, Laser Shows And An
                    Exciting 7D Show As Well.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd */}

            <div className="col">
              <div className="card" style={{ width: "24rem", height: "auto" }}>
                <img
                  src={kanpur3}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    Valmiki Ashram
                  </h5>
                  <p className="card-text">
                    Valmiki Ashram Is A Hilltop Holy Site Located In Bitoor,
                    Kanpur. It Is Believed To Be The Place Where The Saint
                    Valmiki Wrote The Ramayana. Covering An Expanse Of Vast
                    Land, The Valmiki Ashram Encompasses Three Temples And A
                    Pond. It Is Also Said That This Was Once The Hindu Goddess,
                    Sita's Residence During Her Exile. A Considerable Part Of
                    The Famous Indian Epic And Hindu Mythology, Ramayana Is
                    Based On This Place. The Architecture Of The Place Is Pretty
                    Simple And Is Surrounded By Greenery All Around
                  </p>
                </div>
              </div>
            </div>

            {/* 4th */}

            <div className="col">
              <div className="card" style={{ width: "24rem", height: "auto" }}>
                <img
                  src={kanpur4}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    Kanpur Memorial Church
                  </h5>
                  <p className="card-text">
                    One Of The Oldest And Beautiful Churches Of India, The
                    Kanpur Memorial Church Is Located On Albert Lane. Also Known
                    As The All Souls Cathedral Church, It Is Popularly Known For
                    Its Architecture And Historical Importance. Established In
                    1857, The Church Is A Memoir Of The Lost British Troops Of
                    The Sepoy Mutiny.
                  </p>
                </div>
              </div>
            </div>

            {/* 5th */}

            <div className="col">
              <div className="card" style={{ width: "24rem", height: "auto" }}>
                <img
                  src={kanpur5}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    Kanpur Zoo
                  </h5>
                  <p className="card-text">
                    Also Known As Allen Forest Zoo, The Kanpur Zoological Park
                    Is Located In Nawabganj, Approximately 7 Kilometres From
                    Kanpur City. Situated In The Human-Made Allen Forest, This
                    Zoological Park Houses A Picturesque Landscape, Lush
                    Vegetation, A Beautiful Lake, And Several Rare Species Of
                    Plants And Animals. Maintained By The Forest Department,
                    State Government Of Uttar Pradesh, The Kanpur Zoological
                    Park Is Home To Many Wildlife Species Including White
                    Tigers, Leopards, Black Bears, Grizzly Bears, Sloths,
                    Zebras, Rhinoceros, Hippopotamus And Reptiles Such As
                    Snakes.
                  </p>
                </div>
              </div>
            </div>

            {/* 6th */}

            <div className="col">
              <div className="card" style={{ width: "24rem", height: "auto" }}>
                <img
                  src={kanpur6}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "24rem", height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ width: "100%" }}>
                    ISKCON Temple Kanpur
                  </h5>
                  <p className="card-text">
                    The ISKCON Temple Is Yet Another International Spiritual
                    Tourist Attraction Dedicated To Lord Krishna. The Temple Is
                    Located On Mainavati Marg, Bithoor Road, About 4 Km From
                    Kanpur. The Best Time To Visit Is In August And September
                    Due To Krishna Janmashtami And Radhashtami Respectively.The
                    Deities Here Receive An Annual Maha-Abhishek, Which Is The
                    Traditional Bathing Of The Holy Idols, At The Royal Gold
                    Leaf Shrine. In Addition To Customary Rituals, There Are
                    Three Festivals That Mark This Significant Custom. The
                    Avatars Of Lord Krishna, Sri Sri Radha Madhav, Sri Sri Nitai
                    Gaursundar And Sri Sri Janakai Janaki Vallabha Laxman
                    Hanuman Are Conventionally Decorated And Preserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Back button */}
        <div className="container text-center mt-3 mb-3">
          <button
            type="button"
            class="btn btn-danger "
            style={{ color: "white", fontWeight: "500 " }}
            onClick={handlechange}
          >
            Back To Uttarpradesh
          </button>
        </div>
      </>
    );
}

export default Kanpur