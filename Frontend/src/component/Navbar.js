import React from 'react'
import './style.css'
import { Link, useNavigate} from 'react-router-dom';

const Navbar = () => {

  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  

  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }

    const style={
        color:"white",
        
        
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="title container-fluid">
          <h1>
            <span>R</span>OVE  <span>i</span>NDIA
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          {auth ? 
            <ul className="ullist navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to={"/"}
                  style={style}
                  className="link-hover nav-item nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/book"} style={style} className="nav-link">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/package"} style={style} className="nav-link">
                  Package
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/services"} style={style} className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/gallery"} style={style} className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/review"} style={style} className="nav-link">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} style={style} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  <button type="button" class="btn btn-info" onClick={logout}>
                    Logout({JSON.parse(auth).name})
                  </button>
                </Link>
              </li>
            </ul>
           : 
            <ul className="ullist navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/signin"} className="nav-link">
                  <button type="button" class="btn btn-info">
                    Signin
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  <button type="button" class="btn btn-info">
                    Signup
                  </button>
                </Link>
              </li>
            </ul>
          }
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}

export default Navbar