import React from "react";
import { Link } from "react-router-dom";
import logoneem from "../assets/images/logoneem.png"
import Magneticbtn from "./Magneticbtn";
import Buttoncomp from "./Buttoncomp";

const NavBar = () => {
  return (
    // <div>
        <div className="nav rounded-lg">
            <div className="logo">
                <Link className="nav-link" to="/">
                  <img className="w-[100px] ml-8 p-4" src={logoneem} alt="" />
                </Link>
            </div>
            <div className="nav-links">
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  <Magneticbtn name="Home"/>
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/services">
                  <Magneticbtn name="Services"/>
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/about">
                  <Magneticbtn name="About"/>
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/contact">
                  <Magneticbtn name="Contact"/>
                </Link>
              </div>
            </div>
            <div className="mr-[50px]">
                <Link to="/contact">
                    <Buttoncomp btnname="appointment"/>
                </Link>
            </div>
        </div>
    // </div>
  );
};

export default NavBar;
