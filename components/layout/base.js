import React from "react";
import Head from "next/head";

import NavBar from "./navbar";
import Footer from "./footer";
import Script from "next/script";

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Head>
          {/* <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}

          {/* Bootstrap CSS */}
          {/* <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
            crossOrigin="anonymous"
          /> */}

          {/* CSS */}
          {/* <link rel="stylesheet" href="css/main.css" /> */}
          {/* <link rel="stylesheet" href="css/style.css" /> */}

          {/* Font */}
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans&display=swap"
          /> */}

          <title>Binar Challenge</title>
        </Head>

        <NavBar />

        {/* <Example /> */}
        <main className="my-10 pb-8 ">{children}</main>

        <Footer />
        {/* <Script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
          crossOrigin="anonymous"
        ></Script> */}
      </React.Fragment>
    );
  }
}

export default BaseLayout;
