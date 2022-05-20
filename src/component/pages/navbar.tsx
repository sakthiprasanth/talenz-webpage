import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../src/Images/logo.jpeg";
import "./navbar.css";

const navbar = () => {
  // const navigate=useNavigate();
  // const change=()=>{
  //   const path="/Formvalid"
  //   navigate(path);
  // }
  return (
    <div className="nav-section">
      <div className="navbar">
        <div className="container nav">
          <div className="img-sec">
            <img src={Images} alt="" />
          </div>
          <div>
            <button className="btn1">
              <Link to="/Formvalid"> Hire our Candidates</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
