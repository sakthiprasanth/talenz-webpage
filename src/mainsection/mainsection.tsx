import React from "react";
import Navbar from "../component/pages/navbar";
import Banner from "../banner/Banner";
import Content from "../content-sec/Content";

const mainsection = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
};

export default mainsection;
