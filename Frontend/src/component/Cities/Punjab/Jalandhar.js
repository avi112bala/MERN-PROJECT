import React from 'react'
import jalandhar1 from '../../image/jalandhar1.jpg';
import jalandhar2 from "../../image/jalandhar2.jpg";
import jalandhar3 from "../../image/jalandhar3.jpg";
import jalandhar4 from "../../image/jalandhar4.jpg";
import jalandhar5 from "../../image/jalandhar5.jpg";
import jalandhar6 from "../../image/jalandhar6.jpg";
import { useNavigate } from 'react-router-dom'

 const Jalandhar = () => {
    
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
        <span>J</span>
        <span>A</span>
        <span>L</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>H</span>
        <span>A</span>
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
                src={jalandhar1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Rangla Punjab Haveli
                </h5>
                <p className="card-text">
                  Rangla Punjab Haveli In Jalandhar Is A Centre Where The
                  Culture, Traditional Lifestyle And Various Art Forms Of Punjab
                  Are Showcased. Ranging From The Traditional Dances Of Bhangra
                  And Gidda, To Live Puppet Shows Known As Kuthputli And Even
                  The Showcasing Of Traditional Punjabi Artefacts Of Phulkari
                  And Juttis, Which You Can Take Back Home, This Cultural Museum
                  And Showhouse Aims To Guide You Through All The Glory Of
                  Punjabi Culture And History.
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
                src={jalandhar2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Devi Talab Mandir
                </h5>
                <p className="card-text">
                  Devi Talab Mandir Is A 200-Year-Old Hindu Temple Located In
                  Jalandhar, Punjab. It Is In The Heart Of The City, Which
                  Attracts Thousands Of People From All Over The World. The Main
                  Goddess Is Durga, And It Is One Of The 51 Shakti Peethas In
                  India. In Recent Times, The Temple Was Renovated, And Few
                  Changes Have Been Made To The Original Structure. In Addition
                  To It, New Construction Has Been Made Within The Temple
                  Premises Which Resembles The Amarnath Cave.
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
                src={jalandhar3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Science City Kapurthala
                </h5>
                <p className="card-text">
                  Science City Kapurthala, Otherwise Known As Pushpa Gujral
                  Science City Is A Haven For Science Enthusiasts Established By
                  The Government Of Punjab. At A Distance Of 15 Km From
                  Jalandhar, It Is Spread Across An Area Of 72 Acres. Its Motto
                  Is To Help People, Especially Younger Children, Develop An
                  Interest In The Working Of The Physical World Around Them.It
                  Uses Concepts From Physical, Applied, Natural And Social
                  Sciences, Engineering, Technology, Agriculture, Health
                  Sciences, Energy, Industries, Human Evolution, Environment,
                  Ecosystems, Jurassic Parks As Well As Other As Other
                  Intriguing Aspects Of Space, IT, Nuclear Science, Robotics And
                  Biotechnology.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={jalandhar4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Wonderland
                </h5>
                <p className="card-text">
                  Wonderland Is An Amusement And Water Park Located In The City
                  Of Jalandhar, Punjab. It Is Located In Nakadar Road Which
                  Comes After Wadala Chowk And Is 6 Km Away From Jalandhar Bus
                  Station. The Park Functions As A Conjuncture Between Rides,
                  Waterpark, Dining Hall, Entertainment And Shopping Centre. It
                  Is Spread Over An Area On 11 Acres And Enthuses Its Visitors
                  With Its Wave Pool And Aqua Dance Floor Which Plays Punjabi
                  Pop Songs. The Shopping Centre Is A Hub For Souvenirs For
                  Adults And A Box Of Amusing Toys For Children.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={jalandhar5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Harleen Water Fun Park
                </h5>
                <p className="card-text">
                  Harleen Water Fun Park Is Located In Hoshiarpur Road In
                  Jalandhar. It Is One Of The Most Resorted To Summer Retreats,
                  Famous Because Of Its Budget-Friendly Itinerary. The Park
                  Welcomes Families, Couples And Children As An Escape Route
                  From The Summer Heat In Jalandhar. The Area Of Surrounded By
                  Water Rides And Amusements With Six In-Built Pools Which Are
                  Separate For Woman And Children. The Recommended Time To Visit
                  The Park Is During Summers When The Temperature Rises To And
                  Over 30 Degrees Celsius In Jalandhar.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={jalandhar6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  St. Mary’s Cathedral
                </h5>
                <p className="card-text">
                  St. Mary’s Cathedral Is Located On Mall Road In Jalandhar
                  Cantonment Area, Punjab. It Comes Under The Province Of Roman
                  Catholic Archdiocese Of Delhi. It Is A Representation Of The
                  Secular Culture Of India And Was First Built In 1847 By Rev.
                  Fr. John McDonnell, The Order Of Friars Minor Capuchin
                  (O.F.M.CAP). Soon After Independence, The Old Church Was
                  Demolished In 1857 Amidst Violent Riots Refuting Secularism.
                  The Church Was Then Re-Established By The Blessings Of Pope
                  John Paul II, And Laid By The Bishop Of Jalandhar Rev. Dr
                  Symbhorian Keeprathlaid. It Was Inaugurated On The Hindu
                  Occasion Of Diwali On 19 October 1989. The Cathedral Is
                  Flanked By Fragrant Flowers, Gardens And A Gallery Called
                  ‘Rosary Villa’ That Showcases Images Of Jesus Christ And
                  Mother Mary.
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

export default Jalandhar