import React from 'react'
import ba1 from '../../image/ba1.jpg';
import ba2 from "../../image/ba2.jpg";
import ba3 from "../../image/ba3.jpg";
import ba4 from "../../image/ba4.jpg";
import ba5 from "../../image/ba5.jpg";
import ba6 from "../../image/ba6.jpg";
import { useNavigate } from 'react-router-dom'

 const Badami = () => {

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
        <span>B</span>
        <span>A</span>
        <span>D</span>
        <span>A</span>
        <span>M</span>
        <span>I</span>
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
                src={ba1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Cave Temples
                </h5>
                <p className="card-text">
                  The Cave Temples Of Badami Consist Of Four Separate Temples,
                  Each Holding Intricate Carvings And Depictions. These Carvings
                  Depict Shiva And Vishnu In Various Avatars In The First 3
                  Temples, Representing The Brahmanical Style. The Fourth Temple
                  Is Dedicated To Jain Tirthankaras. These Beautiful Red
                  Sandstone Temples Are Candidates For The UNESCO World Heritage
                  Sites List.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ba2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Badami Fort
                </h5>
                <p className="card-text">
                  Badami Fort Is Was Built By Chalukyan King Pulakeshi In 543
                  AD. Perched On The Top Of A Cliff, This Fort Is Accompanied By
                  Two Shivalaya Complexes Dating Back To The 5th Century. A 16th
                  Century And A 14th-Century Watchtower Are Also Featured Atop
                  This Hill. The Fort Is Located 500 M Away From The Badami Bus
                  Stand.The Badami Fort Was The Chalukyan Capital 540 AD To 757
                  AD Before The Place Was Destroyed By The Pallavas In 642 AD.
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
                src={ba3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Aihole
                </h5>
                <p className="card-text">
                  Home To Over 125 Beautiful Chalukyan Temples And Monuments,
                  Aihole Is A Historical Site In Bagalkot, Karnataka. It Was
                  Declared A UNESCO World Heritage Site And Is Surrounded By
                  Marvellous Sandstone Hills And Villages On The Banks Of The
                  Malaprabha River. It Was Formerly The Capital Of The Chalukya
                  Dynasty With Over 100 Hindu And Jain Temples Dating Back To
                  Around 6th To 12th Century. Today, Aihole Is A Prominent
                  Centre For Temple Architecture And Intricate Stonework.
                  Aihole, Known Initially As Ayyavole Or Aryapura, Played A
                  Significant Role In Hindu Mythology
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ba4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Archaeological Museum
                </h5>
                <p className="card-text">
                  Being The Capital Of The Ancient Chalukya Empire, Badami Is
                  Rich In The Ancient Cultural Artefacts Left Behind By This 6th
                  Century Kingdom. Apart From Its Famous Rock-Cut Temples, The
                  Archaeological Museum Is A Brilliant Source For Those Looking
                  To Educate Themselves On The Past Civilisation Of This Land.
                  Located At The Foothills Of The Northern Hill, This Historical
                  Treasure Chest Aims To Collect And Preserve Explored
                  Materials, Sculptures, Inscriptions, Architectural Members
                  Scattered In And Around Badami.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ba5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Bhuthanatha Temples
                </h5>
                <p className="card-text">
                  The Two Temples Facing The Agastya Lake, Are Known As The
                  Bhuthanatha Group Of Temples. To The East Of The Lake Is The
                  Bhuthanatha Temple And The Temple To The North-East Is The
                  Mallikarjuna Temple. Built Of Local Sandstone, They Are
                  Dedicated To Lord Shiva, In The Form Of Bhuthanatha. The
                  Architecture Resembles A Typical South Indian Temple. The
                  Sandstone Used To Build These Temples Gives Them A Beautiful
                  Glittering Tint In The Afternoon Sun.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ba6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Mallikarjuna Temple
                </h5>
                <p className="card-text">
                  Within The Bhootanatha Temple Cluster By The Beautiful Agastya
                  Lake Of Badami Lies The Elegantly Designed Mallikarjuna
                  Temple. Dedicated To Lord Shiva, The Temple, Along With
                  Smaller Shrines Built Around It, Was Constructed In A
                  Star-Shaped Plan In The 11th Century. Its Structure Is The
                  Representative Of The Chalukyan Architectural Influence Seen
                  On A Majority Of The Historical Buildings In This Heritage
                  Town.
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

export default Badami