import React from "react";
import "./Form.css";

const Formvalid = () => {
  // function change(event: any) {
  //   // console.log("data changed");
  //   console.log(event.target.value);
  // }

  // function handle() {
  //   console.log();
  // }
  let cname, hrname, email, number;

  function handle(event: any) {
    event.preventDefault();
    cname = event.target.cname.value;
    hrname = event.target.hrname.value;
    email = event.target.email.value;
    number = event.target.number.value;

    console.log(cname, hrname, email, number);
  }

  return (
    <div>
      <div className="row" style={{ background: "#a1d9db" }}>
        <div className="col-2"></div>
        <div className="col-8">
          <div style={{ alignItems: "center" }}>
            <div className="f-header">
              <h2>Hire Our Traineees</h2>
              <p>
                Please provide your details, our HR will touch base with you.
              </p>
              <span>...</span>
            </div>
            <div className="f-content">
              <span>Required</span>
              <form onSubmit={handle}>
                <div className="form">
                  <div className="i-heading">
                    <span>1.Company Name</span>
                    <span>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Answer"
                      name="cname"
                    />
                  </div>
                </div>
                <div className="form">
                  <div className="i-heading">
                    <span>2.HR Name</span>
                    <span>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Answer"
                      name="hrname"
                    />
                  </div>
                </div>
                <div className="form">
                  <div className="i-heading">
                    <span>3.Email</span>
                    <span>*</span>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Your Answer"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form">
                  <div className="i-heading">
                    <span>4.Contact Number</span>
                    <span>*</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Enter Your Answer"
                      name="number"
                    />
                  </div>
                </div>
                <div>
                  <button style={{ marginTop: "20px" }}>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Formvalid;
