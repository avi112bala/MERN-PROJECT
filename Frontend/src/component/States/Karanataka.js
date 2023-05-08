import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import ka1 from '../images/ka1.jpg'
import ka2 from "../images/ka2.jpg";
import ka3 from "../images/ka3.jpg";
import ka4 from "../images/ka4.jpg";
import ka5 from "../images/ka5.jpg";
import ka6 from "../images/ka6.jpg";







const Karanataka = () => {

    const navigate=useNavigate();

    function handlechange(){
        navigate('/package')
    }

    function handlechange1(){
      navigate('/mysore')
    }

    function handlechange2(){
      navigate('/badmai')
    }

    function handlechange3(){
      navigate('/banglor')
    }

    function handlechange4(){
      navigate('/coorge')
    }

    function handlechange5(){
      navigate('/kabini')
    }

    function handlechange6(){
      navigate('/manglor')
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
        <span>R</span>
        <span>N</span>
        <span>A</span>
        <span>T</span>
        <span>A</span>
        <span>K</span>
        <span>A</span>
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
                src={ka1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Mysore
                </h5>

                <Link to={"/mysore"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange1}
                  >
                    Explore Mysore
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
                src={ka2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Badami
                </h5>

                <Link to={"/badami"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange2}
                  >
                    Explore Badami
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
                src={ka3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Bangalore
                </h5>
                <Link to={"/banglor"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange3}
                  >
                    Explore Bangalore
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
                src={ka4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Coorg
                </h5>

                <Link to={"/coorge"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange4}
                  >
                    Explore Coorg
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
                src={ka5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Kabini
                </h5>
                <Link to={"/kabini"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange5}
                  >
                    Explore Kabini
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
                src={ka6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Mangalore
                </h5>

                <Link to={"/manglor"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange6}
                  >
                    Explore Mangalore
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


export default Karanataka
