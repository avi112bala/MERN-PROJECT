import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import tm1 from '../images/tm1.jpg'
import tm2 from "../images/tm2.jpg";
import tm3 from "../images/tm3.jpg";
import tm4 from "../images/tm4.jpg";
import tm5 from "../images/tm5.jpg";
import tm6 from "../images/tm6.jpg";

 const Tamilnadu = () => {

    const navigate=useNavigate();

    function handlechange(){
        navigate('/package')
    }


    function handlechange1(){
      navigate("/rameshwaram");
    }
    function handlechange2(){
      navigate('/chennai')
    }
    function handlechange3(){
      navigate('/kanyakumari')
    }
    function handlechange4(){
      navigate('/madhurai')
    }
    function handlechange5(){
      navigate('/kodaikanal')
    }
    function handlechange6(){
      navigate('/ooty')
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
        <span>A</span>
        <span>M</span>
        <span>I</span>
        <span>L</span>
        <span>N</span>
        <span>A</span>
        <span>D</span>
        <span>U</span>
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
                src={tm1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Rameshwaram
                </h5>

                <Link to={"/rameshwaram"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange1}
                  >
                    Explore Rameshwaram
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
                src={tm2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Chennai
                </h5>
                <Link to={"/chennai"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange2}
                  >
                    Explore Chennai
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
                src={tm3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Kanyakumari
                </h5>

                <Link to={"/kanyakumari"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange3}
                  >
                    Explore Kanyakumari
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
                src={tm4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Madurai
                </h5>

                <Link to={"/madhurai"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange4}
                  >
                    Explore Madhurai
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
                src={tm5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Kodaikanal
                </h5>
                <Link to={"/kodaikanal"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange5}
                  >
                    Explore Kodaikanal
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
                src={tm6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Ooty
                </h5>

                <Link to={"/ooty"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange6}
                  >
                    Explore Ooty
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

export default Tamilnadu