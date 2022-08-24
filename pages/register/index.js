import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register Binar Challenge</title>
      </Head>

      {/* Start Register */}
      <div
        className="jumbotron jumbotron-fluid bg-image headergame"
        id="register"
      >
        <div className="mt-5">
          <h1>Sign Up</h1>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <form>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputEmail1"
                        style={{ color: "black" }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    {/* <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="fullname example"
                      />
                      <label htmlFor="floatingInput">Fullname</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="username example"
                      />
                      <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div> */}
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container"> */}
        {/* <div className="">
            <h1>Register</h1>
            <a href="#" className="btn btn-warning">
              Submit
            </a>
          </div> */}
        {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-8 offset-md-3 offset-sm-2 twittercards">
              <div className="card text-white bg-dark mb-4">
                <div className="card-header">
                  <img
                    src="assets/evan-lahti.jpg"
                    className="img-fluid float-left profilepic"
                    alt="Evan Lahti"
                  />
                  <h3>Evan Lahti</h3>
                  <h4>PC Gamer</h4>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid float-right twitterlogo"
                    alt="twitterlogo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    One of my gaming highlights of the year.
                  </h5>
                  <p className="card-text">October 18, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-6 offset-md-3 offset-sm-2 twittercards">
              <div className="card text-white bg-dark mb-4">
                <div className="card-header">
                  <img
                    src="assets/jada-griffin.jpg"
                    className="img-fluid float-left profilepic"
                    alt="Jada Griffin"
                  />
                  <h3>Jada Griffin</h3>
                  <h4>Nerdreactor</h4>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid float-right twitterlogo"
                    alt="twitterlogo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    The next big thing in the world of streaming and survival
                    games.
                  </h5>
                  <p className="card-text">July 10, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-7 offset-md-3 offset-sm-2 twittercards">
              <div className="card text-white bg-dark mb-1">
                <div className="card-header">
                  <img
                    src="assets/aaron-williams.jpg"
                    className="img-fluid float-left profilepic"
                    alt="Aaron Williams"
                  />
                  <h3>Aaron Williams</h3>
                  <h4>Uproxx</h4>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid float-right twitterlogo"
                    alt="twitterlogo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Snoop Dogg Playing The Wildly Entertaining SOS Is Ridiculous
                  </h5>
                  <p className="card-text">December 24, 2018</p>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      {/* End Register */}
    </>
  );
}
