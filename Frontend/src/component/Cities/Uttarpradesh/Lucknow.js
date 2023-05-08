import React from 'react'
import luck1 from '../../image/luck1.jpg'
import luck2 from "../../image/luck2.jpg";
import luck3 from "../../image/luck3.jpg";
import luck4 from "../../image/luck4.jpg";
import luck5 from "../../image/luck5.jpg";
import luck6 from "../../image/luck6.jpg";
import { useNavigate } from 'react-router-dom';

const Lucknow = () => {

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
        <span>L</span>
        <span>U</span>
        <span>C</span>
        <span>K</span>
        <span>N</span>
        <span>O</span>
        <span>W</span>
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
                src={luck1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Tomb Of Saadat Ali Khan
                </h5>
                <p className="card-text">
                  Located In Qaiser Bagh, The Tomb Of Saadat Ali Khan Is A
                  Combined Mausoleum Of Both Saadat Ali Khan And His Wife
                  Khursheed Zadi. Constructed By Their Son, This Is A Tomb
                  Adorning The Typical Amalgam Of Indian And Islamic
                  Architectural Styles. Hosting An Iconic Central Dome, The Tomb
                  Of Saadat Ali Khan Gives Way Into A Black And White Interior
                  Housing The Tombs. The Tombs Of Saadat Ali Khan And His Other
                  Wives Are Found Towards The Southern End Of The Mausoleum.
                  This Attraction Is Found In Proximity To The Famous Begum
                  Hazrat Mahal Park.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={luck2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Bara Imambara
                </h5>
                <p className="card-text">
                  The Bara Imambara Of Lucknow Is One Of The Most Famous
                  Monuments Of The City. Also Known As Asfi Imambara, After The
                  Name Of The Nawab Of Lucknow Who Got It Constructed, It Is An
                  Important Place Of Worship For The Muslims Who Come Here Every
                  Year To Celebrate The Religious Festival Of Muharram. The
                  Imambara Is Specially Known For Its Incredible Maze, Known As
                  Bhul Bhulaiya Locally, Which Is Located In The Upper Floor Of
                  The Monument.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={luck3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Chhota Imambara
                </h5>
                <p className="card-text">
                  The Chhota Imambara, Or The Imambara Of Hussainabad, Is One Of
                  The Most Beautiful And Attractive Buildings In The Old City Of
                  Lucknow In Uttar Pradesh. This Imposing Monument Lies To The
                  West Of Bara Imambara And Is A True Sight To Behold. The
                  Chhota Imambara Was Initially A Congregation Hall For Shia
                  Muslims That Was Built By Muhammad Ali Shah, Who Was The Third
                  Nawab Of Awadh, In 1838. The Imambara Was To Serve As His Own
                  Mausoleum As Well As That Of His Mother, Who Is Buried Beside
                  Him In This Prestigious Monument
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={luck4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ambedkar Memorial Park
                </h5>
                <p className="card-text">
                  Initially Known As The Dr Bhimrao Ambedkar Samajik Parivartan
                  Prateek Sthal, The Ambedkar Memorial Park Is Located On Vipul
                  Khand Of Gomti Nagar. It Was Constructed By The State
                  Government Under The Leadership Of CM Mayawati. Built In The
                  Name Of Dr BR Ambedkar, This Public Park Is Also Dedicated To
                  Many Other Freedom Fighters Including Jyotiba Phule, Birsa
                  Munda, Kanshi Ram And Sree Narayana Guru. Although It Is Not
                  As Green, The Park Houses Various Statues And Structures Of
                  Great Historic Importance.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={luck5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Husainabad Clock Tower
                </h5>
                <p className="card-text">
                  Located Adjacent To The Rumi Darwaza, Husainabad Clock Tower
                  Is Another Heritage Monument Dotting The Cityscape Of Lucknow.
                  Built In 1881 By The Hussainabad Trust At A Cost Of 1.75
                  Lakhs, This 221-Feet Structure Is Modeled After The Big Ben
                  Clock Tower Of London. The Clock Is Designed Like A Flower
                  With 12 Petals And Its Pendulum Is 14 Feet Long. Popular As
                  The Tallest Clock Tower In The Country, It Displays The Gothic
                  And Victorian Styles Of Architecture.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={luck6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Lucknow Zoo
                </h5>
                <p className="card-text">
                  Located In The River Bank Colony, The Lucknow Zoo Is A Famous
                  Attraction In The City. Also Known As The Nawab Wazid Ali Shah
                  Prani Udyan, It Was Originally Known As The Prince Of Wales
                  Zoological Gardens. The Lucknow Zoo Is Home To Numerous
                  Mammals, Birds And Reptiles, The Most Famous Ones Being The
                  Royal Bengal Tiger, White Bengal Tiger, Himalayan Black Bear
                  And Asiatic Lion.
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
          Back To Uttarpradesh
        </button>
      </div>
    </>
  );
}


export default Lucknow