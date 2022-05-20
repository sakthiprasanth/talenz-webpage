import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-sec">
      <p>
        source our <strong>Active IT Job Seekers</strong>
      </p>
      <button className="btn2">
        {/* <Link to="Formvalid">Hire our Candidates</Link> */}
        <a href="https://forms.office.com/r/igZvivDwCC" target="_blank">
          Hire Our Candidates
        </a>
      </button>
    </div>
  );
};

export default Banner;
