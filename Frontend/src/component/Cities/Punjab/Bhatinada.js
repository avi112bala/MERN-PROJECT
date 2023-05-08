import React from 'react'
import bh1 from '../../image/bh1.jpg';
import bh2 from "../../image/bh2.jpg";
import bh3 from "../../image/bh3.jpg";
import bh4 from "../../image/bh4.jpg";
import bh5 from "../../image/bh5.jpg";
import bh6 from "../../image/bh6.jpg";
import { useNavigate } from 'react-router-dom'

const Bhatinada = () => {

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
        <span>B</span>
        <span>H</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>N</span>
        <span>D</span>
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
                src={bh1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Qila Mubarak
                </h5>
                <p className="card-text">
                  Qila Mubarak Is A Monument Of Great Historical Importance And
                  Is Situated In The City Of Bathinda In Punjab. The Origin Of
                  The Fort Can Be Traced Back To The Period Between 90 And 110
                  AD, And It Is The Oldest Surviving Fort In India, Known To
                  Historians. This Majestic Piece Of Architecture Merges
                  Perfectly With The Surrounding Desert Area And Looks Subtle
                  And Elegant. This Is Perhaps Why The Qila Mubarak Continues To
                  Be A Significant Tourist Attraction In Punjab Till Date
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
                src={bh2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Zoological Garden
                </h5>
                <p className="card-text">
                  Nestled 10 Km Off The Cantonment Area, This Plant Nursery
                  Maintained By The Forest Department Is Another Popular Picnic
                  Destination For The Locals As Well As The Tourists
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
                src={bh3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Mazaar Of Peer Haji Rattan
                </h5>
                <p className="card-text">
                  Another Holy Place For Worship, The Mazaar Of Peer Haji Rattan
                  Draws Many Pilgrims To The Site.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={bh4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Lakhi Jungle
                </h5>
                <p className="card-text">
                  Situated 15 Km Off Bhatinda, This Forest Shelters An Ancient
                  Gurdwara Where Shri Guru Nanak Dev Delivered Shri Japuli
                  Sahibs - One Lakh Holy Sermons. The 10th Sikh Guru, Guru
                  Gobind Singh Has Also Marked The Holy Place With His Visi
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={bh5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Takht Sri Damdama Sahib
                </h5>
                <p className="card-text">
                  Located In Bathinda, Punjab, Takht Sri Damdama Sahib Is One Of
                  The 5 Takhts In Sikhism. Takhts, Also Called Seats Of Temporal
                  Authority Are Religious Places Which Hold Significant
                  Importance In Sikh Religion. The One In Discussion Is Where
                  The Tenth Sikh Guru, Guru Gobind Singh Ji, Assembled And
                  Instituted The Holy Book Of Sikhs, Guru Granth Sahib Ji.The
                  Book Is The Only Thing Which The Sikhs Worship. Not A Person,
                  Picture Or Any Statue, Just Guru Granth Sahib Ji, The Holy
                  Book Which Is The Compilation Of The Hymns, Teaching And
                  Preaching Of The Sikh Gurus And Some Other People.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={bh6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Rose Garden
                </h5>
                <p className="card-text">
                  Spread Over A Massive Area Of 40,000 Sq. M, The Rose Garden Is
                  Situated Close To The Thermal Power Plant In Bhatinda.The
                  Garden, As The Name Suggests, Is Famous For Its Varied Species
                  Of Roses.
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

export  default Bhatinada