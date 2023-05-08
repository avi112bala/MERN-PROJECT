import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import himachal1 from '../images/himachal1.webp'
import himachal2 from '../images/himachal2.webp'
import himachal3 from "../images/himachal3.webp";
import himachal4 from "../images/himachal4.webp";
import himachal5 from "../images/himachal5.webp";
import himachal6 from "../images/himachal6.jpg";

 const Himachal = () => {

    const navigate = useNavigate();

    function handlechange(){
        navigate('/package')
    }

    function handlechange1(){
      navigate('/kasol')
    }

    function handlechange2(){
      navigate('/shimla')
    }

    function handlechange3(){
      navigate('/kasauli')
    }
    function handlechange4(){
      navigate('/spitivally')
    }
    function handlechange5(){
      navigate('/manali')
    }
    function handlechange6(){
      navigate('/dalhousi')
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
      <h2 className="heading">
        <span>H</span>
        <span>I</span>
        <span>M</span>
        <span>A</span>
        <span>C</span>
        <span>H</span>
        <span>A</span>
        <span>L</span>
        <span className="space"></span>
        <span>P</span>
        <span>R</span>
        <span>A</span>
        <span>D</span>
        <span>E</span>
        <span>S</span>
        <span>H</span>
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
                src={himachal1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Kasol
                </h5>

                <Link to={"/kasol"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange1}
                  >
                    Explore Kasol
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
                src={himachal2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Shimla
                </h5>

                <Link to={"/shimla"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange2}
                  >
                    Explore Shimla
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
                src={himachal3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Kasauli
                </h5>

                <Link to={"/kasauli"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange3}
                  >
                    Explore Kasauli
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
                src={himachal4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Spiti Valley
                </h5>

                <Link to={"/spitivally"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange4}
                  >
                    Explore Spitivally
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
                src={himachal5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Manali
                </h5>

                <Link to={"/manali"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange5}
                  >
                    Explore Manali
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
                src={himachal6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Dalhousie
                </h5>

                <Link to={"/dalhousi"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange6}
                  >
                    Explore Dalhousi
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


export default Himachal