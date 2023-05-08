import React from "react";
import allahabad1 from '../../image/allahabad1.jpg'
import allahabad2 from "../../image/allahabad2.jpg";
import allahabad3 from "../../image/allahabad3.jpg";
import allahabad4 from "../../image/allahabad4.jpg";
import allahabad5 from "../../image/allahabad5.jpg";
import allahabad6 from "../../image/allahabad6.jpg";
import { useNavigate } from "react-router-dom";



const Allahabad =()=>{
  const navigate=useNavigate();

  function handlechange(){
    navigate("/uttarpradesh");
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
      <span>A</span>
      <span>L</span>
      <span>L</span>
      <span>A</span>
      <span>H</span>
      <span>A</span>
      <span>B</span>
      <span>A</span>
      <span>D</span>
    </h2>

    {/* Title  */}

    {/* card */}
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ width: "24rem", height: "auto" }}>
            <img
              src={allahabad1}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Triveni Sangam
              </h5>
              <p className="card-text">
                One Of The Holiest Places In Central India, Triveni Sangam Is
                Located About 7 Kilometres Away From Civil Lines In Allahabad
                (Prayagraj). It Is The Meeting Point Of Three Rivers - Ganga,
                Yamuna, And Saraswati. It Is One Of The Places Where The Kumbh
                Mela Is Held Once Every 12 Years. The Exact Date Of The Mela Is
                Determined According To The Hindu Calendar I.E. The
                Panchanga.All Three Rivers Ganga, Yamuna, And Saraswati Are
                Highly Revered Rivers In Indian Mythology, And Hence The
                Confluence Point Of These Rivers Hold Tremendous Religious
                Importance. According To Hindu Mythology, Taking A Bath In The
                Holy Triveni Sangam Is Supposed To Flush Away All The Sins And
                Free You From The Cycle Of Rebirth.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={allahabad2}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Khusro Bagh
              </h5>
              <p className="card-text">
                Lying At Lukarganj, Khusro Bagh Is One Of The Most Popular
                Tourist Destinations In Allahabad. The Walled Bracketing Of The
                Khusro Bagh Is A Stunning Remnant Of The Mughal Architecture.It
                Houses Three Sandstone Tombs Of The Jehangir Family; His Wife;
                Shah Begum, His Oldest Son; Khusrau Mirza And His Daughter;
                Sultan Nithar Begum. Most Of The Design Of The Place Is Credited
                To Aqa Reza, An Artist On Jehangir's Court. Landscaped Amid An
                Elaborately Beautiful Garden Of Guava Trees And Roses, The Bagh
                Cites Intricate Carvings And Inscriptions On Each Of The
                Mausoleums.
              </p>
            </div>
          </div>
        </div>

        {/* 3rd */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={allahabad3}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Allahabad Fort
              </h5>
              <p className="card-text">
                Allahabad Fort Is A Splendid Work Of Architecture That Was Built
                During The Reign Of Akbar, The Mughal Emperor In 1583. The
                Marvellous Structure Is Located On The Banks Of The Confluence
                Of The Rivers Ganga And Yamuna And Is Well-Known For Being The
                Largest Fort Ever Built By Akbar.This Famous Attraction Draws
                Thousands Of Tourists From All Over The World Not Only For Its
                Historical Importance But Also For Its Architectural
                Magnificence. However, One Should Note That Quite,
                Unfortunately, Access To Allahabad Fort Is Generally Closed To
                The Common Public. Tourists Are Allowed Inside Only During The
                Kumbh Mela, Which Is Held Once Every 12 Years. Nevertheless, The
                Glorious Architecture And The Massive Build Of The Monument As
                It Stands Strong On The Banks Of The Confluence Of The Two
                Rivers Is A Sight To Behold!
              </p>
            </div>
          </div>
        </div>

        {/* 4th */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={allahabad4}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Allahabad Pillar
              </h5>
              <p className="card-text">
                A Significant Remnant Of The Gupta Era, The Allahabad Pillar Is
                One Of The Many Pillars Set Up By The Mauryan Emperor, Ashoka.
                This Polished Sandstone Spire Hones Inscriptions From The
                Samudragupta And Jahangir Era; The 4th BCE And 17th Century
                Respectively.However, The Allahabad Pillar Was Further Shifted
                From Its Origin To Akbar's Allahabad Fort, Which Is A
                Present-Day Army Land. Thus, Visitors Would Need Prior
                Permission Before Visiting The Allahabad Pillar.
              </p>
            </div>
          </div>
        </div>

        {/* 5th */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={allahabad5}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Magh Mela
              </h5>
              <p className="card-text">
                Organised Every Year In The Pristine City Of Allahabad, Magh
                Mela Is The Mini Version Of The Famous Kumbh Mela. Taking Place
                At The Confluence Of The Three Great Indian Rivers Ganga,
                Yamuna, And Saraswati At Prayag Near Allahabad, The Mela Is Held
                In The Hindu Month Of Magh (January/February) Every Year And Is
                A Much-Awaited Event Amongst The Pilgrims.The Magh Mela Attracts
                A Large Number Of Tourists And Pilgrims Every Year, Looking
                Forward To Washing Their Sins Off In The Holy River At The Time
                Of The Mela, Which Is Spread Over A Period Of 45 Days. The Mela
                Gets Its Name From Its Occurrence In The Hindu Month Of “Magh”
                Or The Month Of February In The Gregorian Calendar. Numerous
                Arrangements Are Made All Over To Accommodate The Massive Crowd
                The Mela Observes, Thus Making It One Of The Must Visit The
                Religious Festival In The Country.
              </p>
            </div>
          </div>
        </div>

        {/* 6th */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={allahabad6}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                New Yamuna Bridge
              </h5>
              <p className="card-text">
                Established In 2004, The Newly Designed Cable-Stayed New Yamuna
                Bridge Over The River Yamuna Was Built To Minimise Traffic Flow
                On The Old Naini Bridge In Allahabad. Also Known As The Naini
                Bridge, It Runs From Northern To Southern Allahabad Connecting
                It To The Neighbourhood Of Naina. Running Over 1510 Metres, The
                Bridge Is Supported By Cables To Its Deck. The New Yamuna Bridge
                Is One Of The First Six-Lane Bridges In India Built With Modern
                Structure And Design. It Acts As A Link Between Allahabad And
                NH-27 Which Stretches For Almost 370 Metres. For The Best Views,
                Visit The New Yamuna Bridge During Dusk When It Is Lit
                Dazzlingly. To Have A Sweeping View Of The Sangam, Visiting
                During Dawn Is Ideal. During The Magh Mela And Kumbh Mela, You
                Can See The Tented Cities Stretch For Miles From This Bridge.
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

export default Allahabad