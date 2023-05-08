import React from 'react'
import varanasi1 from '../../image/varanasi1.jpg'
import varanasi2 from "../../image/varanasi2.jpg";
import varanasi3 from "../../image/varanasi3.jpg";
import varanasi4 from "../../image/varanasi4.jpg";
import varanasi5 from "../../image/varanasi5.jpg";
import varanasi6 from "../../image/varanasi6.jpg";
import { useNavigate } from 'react-router-dom';

 const Varanasi = () => {

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
        <span>V</span>
        <span>A</span>
        <span>R</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
        <span>S</span>
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
                src={varanasi1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ganga Aarti
                </h5>
                <p className="card-text">
                  Ganga Aarti Is An Important Ritual Held On A Grand Scale Every
                  Morning And Evening On The Banks Of The Holy Ganges. The
                  Priests Perform The Aarti At Dashashwamedh Ghat. The Entire
                  Ghat Gets Illuminated With A Divine Light That Can Be Felt
                  Strongly. The Magnificent Ritual Involves Huge Brass Lamps Lit
                  With Oil And The Priests Chant The Holy Mantras That
                  Reverberate In The Entire Location.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={varanasi2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Assi Ghat
                </h5>
                <p className="card-text">
                  When It Comes To Famous Places To Visit In Varanasi, The
                  City's Southernmost Main Ghat Regularly Tops The List. Assi
                  Ghat's Star Attraction Is A Shiva Lingam Beneath A Sacred Fig
                  Tree. It Draws Hundreds Of Pilgrims Every Day, Who Come To
                  Worship Lord Shiva After Rinsing In The Ganges River.Feeling A
                  Little Stiff From Traveling? Swing By Assi Ghat At Sunrise,
                  When You Can Get Your Downward-Facing Dog On With Dozens Of
                  Others During Morning Yoga Accompanied By Live Music Every
                  Day. Tourists Can Also See Another Ganga Aarti Performance
                  Here In The Evening, Which Is Slightly Smaller And More
                  Intimate Than The One At Dasaswamedh Ghat.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={varanasi3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Shri Kashi Vishwanath Temple
                </h5>
                <p className="card-text">
                  Hindu Pilgrims And Tourists Alike Travel For Thousands Of
                  Miles To Reach The Shri Kashi Vishwanath Temple, A Sacred
                  Attraction Around Four Kilometers From The Varanasi Junction
                  Railway Station Near The Manikarnika Ghat. The Impressive
                  Structure, Dedicated To The Hindu Deity Shiva, Has Earned The
                  Nickname "The Golden Temple" For Its Striking Spire – Plated
                  In Some 800 Kilograms Of Pure Gold. The Distinctive Design Of
                  This Temple Has Gone On To Inspire The Architecture Of
                  Hundreds Of Other Temples Across India.Strict Security
                  Measures Around The Complex Require That Tourists Stash Their
                  Cameras, Phones, Bags, And Other Belongings In A Rentable
                  Locker Nearby.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={varanasi4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Ramnagar Fort
                </h5>
                <p className="card-text">
                  There Are Few Destinations In India Without A Fort, And
                  Varanasi Is No Exception. About 14 Kilometers From The City
                  Center, You'll Find Ramnagar Fort. The 18th-Century Sandstone
                  Fort And Palace Is No Longer Used As A Defensive Structure,
                  But Instead Houses A Quirky Museum Brimming With Vintage
                  Automobiles, Elaborate Hookahs, Antique Weapons, Sedan Chairs
                  Decked Out In Jewels, And A One-Of-A-Kind Astronomical Clock
                  That's More Than 150 Years Old.After Enjoying An Archeological
                  Treasure Hunt At The Museum, Check Out The Fort's Temples, One
                  Of Which Honors Veda Vyasa, Author Of The Mahabharata And
                  Other Important Hindu Epics.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={varanasi5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kedar Ghat
                </h5>
                <p className="card-text">
                  Kedar Ghat Is One Of The Oldest Ghats In Varanasi And Is
                  Considered Cleaner For Bathing In The Holy River Ganga And
                  Offering Prayers To Lord Shiva At The Kedareshwar Temple. It
                  Is Often Visited For The Beautiful Surroundings And The
                  Spiritual Vibe.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={varanasi6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Nepali Mandir
                </h5>
                <p className="card-text">
                  One Of The Oldest Temples In The City, Nepali Temple Is A 19th
                  Century Shrine Dedicated To Lord Shiva. It Was Established By
                  The King Of Nepal And Is A Spitting Image Of The Pashupatinath
                  Temple Located In Kathmandu. The Traditional Architecture Of
                  The Structure Made Of Stone, Terracotta And Wood Carvings
                  Attracts Visitors In Large Numbers.
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

export default Varanasi