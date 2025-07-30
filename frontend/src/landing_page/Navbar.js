import React from "react";
import "../landing_page/stylesheet.css"
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  xx"
    >
      <div className="container  "id="k">
        <a className="navbar-brand fs-4 " href="#" id="k">
          <img
            src="media/img/navlogo.png"
            style={{ width: "50px", fontWeight:"400"}}
            alt="Logo"
          />
          &nbsp;   <b>Stoxie</b>
        </a>
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

        <div className="collapse navbar-collapse xyh" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item pe-2">
                <a className="nav-link active pe-2 fff" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item pe-2 fff">
                <a className="nav-link active" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item pe-2 fff">
                <a className="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item pe-2 fff">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item fff">
                <a className="nav-link active" href="#">
                  Signup
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
