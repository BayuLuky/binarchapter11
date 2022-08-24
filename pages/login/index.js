import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Binar Challenge</title>
      </Head>

      {/* Start Login */}
      <div className="jumbotron jumbotron-fluid bg-image headergame" id="login">
        {/* <div className="container">
          <div className="" style={{ width: "32rem" }}>
            <h1>Login</h1>
            <form className="width:50%">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <a href="#" className="btn btn-warning">
                Submit
              </a>
            </form>
          </div>
        </div> */}
        <div className="mt-5">
          <h1>Login</h1>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <form>
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
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Login */}
    </>
  );
}
