import React from 'react'
import ban1 from '../../image/ban1.jpg';
import ban2 from "../../image/ban2.jpg";
import ban3 from "../../image/ban3.jpg";
import ban4 from "../../image/ban4.jpg";
import ban5 from "../../image/ban5.jpg";
import ban6 from "../../image/ban6.jpg";
import { useNavigate } from 'react-router-dom';

 const Banglor = () => {


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
        <span>N</span>
        <span>G</span>
        <span>L</span>
        <span>O</span>
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
                src={ban1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  ISKCON Temple Bangalore
                </h5>
                <p className="card-text">
                  ISKCON Sri Radha Krishna Temple Was Inaugurated In The Year
                  1997. It Is Not Just A Temple, But A Cultural Complex Housing
                  The Temples Dedicated To The Deities Of Sri Sri Radha
                  Krishnachandra, Sri Sri Krishna Balarama, Sri Sri Nitai
                  Gauranga, Sri Srinivasa Govinda, Sri Prahlada Narasimha,
                  Bhakta Hanuman, Garudadeva And Srila Prabhupada, Founder
                  Acharya Of ISKCON
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ban2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Wonderla Amusement Park
                </h5>
                <p className="card-text">
                  Wonderla Holidays Limited, Is The No. 1 Amusement Park
                  Operator In India. Promoted By Arun K. Chittilappilly And
                  Kochouseph Chittilappilly, Wonderla Currently Owns And
                  Operates Three Amusement Parks – One Each In Kochi, Bangalore
                  And Hyderabad Respectively And A Resort In Bangalore. Wonderla
                  Kochi, Spread Over 35 Acres Of Land, Is Thrilling Visitors
                  With 56 Rides Since 2000. Wonderla Bangalore, Spanning Over 82
                  Acres, Offers A Spectacular Range Of Entertainment With 61
                  Rides.
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
                src={ban3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Bangalore Palace
                </h5>
                <p className="card-text">
                  Built By Chamaraja Wodeyar In The Year 1887, Bangalore Palace
                  Is An Inspired Design By England’s Windsor Castle And Is One
                  Of The Best Tourist Places In Bangalore. The Evocative Palace
                  Comprises Fortified Arches, Towers, Tudor-Style Architecture,
                  And Green Lawns Along With Sophisticated Wood Carvings In The
                  Interior. It Is Where The Royal Family Still Resides At The
                  Present. This Tudor-Style Architectural Creation Is Nothing
                  Less Than An Epitome. The Palace Has Earned Foundations That
                  Have Been Attributed To The Wodeyars Of Mysore.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ban4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Kempegowda International Airport: The Spirit In A White Sari
                </h5>
                <p className="card-text">
                  He Kempegowda International Airport Is One Of The Busiest And
                  Most Haunted Airports In India, With State-Of-The-Art
                  Architecture And Provides Connectivity To A Number Of
                  International And Domestic Destinations. Spooky Occurrence: A
                  Pilot Recalls The Story Of The Lady In A White Sari Requesting
                  To Help Her. When He Came Back, She’d Disappeared! Some
                  Airlines Have Also Spotted This Woman On The Runway With Her
                  Arms Stretched Out.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ban5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Call Center: The Screaming Spirit
                </h5>
                <p className="card-text">
                  A Most-Visited And The Busiest Road Of Bangalore, MG Road Or
                  Mahatama Gandhi Road In Bangalore Is A One-Stop Destination
                  For Everyone. From Shopping Adventures Of Handicrafts,
                  Attires, Bone China, Etc And Dance Clubs To Call Centers And
                  Offices, MG Road Blankets Everything One Can Think Of In A
                  City. Young, Working Professionals Can Mostly Be Seen On The
                  Streets Of This Region In Bangalore. With A Plethora Of Cafes
                  And Restaurants Serving Some Of The Most Lip-Smacking
                  Delicacies, MG Road Tends To Be A Favorite Amongst Locals And
                  Tourists Alike
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ban6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Wonder La Water Park
                </h5>
                <p className="card-text">
                  Adventure On Your Mind? Take Your Family To Wonderla
                  Bangalore, One Of The Best Amusement Parks And Places To See
                  In Bangalore. Luring In A Large Influx Of Youngsters And
                  Families Year-Round, This Park Is Perfect For Those Who Wish
                  To Experience An Adrenaline Rush In A World-Class Waterpark
                  That Is Safe And Inexpensive At The Same Time. The High-Thrill
                  Dry Rides Of This Park Are The Star Attraction Here, But It’s
                  Also Famous For Its Numerous Water Rides And Shows, And There
                  Are About 60 Of Such Rides That You Can Enjoy Here!
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

export default Banglor