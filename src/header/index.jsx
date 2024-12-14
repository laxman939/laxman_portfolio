import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const lapTop = <FontAwesomeIcon icon={faLaptopCode} />;

const Headermain = () => {
  const [isActive, setIsActive] = useState("false");

  const handleToggle = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="web_menu d-flex gap-4 align-items-center">
            <Link
              className="navbar-brand nav_ac"
              to="/"
              style={{ paddingRight: "34px" }}
            >
              <span className="">{lapTop}</span> {logotext}
            </Link>
            <Link
              // onClick={handleToggle}
              to="/portfolio"
              className="web_menu_item"
            >
              Projects
            </Link>
            <Link to="/about" className="web_menu_item">
              About
            </Link>
            <Link to="/contact" className="web_menu_item">
              Contact
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper position-relative">
              <div className="menu__container p-3">
                <div className="removeModal position-absolute">
                  <button
                    className="menu__button  nav_ac"
                    onClick={handleToggle}
                  >
                    <VscClose />
                  </button>
                </div>
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      {" "}
                      Projects
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={socialprofils.github} target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
            <p className="copyright m-0">
              Copyright © 2023 Laxman Aavuladoddi. All Rights Reserved
            </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
