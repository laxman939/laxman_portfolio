import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import logo from "../../assets/developer.png";
import { Socialicons } from "../../components/socialicons";
import { Portfolio } from "../portfolio";
import { About } from "../about";
import { ContactUs } from "../contact";

export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            {/* <title> {meta.title}</title> */}
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center position-relative">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              // style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            >
              <img
                src={logo}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt=""
              />
              {/* <div
              style={{
                width: "100%",
                height: "0",
                paddingBottom: "75%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/SWoSkN6DxTszqIKEqv?noattr=true"
                width="100%"
                height="100%"
                className="position-absolute"
                frameBorder="0"
                allowFullScreen
                title="devGif"
              ></iframe>
            </div> */}
            </div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-start ms-4">
              <div className="align-self-center ">
                <div className="intro mx-auto pt-5">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <div className="portfolio-container">
                    <header className="header">
                      <h4>Welcome to My Portfolio</h4>
                    </header>
                  </div>

                  <p className="mb-1x pt-3">{introdata.description}</p>
                  <p className="mb-1x">{introdata.getConnect}</p>
                  <div className="intro_btn-action pb-5 pt-5">
                    <Link to="/portfolio" className="text_2">
                      <div id="button_p" className="ac_btn btn ">
                        Projects
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn mx-5">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="d-flex">
                  <Socialicons />
                </div>
              </div>
            </div>
          </div>
        </section>
      </HelmetProvider>
      <Portfolio />
      <About />
      <ContactUs />
    </>
  );
};
