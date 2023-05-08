import React from 'react'
import up1 from '../images/up1.jpg'
import up2 from '../images/up2.jpg'
import up3 from '../images/up3.jpg'
import up4 from '../images/up4.jpg'
import up5 from '../images/up5.jpg'
import up6 from '../images/up6.jpg'
import { Link, useNavigate } from 'react-router-dom'


 const Uttarpradesh = () => {

    const navigate=useNavigate();

    function handlechange(){
        navigate("/package")
    }

    function handlechange1(){
      navigate("../Agra")
    }


    function handlechange2(){
      navigate("../Lucknow")
    }
  
    function handlechange3(){
      navigate("../Varanasi")
    }
    

    function handlechange4(){
      navigate("../Allahabad")
    }

    function handlechange5(){
      navigate("../Kanpur")
    }

    function handlechange6(){
      navigate("../Vrindavan")
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
        <span>U</span>
        <span>T</span>
        <span>T</span>
        <span>A</span>
        <span>R</span>
        <span class="space"></span>
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
                src={up1}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Agra
                </h5>

                <Link to={"/Agra"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange1}
                  >
                    Explore Agra
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
                src={up2}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Lucknow
                </h5>

                <Link to={"/lucknow"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange2}
                  >
                    Explore Lucknow
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
                src={up3}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Varanasi
                </h5>

                <Link to={"/varanasi"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange3}
                  >
                    Explore Varanasi
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
                src={up4}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Allahabad
                </h5>

                <Link to={"/allahabad"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange4}
                  >
                    Explore Allahabad
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
                src={up5}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Kanpur
                </h5>

                <Link to={"/kanpur"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange5}
                  >
                    Explore Kanpuar
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
                src={up6}
                className="card-img-top"
                alt="..."
                style={{ width: "24rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "3rem" }}>
                  Vrindavan
                </h5>

                <Link to={"/vrindavan"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ color: "white", fontWeight: "500 " }}
                    onClick={handlechange6}
                  >
                    Explore Vrindavan
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
          style={{ color: "white", fontWeight: "500 " ,marginBottom:"3rem"}}
          onClick={handlechange}
        >
          Back To Packages
        </button>
      </div>
    </>
  );
}

export default Uttarpradesh