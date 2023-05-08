import React from 'react'
import ti1 from '../../image/ti1.jpg';
import ti2 from "../../image/ti2.jpg";
import ti3 from "../../image/ti3.jpg";
import ti4 from "../../image/ti4.jpg";
import ti5 from "../../image/ti5.jpg";
import ti6 from "../../image/ti6.jpg";
import { useNavigate } from "react-router-dom";

 const Trivendrum = () => {

const navigate = useNavigate();

function handlechange() {
  navigate("/kerala");
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
        <span>T</span>
        <span>R</span>
        <span>I</span>
        <span>V</span>
        <span>E</span>
        <span>N</span>
        <span>D</span>
        <span>R</span>
        <span>U</span>
        <span>M</span>
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
                src={ti1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Padmanabhaswamy Temple
                </h5>
                <p className="card-text">
                  One Of The 108 Divya Desams, Sree Padmanabhaswamy Temple Is
                  Located In Thiruvananthapuram, The Capital City Of Kerala.
                  Embellished In Gold-Plated Covering, The Temple Is Opened Only
                  To Hindu Followers. Dedicated To Lord Padmanabha; One Of The
                  Avatars Of Lord Vishnu, The Padmanabhaswamy Temple Is One Of
                  The Principal Centres Of Vaishnava Worship In The Dharma Of
                  Vaishnavism. Built As A Replica Of The Adikesavaperumal Temple
                  In Thiruvattar, The Padmanabhaswamy Temple Is Well-Preserved
                  Antiquity. Although The Origin Of This Temple Still Remains A
                  Mystery, Devotees Believe It To Have Existed Since The First
                  Day Of The Kali Yuga, Which Was 5000 Years Ago. The
                  Padmanabhaswamy Temple Also Has A Mention In The Bhagwad Gita.
                  The Scripture States That Balarama, The Older Brother Of Lord
                  Krishna Frequented The Temple, Bathed In The Padmatheertham
                  And Also Made Several Offerings The Deity Here.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ti2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Magic Planet
                </h5>
                <p className="card-text">
                  Renowned As The First Magic Park In The Entire World, The
                  Magic Planet Is An Absolute Treat For The Inquisitive Child In
                  Us All. This Mystical Theme Park Aims At Changing The
                  Perspective With Which We Look At Magic- Instead Of Looking At
                  It As A Mystery, The Magic Planet Encourages Us To Put On Our
                  Science Glasses And Look At The Beautiful Art Of Magic As A
                  Segment Of Pragmatic Math And Awe-Inspiring Science.
                  Inaugurated By Then Chief Minister Of Kerala, Mr Oommen Chandy
                  On October 31, 2014, The Magic Planet Has Done A Great Deal In
                  Not Only Introducing The Layman To The Vast World Of Magic,
                  But Also To Rehabilitate The Extraordinarily Talented And
                  Capable Indian Street Magicians Who Will Charm You By
                  Exhibiting Some Shocking Magic Moves And Awe-Striking Tricks.
                  Few Of These Famous Tricks Are The 'Indian Mango Mystery' And
                  The 'Indian Basket Trick', Which Have Never Failed To
                  Entertain And Amuse The Onlooker.
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
                src={ti3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Karikkakom Chamundi Devi Temple
                </h5>
                <p className="card-text">
                  Adding To The Historical Significance And Cultural Diversity
                  Of The Little Yet Vibrant City Of Karikkakom Is The Karikkakom
                  Sree Chamundi Devi Temple Which Is Over 600 Years Old. This
                  Ancient Temple Is Actually Set In Dense Green Environs With
                  The Tall Lush Palms Enveloping It From All Sides. The
                  Karikkakom Devi Is A Hindu Temple That Enshrines Goddess
                  Chamundi. However, The Distinctive Peculiarity Of This Temple
                  Is That It Worships All The Three Forms Of Goddess Chamundi-
                  Maha Chamundi, Rakhta Chamundi And Bala Chamundi.What Most
                  People Don't Know About This Temple's History Is That In The
                  Olden Days When The Monarchy Was Practiced, The Kings Chose
                  This Temple As The Destination For Bringing Justice And
                  Punishing Wrong Doers. The Accused Were Brought To Stand In
                  Front Of Rakhta Chamundidevi's Sanctum, Put 21 Coins In The
                  Nada And Asked To Say The Truth.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ti4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Shanghumukham Beach
                </h5>
                <p className="card-text">
                  One Of The Most Popular Beaches, Shanghumukham Beach Is Known
                  For Its Pristine Waters And Soulful Sunsets. It Runs Next To
                  The Trivandrum Airport And A Must Visit For Those Seeking
                  Tranquility.
                </p>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src={ti5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Attukal Temple
                </h5>
                <p className="card-text">
                  The Attukal Bhagavathy Temple In Trivandrum Is One Of The Most
                  Talked About Temples Of Not Just The South, But The Entire
                  Country. Among The Many Reasons For Its Popularity, Probably
                  The Most Eye-Catching One Is That It Received A Guinness World
                  Book Record When Over 37 Lakh Women Offered Pongala At This
                  Temple At Once, Making It The Destination Of The Largest
                  Gathering Of Women For A Religious Activity! Popularly Known
                  As The 'Sabarimala Of Women', This Temple Draws A Massive
                  Throng Of Women Each Year During The Famous Attukal Pongala
                  Festival. Rich In Cultural Heritage And Adorned By Impeccable
                  Tamil Architecture, This Temple Holds An Extremely Critical
                  Place In The Hearts Of The Natives And The Devotees Of Goddess
                  Bhagavathy, The Principal Deity Of This Temple.
                </p>
              </div>
            </div>
          </div>

          {/* 6th */}

          <div className="col">
            <div className="card" style={{ width: "24rem", height: "auto" }}>
              <img
                src={ti6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ width: "100%" }}>
                  Happy Land Water Theme Park
                </h5>
                <p className="card-text">
                  Happy Land Water Theme Park Is Quite Popular Among Children As
                  Well As Adults For Its Various Kinds Of Adventurous Water
                  Rides.
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
          Back To Kerala
        </button>
      </div>
    </>
  );
}

export default Trivendrum
