import React from "react";
import { useNavigate } from "react-router-dom";
import vrindavan1 from "../../image/vrindavan1.jpg";
import vrindavan2 from "../../image/vrindavan2.jpg";
import vrindavan3 from "../../image/vrindavan3.jpg";
import vrindavan4 from "../../image/vrindavan4.jpg";
import vrindavan5 from "../../image/vrindavan5.jpg";
import vrindavan6 from "../../image/vrindavan6.jpg";

const Vrindavan =()=>{


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
      <span>R</span>
      <span>I</span>
      <span>N</span>
      <span>D</span>
      <span>A</span>
      <span>V</span>
      <span>A</span>
      <span>N</span>
    </h2>

    {/* Title  */}
    {/* card */}
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ width: "24rem", height: "auto" }}>
            <img
              src={vrindavan1}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Banke Bihari Mandir
              </h5>
              <p className="card-text">
                Shri Banke Bihari Mandir Is A Hindu Temple Dedicated To Lord
                Krishna In The Holy City Of Vrindavan In The Mathura District.
                One Of The Most Revered Shrines In The Country, This Temple Is
                Among The 7 Temples Of Thakur Of Vrindavan Which Also Include
                Sri Radhavallabh Ji, Shri Govind Dev Ji And Four Others. As You
                Come In The Presence Of The Banke Bihari Temple, You Are
                Confronted With The Stunning Rajasthani- Style Edifice Of The
                Temple, Which Is Adorned With Arched Windows And Meticulous
                Stonework. The Image Of Lord Krishna In The Temple Appears In
                The Form Of A Child And Is Seen Standing In The Tribhanga
                Position. One Interesting Fact About The Banke Bihari Temple Is
                That There Are No Bells Or Conchs In The Premises, As The Lord
                Does Not Like The Sound Of These Instruments. Divine Invocations
                Are Performed By Peaceful Chants Of 'Radha Naam'.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd */}

        <div className="col">
          <div className="card mb-2" style={{ width: "24rem", height: "auto" }}>
            <img
              src={vrindavan2}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Prem Mandir
              </h5>
              <p className="card-text">
                Imbued With Elegance And Grandeur, The Prem Mandir Is A Massive
                Temple That Was Shaped By Jagadguru Shri Kripaluji Maharaj In
                The Year 2001. Known As "Temple Of God's Love", This Grand
                Religious Place Is Dedicated To Radha Krishna As Well As Sita
                Ram. Located In Vrindavan, The Holy City In The District Of
                Mathura In Uttar Pradesh, The Temple Is Enveloped With Piousness
                And Serenity. This Newly Constructed Temple Is The Most
                Beautiful In The Entire Brij Area And Is Crowded With Devotees
                During The Time Of The Aarti.
              </p>
            </div>
          </div>
        </div>

        {/* 3rd */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={vrindavan3}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Nidhivan
              </h5>
              <p className="card-text">
                Nidhivan, A Temple Nestled In The Holy Birthplace Of Krishna,
                Vrindavan Has A Sense Of Mystery Or Miracle Attached To It.
                Nidhivan Has A Hearsay That Lord Krishna Visits It Every Night.
                And That's Not About It, There Is Also A Buzz That He Performs
                Ras Leela Every Night.There Is No Sighting Of Any Animal Or Bird
                Post 7 PM Either Because It Is Said That They Elope From The
                Area As Well. Not Just This, But Nidhivan Has A Unique
                Surrounding. It Is Flanked By Unusual Hollow Trees That Are
                Short Heightened And The Branches Are Twisted Downwards And Lie
                In Tangles. The Tulsi Plants Also Stand In Pairs. It's Hard To
                Believe In These Mysteries But The Strong Reasons Somehow Hold
                Our Beliefs In The Speculation. People Residing Here Close Down
                Their Windows And Doors After The Evening Aarti Bells.
              </p>
            </div>
          </div>
        </div>

        {/* 4th */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={vrindavan4}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                ISKCON Vrindavan
              </h5>
              <p className="card-text">
                Also Known As Sri Sri Krishna Balaram Mandir, ISKCON Vrindavan
                Is A Dream Fulfilled Of Swami Prabhupada ,Who Wished To Build A
                Temple For The Brothers - Krishna And Balaram - In The Same Holy
                City Where They Played Together Several Centuries Ago. Located
                In The Raman Reti Area Of Vrindavan, ISKCON Temple Has Become
                The Major Attraction In The City And Is Thronged By Devotees
                From Nearby Delhi And All Over The World. People Visiting The
                Divine Temple Are Spellbound By The Aarti And Bhagavad Geeta
                Classes Held Here Every Day.The Three Altars At ISKCON Vrindavan
                Are The Seats Of Sri Sri Gaura Nitai, Shri Krishna And Balaram
                And Sri Sri Radha Shyamasundara Along With Lalita And Vishakha.
                The Presiding Deity Of The Temple, However, Is Lord
                Krishna-Balaram. There Are Two Idols On The Central Slab Of The
                Temple Which Depict Krishna And Balarama, Who Were Brothers. On
                The Right Dais Are The Idols Of Their Friends.
              </p>
            </div>
          </div>
        </div>

        {/* 5th */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={vrindavan5}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Barsana
              </h5>
              <p className="card-text">
                Barsana Is A Place Of Historical Significance Which Is Located
                In The District Of Mathura At Uttar Pradesh, India. The Town Is
                Nicknamed As The Birthplace Of Radha Rani As The Hindu Goddess
                Radha Was Born In This City. Barsana Is Also Popular For The
                Grand Celebration Performed During The Holi Festival, Known As
                The Lathmar Holi. Barsana Is Also Called As Vrishabhanupura,
                Named After The Founder Vrishabhanu Maharaj, Who Is The Father
                Of Shri Radha. The Town Has Many Places Of Visit Which Are Of
                Religious And Ancient Significance. It Is Surrounded By Many
                Places Where Goddess Radha Spent Her Times With Her Sakhis And
                Lord Krishna.The Beautiful City Is Situated Around Two Hills,
                Namely, Brahma Hill And Vishnu Hill, Which Have Four Peaks In
                The Region Of Braj. According To Popular Beliefs, These Peaks
                Are The Heads Of Lord Brahma. Each Of These Peaks Has A Temple
                Which Are Of Religious Significance.
              </p>
            </div>
          </div>
        </div>

        {/* 6th */}

        <div className="col">
          <div className="card" style={{ width: "24rem", height: "auto" }}>
            <img
              src={vrindavan6}
              className="card-img-top"
              alt="..."
              style={{ width: "24rem", height: "15rem" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ width: "100%" }}>
                Mathura
              </h5>
              <p className="card-text">
                One Of Hinduism's Seven Sacred Cities, Mathura Is The Birthplace
                Of The Very Beloved Lord Krishna. Located In The State Of Uttar
                Pradesh, Mathura And Vrindavan Are Often Considered Twin Cities
                . Mathura Is A Small Town Dotted With Temples From Various Ages
                And Attracts A Horde Of Pilgrims From All Over The World.Shri
                Krishna Janmabhumi Is The Most Famous Tourist Attraction In
                Mathura, As This Place Is Believed To The Be The Exact Place
                Where Lord Krishna Was Born, And The Prison Where He Was Born Is
                Now On Display For Tourists To See. The Two Most Important
                Temples In Town Are The Dwarkadheesh Temple And The Gita Mandir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>Vrindavan</div>
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

export default Vrindavan