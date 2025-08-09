import React from "react";
import { Link } from "react-router-dom";
import "../landing_page/stylesheet.css"
function Navbar() {
  return (
    <nav
      className="navbar navbarD_ navbar-expand-lg  xx background_"
    >
      <div className="container  "id="k">
        <Link className="navbar-brand fs-4 " to="/" id="k">
          <img
            src="media/img/logo2.png"
            style={{ width: "50px", fontWeight:"400" , marginBottom:"5px"}}
            alt="Logo"
          />
          &nbsp;   <b id="grediant-text" style={{fontSize:"26px"}}>Stoxie</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse xyh text-white" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item pe-2 fff">
                <Link className="nav-link active text-white pe-2 fff" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item pe-2 fff">
                <Link className="text-white nav-link active" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item pe-2 fff">
                <Link className="text-white nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item pe-2 fff">
                <Link className="text-white nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item fff">
                <Link className="text-white nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
