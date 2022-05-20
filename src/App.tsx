import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./component/pages/navbar";
import Formvalid from "./form-sec/Formvalid";
import Mainsection from "./mainsection/mainsection";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Formvalid" element={<Formvalid />}></Route>
          <Route path="/" element={<Mainsection />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
