import React from 'react'
import ooty1 from '../../image/ooty1.jpg';
import ooty2 from "../../image/ooty2.jpg";
import ooty3 from "../../image/ooty3.jpg";
import ooty4 from "../../image/ooty4.jpg";
import ooty5 from "../../image/ooty5.jpg";
import ooty6 from "../../image/ooty6.jpg";
import { useNavigate } from 'react-router-dom'

 const Ooty = () => {
    const navigate=useNavigate();

    function handlechange(){
        navigate('/tamilnadu')
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
        <span>O</span>
        <span>O</span>
        <span>t</span>
        <span>y</span>
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
                src={ooty1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Nilgiri Mountain Railway
                </h5>
                <p className="card-text">
                  Nilgiri Mountain Railway, Also Known As Toy Train In Ooty, Is
                  One Of The Key Attractions Of The Popular Hill Station Ooty.
                  Such Is The Train's Popularity And History That It Was
                  Declared As A World Heritage Site By UNESCO In 2005. Started
                  In The Year 1899, It Has Continued To Charm Its Visitors Over
                  The Past Many Years Winding Its Way Through The Best Of
                  Nature.The Toy Train Covers A Distance Of Total 46 Km In A
                  Span Of 5 Hours And Takes One Through A Truly Spectacular
                  Journey Filled With Picturesque Views En Route.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ooty2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ooty Lake
                </h5>
                <p className="card-text">
                  Ooty Lake Is One Of The Most Refreshing And Beautiful Places
                  To Visit In Ooty. It Lies At A Distance Of Approximately 2 Km
                  From Ooty City In The Green Hills Of The Nilgiris District.
                  The Stunning Lake Is Spread Over An Area Of 65 Acres, And Its
                  Foundation Was Laid Down By John Sullivan Who Was The
                  Collector Of Coimbatore In 1824. Ooty Lake Is Surrounded By
                  Eucalyptus Trees And Greenery All Around And Is A Great Place
                  To Experience The Beauty Of This Hill Station. One Can Also
                  Spot Numerous Streams Coming Out Through The Hills.
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
                src={ooty3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Trekking
                </h5>
                <p className="card-text">
                  Ooty Is The Base For Several Exciting Treks, Ideal For Both
                  Amateurs And Professionals With Varying Difficulty Levels.
                  While Undertaking These Treks, You Will Come Across The
                  Picturesque Landscape, Meandering Streams, Gushing Waterfalls
                  And Lush Green Dense Forests. You Can Also Witness The
                  Charming Mudumalai Sanctuary In The Backdrop Of The
                  Magnificent Hills And Valleys.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ooty4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Avalanche Lake
                </h5>
                <p className="card-text">
                  At A Distance Of 26 Kilometres From Ooty, The Avalanche Lake
                  In The Nilgiris District Of Tamil Nadu Is A Famous Tourist
                  Spot. Especially Renowned Among Nature Enthusiasts And
                  Photographers, The Avalanche Lake Is Counted As One Of The
                  Star Attractions That Ooty Houses.The Lake Is Set Amidst A
                  Captivating Landscape Which Is Filled With Lovely Flowers. The
                  Waterfalls That Fall Down The Nearby Mountains Further Add To
                  The Beauty Of The Place.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ooty5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thread Garden
                </h5>
                <p className="card-text">
                  The Thread Garden At Ooty Is A Popular Tourist Spot That
                  Exhibits Some Of The Most Magnificent And Exquisite Collection
                  Of Artificial Flowers And Plants, All Made By The Expert Hands
                  Of The Skilful Artists By Using JUST Thread.Antony Joseph, The
                  Mastermind Behind This Unique Inception Along With His 50
                  Skillful And Profecient Helpers Has Worked Constantly For 12
                  Years, To Create The Marvels Of Thread We See Today.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ooty6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Pykara Lake
                </h5>
                <p className="card-text">
                  Pykara Lake Is A Popular Getaway That Is At A Distance Of
                  About 20 Kilometres From Ooty, In The Nilgiri District Of
                  Tamil Nadu, India. The Pykara Village, Along With A Beautiful
                  River By The Same Name, Also Houses A Dam And A Power Plant.
                  Because Of The Construction Of The Dam, The Backwaters Have
                  Formed An Enormous Lake, Which Is Now Known As The Pykara Lake
                  And Has Become A Significant Tourist Attraction That Is
                  Visited By Large Numbers Of People All Year Round. It Has
                  Everything That A Person On Vacation Can Ask For, Right From
                  Ambience And Comfort To Scenic Beauty.
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
          Back To TamilNadu
        </button>
      </div>
    </>
  );
}
export default Ooty
