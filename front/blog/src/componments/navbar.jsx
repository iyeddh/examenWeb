import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ firstName, lastName,image, onSignOut }) => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="contenu">
          <div className="data">
            <img
              src={image}
            />
            <span className="nom">
              <span className="firsname">{firstName}</span>
              <span className="lastname">{lastName}</span>
            </span>
          </div>
          <div className="domaine">
            <a href="#" id="a1">
              Art
            </a>
            <a href="#" id="a2">
              Science
            </a>
            <a href="#" id="a3">
              Technology
            </a>
            <a href="#" id="a4">
              Cinema
            </a>
            <a href="#" id="a5">
              Design
            </a>
            <a href="#" id="a6">
              Food
            </a>
            <span class="glider"></span>
            <div className="state">
              <Link to="/Login">
                LOG IN
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </Link>
              <Link to="/Inscri">
                SIGN UP
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
