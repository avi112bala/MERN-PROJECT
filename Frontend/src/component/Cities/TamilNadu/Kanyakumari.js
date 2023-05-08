import React from 'react'
import kan1 from '../../image/kan1.jpg';
import kan2 from "../../image/kan2.jpg";
import kan3 from "../../image/kan3.jpg";
import kan4 from "../../image/kan4.jpg";
import kan5 from "../../image/kan5.jpg";
import kan6 from "../../image/kan6.jpg";
import { useNavigate } from 'react-router-dom'

 const Kanyakumari = () => {

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
        <span>K</span>
        <span>A</span>
        <span>N</span>
        <span>Y</span>
        <span>A</span>
        <span>K</span>
        <span>U</span>
        <span>M</span>
        <span>A</span>
        <span>R</span>
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
                src={kan1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kanyakumari Beach
                </h5>
                <p className="card-text">
                  Located In The Southernmost Part Of India, Kanyakumari Beach
                  With Its Beautiful Hue-Changing Beaches, The Confluence Of
                  Three Water Bodies: Bay Of Bengal, Indian Ocean, And The
                  Arabian Sea. Miraculously, Here You Can See That The Water Of
                  Three Seas Does Not Mix, You Can Distinguish Between The
                  Turquoise Blue, Deep Blue, And Sea Green Waters Of The Three
                  Seas, Though The Colors Keep Changing With The Season And The
                  Day's Weather.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kan2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Vivekananda Rock Memorial
                </h5>
                <p className="card-text">
                  The Magnificent Vivekananda Rock Memorial Is Located On A
                  Small Island Off Kanyakumari. It Has The Picturesque Indian
                  Ocean In Its Backdrop. It Is Situated On One Of The Two
                  Adjacent Rocks Projecting Out Of The Lakshadweep Sea And
                  Comprises Of The 'Shripada Mandapam' And The 'Vivekananda
                  Mandapam'.Vivekananda Rock Memorial Is Located At About 500
                  Meters East Of The Mainland Of Vavathurai In Kanyakumari And
                  Can Be Accessed By Regular Ferries.
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
                src={kan3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Thiruvalluvar Statue
                </h5>
                <p className="card-text">
                  Dedicated To The Accomplished Philosopher And Poet
                  Thiruvalluvar, This Beautiful Statue Finds Itself On A Small
                  Island Near Kanyakumari. Thiruvalluvar Was The Author Of A
                  Legendary Work In The World Of Literature, Tirukkural, The
                  Classic Tamil Text. In His Devotion, The Work For The Statue
                  Started In 1990 And Continued Till 1999, During The Year In
                  Which The Figure Finally Got Completed.This Monument Stands
                  Tall At A Mighty Height Of 133 Feet And Is Perched Upon A
                  38-Foot Pedestal.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kan4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Wax Museum
                </h5>
                <p className="card-text">
                  The Wax Museum Is Definitely Is One Of Its Kind Museum That
                  Stands Above The Rest In Terms Of Creativity. It Is Situated
                  In Kanyakumari Region In The City Of Baywatch.The Museum
                  Houses All The Important Figures Of The Indian History As Well
                  As The World History In Wax Form. The Wax Figures Are
                  Realistic And The Wax Museum Is Reminiscent Of Its Famous
                  Counterpart In London. There Are Also Many Current
                  International Figures Like The Wax Counterpart Of Arnold
                  Schwarzenegger.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={kan5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Courtallam Falls
                </h5>
                <p className="card-text">
                  Set In The Midst Of A Panchayat Town In The Tirunelveli
                  District Of Tamil Nadu, The Courtallam Falls Are Renowned In
                  The State For Its Enormity As Well As Ferocity. At An
                  Elevation Of 160 Metres (520 Feet), The Cascade Towers Above
                  Its Green Surroundings And Magnificent Hillside.A Scene From
                  The Award-Winning 1992 Hindi Movie 'Roja' Was Filmed Here,
                  Along With Several Other South Indian Movies, And The
                  Waterfall Has Continued To Grow In Its Popularity As A Tourist
                  Attraction Since Then.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={kan6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Lord Subramanya Temple
                </h5>
                <p className="card-text">
                  Lord Subramanya Temple Is One Of The Most Interesting Temples
                  To Visit When In India. The Never Ending Pillars And Countless
                  Towers Give It A Magnificent Look.Lord Subramanya Temple Is
                  One Of The Many Places In India, Where You Could Get A Taste
                  Of The Wonderful Things That Await For You There.Many
                  Festivals Are Celebrated At Lord Subramanya Temple And
                  Especially During Certain Religious Holidays, It Is Very Hard
                  To Get In There. It Is Very Easy To Travel To The Temple
                  Either By Bus Or By Train.
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

export default Kanyakumari
