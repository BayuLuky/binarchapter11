import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const Game = (props) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Rock Paper Scissor</title>
      </Head>
      <div className="container">
        <div className="row">
          <header>
            <div className="row">
              <div className="col-12">
                <div className="header">
                  <div className="button-header">
                    <Link href={"/"}>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={45}
                          height={45}
                          fill="#724C21"
                          className="bi bi-chevron-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            stroke="#724C21"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="logo-header">
                    <a href="#">
                      <div className="d-inline-block">
                        <img
                          src="./assets/logo.png"
                          width="50px"
                          height="50px"
                          className=""
                          alt="logo"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="title-header">
                    <h2>ROCK PAPER SCISSORS</h2>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="row">
          <div className="game-section">
            <div className="row">
              <div className="left-section">
                <h3 className="card-role">Player 1</h3>
                <div className="row contentImage">
                  <div className="col">
                    <div className="card card-player">
                      <img
                        src="./assets/batu.png"
                        id="rock"
                        name="rock"
                        alt="batu"
                        className="player"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-player">
                      <img
                        src="./assets/kertas.png"
                        id="paper"
                        name="paper"
                        alt="paper"
                        className="player"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-player">
                      <img
                        src="./assets/gunting.png"
                        id="scissors"
                        name="scissors"
                        alt="scissors"
                        className="player"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-section">
                <div className="row">
                  <div className="col title-status">
                    <h1>VS</h1>
                  </div>
                  <div className="col center-side-status hide-status">
                    <div className="card-status">
                      <h2 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-section">
                <h3 className="card-role">Com</h3>
                <div className="row">
                  <div className="col">
                    <div className="card card-comp">
                      <img src="./assets/batu.png" alt="rock" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-comp">
                      <img src="./assets/kertas.png" alt="paper" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-comp">
                      <img src="./assets/gunting.png" alt="scissors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="reset-section">
                  <img
                    id="btn_reset"
                    name="btn_reset"
                    src="./assets/refresh.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="js/rps.js"></Script>
    </React.Fragment>
  );
};

export default Game;
