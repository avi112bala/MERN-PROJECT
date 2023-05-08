import React from 'react'
import agra1 from "../../image/agra1.jpg"
import agra2 from "../../image/agra2.jpg";
import agra3 from "../../image/agra3.jpg";
import agra4 from "../../image/agra4.jpg";
import agra5 from "../../image/agra5.jpg";
import agra6 from "../../image/agra6.jpg";
import { useNavigate } from 'react-router-dom';


 const Agra = () => {
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
        <span>G</span>
        <span>R</span>
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
                src={agra1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Taj Mahal
                </h5>
                <p className="card-text">
                  One Of The Seven Wonders Of The World, Taj Mahal Is Located On
                  The Banks Of River Yamuna In Agra. It Was Built By The Mughal
                  Emperor Shah Jahan As A Memorial For His Third Wife, Mumtaz
                  Mahal. It Also Houses The Tomb Of Shah Jahan Himself.
                  Constructed Entirely Out Of White Marble In The 17th Century,
                  Taj Mahal Is One Of The Most Beautiful Monuments In The World.
                  Every Year Visitors Numbering More Than The Entire Population
                  Of Agra Pass Through The Magnificent Gates To Catch A Glimpse
                  Of This Breathtaking Monument!
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={agra2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Agra Fort
                </h5>
                <p className="card-text">
                  Also Known As Lal Qila, Fort Rouge Or Red Fort Of Agra, The
                  Agra Fort Is A UNESCO World Heritage Site. It Is Situated At A
                  Distance Of About 2.5km Northwest Of The Famous Taj Mahal. The
                  Construction Of The Massive Fort Of Red Sandstone By The Banks
                  Of Yamuna River Was Started By Emperor Akbar.Also Known As Lal
                  Qila, Fort Rouge Or Red Fort Of Agra, The Agra Fort Is A
                  UNESCO World Heritage Site. It Is Situated At A Distance Of
                  About 2.5km Northwest Of The Famous Taj Mahal.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={agra3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Itimad-Ud-Daulah's Tomb
                </h5>
                <p className="card-text">
                  On The Banks Of The Yamuna River Sits Another One Of Agra's
                  Exquisite Structures: Itimad-Ud-Daulah's Tomb. The Mausoleum
                  Contains The Remains Of Mirza Ghiyas Beg, A Persian Official
                  Who Served The Mughal Empire, As Well As His Wife. Legend Has
                  It That This Jewelry Box-Like Tomb Was Actually The
                  Inspiration For The Taj Mahal, Earning It The Nickname "Baby
                  Taj." .
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={agra4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Chini Ka Rauza
                </h5>
                <p className="card-text">
                  After Visiting Itimad-Ud-Daulah's Tomb, Head One Kilometer
                  North To See Chini Ka Rauza, A Funerary Monument That Houses
                  The Tomb Of Afzal Khan Shirazi, Who Served As The Prime
                  Minister For Mughal Emperor Shah Jahan. While Not Nearly As
                  Well Preserved As Other Attractions In Agra, The Indo-Persian
                  Structure Is Noteworthy For Being The First Monument To
                  Feature Chini, A Distinctive Decoration Made From Turquoise,
                  Yellow, Green, And Orange Glazed Tiles. As The Name Of The
                  Building Suggests, Each Of Its Tiles Were Imported From
                  China–An Impressive Feat During The 17th Century, When This
                  Monument Was Constructed. Step Inside Chini Ka Rauza To See An
                  Array Of Detailed Paintings And Islamic Inscriptions.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={agra5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Akbar's Tomp
                </h5>
                <p className="card-text">
                  The Final Resting Place Of Mughal Emperor Akbar, Akbar's Tomb
                  Is Situated In Sikandra, The Outskirts Of Agra And Spreads
                  Over An Area Of 119 Acres. An Important Architectural
                  Masterpiece Of The Mughal Era, It Was Built Between 1605 And
                  1618. Built Entirely Out Of Sandstone And White Marble,
                  Emperor Akbar Himself Oversaw The Construction Of This Tomb
                  Until His Death. Unlike The Other Tombs Of Famous Muslim Kings
                  Around The World, The Tomb Of Akbar Faces Towards The Rising
                  Sun Instead Of Masjid Of Mecca
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div
              className="card"
              style={{ width: "24rem", height: "33.14rem" }}
            >
              <img
                src={agra6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Fatehpur Sikri
                </h5>
                <p className="card-text">
                  Just An Hour's Drive From The Taj Mahal, Fatehpur Sikri Makes
                  For A Worthwhile Day Trip From Agra. The City, Once The
                  Capital Of The Mughal Empire Some 500 Years Ago, Was Built By
                  Akbar As A Salute To The Famous Sufi Saint, Shaikh Salim
                  Chishti, Who Accurately Predicted The Birth Of An Heir.
                  Residents Abandoned The City Not Long After It Was Built, When
                  Water Supplies Ran Too Low
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

export default Agra