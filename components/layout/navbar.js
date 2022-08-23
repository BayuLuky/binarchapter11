import React, { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light w-100 navbargame">
        <div className="container mr-auto">
          <a className="navbar-brand mr-5 logo" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto navbar-center">
              <li className="nav-item">
                <a className="nav-link" href="#header">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#thegame">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sysreq">
                  System
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#topscores">
                  Top Score
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#newsletter">
                  Newsletter
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
