import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar sticky-top navbar-expand-lg rounded border border-dark"
        style={{ background: "linear-gradient(to right,#ebd0b9,#f28d35)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand px-1 rounded border border-white" to="/">
            Porfolio-Ashish Kumar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item rounded-pill border border-white mx-1 my-1">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item rounded-pill border border-white mx-1 my-1">
                <Link className="nav-link" to="/Education">
                  Education
                </Link>
              </li>
              <li className="nav-item rounded-pill border border-white mx-1 my-1">
                <Link className="nav-link" to="/Skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item rounded-pill border border-white mx-1 my-1">
                <Link className="nav-link" to="/Core">
                  Core Projects
                </Link>
              </li>
              <li className="nav-item rounded-pill border border-white mx-1 my-1">
                <Link className="nav-link" to="/IT">
                  IT Projects
                </Link>
              </li>
              <li className="nav-item rounded-pill border border-white mx-1 my-1">
                <Link className="nav-link" to="/Contact">
                  Contact Me
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         
        </Link>
        <ul className="dropdown-menu">
         <li><Link className="dropdown-item" to="/">Action</Link></li>
         <li><Link className="dropdown-item" to="/">Another action</Link></li>
         <li><hr className="dropdown-divider" /></li>
         <li><Link className="dropdown-item" to="/">Something else here</Link></li>
        </ul>
       </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
       <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
