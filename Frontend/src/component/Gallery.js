import React from 'react'
import './Services.css'
import g1 from './images/g-1.jpg'
import g2 from "./images/g-2.jpg";
import g3 from "./images/g-3.jpg";
import g4 from "./images/g-4.jpg";
import g5 from "./images/g-5.jpg";
import g6 from "./images/g-6.jpg";
import g7 from "./images/g-7.jpg";
import g8 from "./images/g-8.jpg";

 const Gallery = () => {
  return (
    <>
      <div className='sectionp'>
        <div>
          <h1 class="heading">
            <span>G</span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
            <span>R</span>
            <span>Y</span>
          </h1>
        </div>

        <div className="container text-center">
          <div className="row row-cols-4">
            <div className="col brand">
              <img
                src={g1}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g2}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g3}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g4}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g5}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g6}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g7}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
            <div className="col brand">
              <img
                src={g8}
                style={{ height: "15rem", width: "15rem" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery