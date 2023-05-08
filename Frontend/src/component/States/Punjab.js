import React from 'react'
import pb1 from '../images/pb1.jpg'
import pb2 from '../images/pb2.jpg'
import pb3 from '../images/pb3.jpg'
import pb4 from '../images/pb4.jpg'
import pb5 from '../images/pb5.jpg'
import pb6 from '../images/pb6.jpg'
import { Link,useNavigate } from 'react-router-dom'

export const Punjab = () => {
    const navigate=useNavigate();
    function handlechange(){
        navigate('/package')
    }

function handlechange1(){
  navigate('/amritsar')
}

function handlechange2(){
  navigate('/bhatinda')
}
function handlechange3(){
  navigate('/chandighar')
}
function handlechange4(){
  navigate('/jalandhar')
}
function handlechange5(){
  navigate('/ludhiana')
}
function handlechange6(){
  navigate('/patiala')
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
        <span>P</span>
        <span>U</span>
        <span>N</span>
        <span>J</span>
        <span>A</span>
        <spaN>B</spaN>
      </h2>

      {/* Title  */}
      <div className="container text-center">
        <div className="row row-package">
          <div className="col">
            <div
              className="card mb-3"
              style={{ width: "24rem", height: "25rem" }}
            >
              <img
                src={pb1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Amritsar
                </h5>

                <Link to={"/amritsar"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange1}
                  >
                    Explore Amritsar
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2nd  */}

          <div className="col">
            {" "}
            <div
              className="card mb-3"
              style={{ width: "24rem", height: "25rem" }}
            >
              <img
                src={pb2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Ludhiana
                </h5>

                <Link to={"/ludhiana"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange2}
                  >
                    Explore Ludhiana
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3rd  */}

          <div className="col">
            {" "}
            <div
              className="card mb-3"
              style={{ width: "24rem", height: "25rem" }}
            >
              <img
                src={pb3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Chandigarh
                </h5>

                <Link to={"/chandighar"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange3}
                  >
                    Explore Chandigarh
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 4th */}

          <div className="col">
            {" "}
            <div className="card" style={{ width: "24rem", height: "25rem" }}>
              <img
                src={pb4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Jalandhar
                </h5>

                <Link to={"/jalandhar"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange4}
                  >
                    Explore Jalandhar
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 5th */}

          <div className="col">
            {" "}
            <div className="card" style={{ width: "24rem", height: "25rem" }}>
              <img
                src={pb5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Patiala
                </h5>

                <Link to={"/patiala"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange5}
                  >
                    Explore Patiala
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 6th  */}

          <div className="col">
            {" "}
            <div className="card" style={{ width: "24rem", height: "25rem" }}>
              <img
                src={pb6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Bhatinda
                </h5>
                <Link to={"/bhatinda"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange6}
                  >
                    Explore Bhatinda
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-3 mb-3">
        <button
          type="button"
          class="btn btn-danger "
          style={{ color: "white", fontWeight: "500 ", marginBottom: "3rem" }}
          onClick={handlechange}
        >
          Back To Packages
        </button>
      </div>
    </>
  );
}
