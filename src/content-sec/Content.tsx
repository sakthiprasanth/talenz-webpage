import React from "react";
import "./Content.css";
import data from "./data.json";
const content = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="content-sec-1">
        <p style={{ textAlign: "center" }}>Active IT Jobseekers</p>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-4" style={{ paddingTop: "30px" }}>
            <div
              style={{
                background: "white",
                height: "100%",
                padding: " 0 20px",
                // border: "2px solid black",
              }}
            >
              <div className="data">
                <div style={{ paddingTop: "10px" }}>
                  <div className="row">
                    <div className="col-3 img-sec-1">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="col-6">
                      <p>
                        <span style={{ color: "#5c2e91", fontSize: "20px" }}>
                          {item.Name}
                        </span>
                        <br />
                        {item.address} <br />
                        {item.place}
                      </p>
                    </div>
                    <div className="col-3">logo</div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="skills" style={{ paddingTop: "16px" }}>
                        <p className="heading">Primary Skills</p>
                        <p>{item.PrimarySkills}</p>
                      </div>
                      <div className="s-skills">
                        <p className="heading">secondary skills</p>
                        <p>{item.SecondarySkills}</p>
                      </div>
                      <div className="salery">
                        <p className="heading">Expected Salary</p>
                        <p>{item.salery}</p>
                      </div>
                    </div>
                    <div className="col-8">
                      <div>
                        <p>{item.last}</p>
                        <p>{item.work}</p>
                      </div>
                      <div className="education">
                        <div className="heading">Education</div>
                        <p>
                          {item.M} <br />
                          {item.B} <br />
                          {item.H} <br />
                          {item.S}
                        </p>
                      </div>
                      <div className="joining">
                        <div>
                          <p className="heading">Availability to join</p>
                          <p>{item.join}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default content;
