/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"

const DetailGame = (props) => {
  return (
    <React.Fragment>
      <div>
        {/* Start Detail Game*/}
        <div
          className="jumbotron jumbotron-fluid bg-image headergame"
          id="header"
        >
          <div className="container mt-5">
            <h2>Detail Games</h2>
            <div className="row">
              <div className="col-sm-6 mt-4">
                <div className="card-header pt-4 bg-light"></div>
                <div className="card bg-light img-fluid w-100">
                  <img
                    src="../assets/rockpaperstrategy-1600.jpg"
                    alt="image slide"
                  />
                  <div className="card-body bg-light"></div>
                </div>
              </div>
              <div className="col-sm-6 mt-4">
                <div className="card bg-light p-4" style={{ width: "100%" }}>
                  <div className="card-header bg-secondary">
                    <h5 className="card-title pt-2">Card title</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-muted">Description</p>
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                  </div>
                  <Link href={"/game"}>
                    <a className="btn btn-warning font-weight-bold text-uppercase w-100">
                      Play Game
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Detail Game */}
      </div>
    </React.Fragment>
  )
}

export default DetailGame
