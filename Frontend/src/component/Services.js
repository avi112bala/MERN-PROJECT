import React from 'react'
import './Services.css'
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CampaignIcon from "@mui/icons-material/Campaign";
import PublicIcon from "@mui/icons-material/Public";
import SailingIcon from "@mui/icons-material/Sailing";
import HikingIcon from "@mui/icons-material/Hiking";

const Services = () => {
  
  return (
    <>
      {/* Titlr  */}
      <div className="sectionp">
        <h1 class="heading">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h1>

        {/* Card  */}
        <div className="container text-center">
          <div className="row row-package" style={{marginBottom:"3rem"}}>
            {/* 1st  */}

            <div className="col">
              <div
                className="card text-bg-white mt-3"
                style={{ width: "22rem", height: "17rem", border: "none" }}
              >
                <div className="card-header bg-white">
                  <AccountBalanceIcon
                    style={{ fontSize: "5rem", color: "orange" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Affordable Hotels</h5>
                  <p className="card-text">
                    We provide a Clean and comfortable rooms with Complimentary
                    breakfast, Free Wi-Fi, <br />
                    24-hours front-desk Services, On-site parking,Fitness center
                    and Business center
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd  */}
            <div className="col">
              {" "}
              <div
                className="card text-bg-white mt-3"
                style={{ width: "22rem", height: "17rem", border: "none" }}
              >
                <div className="card-header bg-white">
                  <RestaurantIcon
                    style={{ fontSize: "5rem", color: "orange" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Food And Drinks</h5>
                  <p className="card-text">
                    We provide you On-site restaurant , Room service , Buffet
                    breakfast , Bar and lounge , Specialty cuisine , Local and
                    seasonal ingredients and Food and drink events.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd  */}
            <div className="col">
              {" "}
              <div
                className="card text-bg-white mt-3"
                style={{ width: "22rem", height: "17rem", border: "none" }}
              >
                <div className="card-header bg-white">
                  <CampaignIcon style={{ fontSize: "5rem", color: "orange" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Safty Guide</h5>
                  <p className="card-text">
                    we provide you Secure access , Adequate lighting , 24-hour
                    security , Fire safety measures , First-aid kits , Safe
                    deposit boxes and Emergency contacts for any hazardous
                    satuation.
                  </p>
                </div>
              </div>
            </div>

            {/* 4th */}
            <div className="col mb-3">
              {" "}
              <div
                className="card text-bg-white mt-3"
                style={{ width: "22rem", height: "17rem", border: "none" }}
              >
                <div className="card-header bg-white">
                  <PublicIcon style={{ fontSize: "5rem", color: "orange" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Around The World</h5>
                  <p className="card-text">
                    we provide you expertise planning trips around the world ,
                    customizable itineraries, allowing travelers to tailor their
                    trips to their specific interests and preferences , Local
                    guides and 24/7 Customer service.
                  </p>
                </div>
              </div>
            </div>

            {/* 5th  */}
            <div className="col mb-3">
              {" "}
              <div
                className="card text-bg-white mt-3"
                style={{ width: "22rem", height: "18rem", border: "none" }}
              >
                <div className="card-header bg-white">
                  <SailingIcon style={{ fontSize: "5rem", color: "orange" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fastest Travel</h5>
                  <p className="card-text">
                    High-speed trains offer fast and comfortable travel option
                    with excellent services,including comfortable seating,
                    onboard dining options, and Wi-Fi and Business class flights
                    with more luxurious and comfortable travel experience.
                  </p>
                </div>
              </div>
            </div>
            {/* 6th  */}
            <div className="col mb-3">
              {" "}
              <div className="col">
                {" "}
                <div
                  className="card text-bg-white mt-3"
                  style={{ width: "22rem", height: "18rem", border: "none" }}
                >
                  <div className="card-header bg-white">
                    <HikingIcon style={{ fontSize: "5rem", color: "orange" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Adventures</h5>
                    <p className="card-text">
                      Rove India provide expert guides who are knowledgeable
                      about the destination and activities, and can offer
                      insights and tips to make the most of the adventure and also provide safty,variety of activities,sustainable tourism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services