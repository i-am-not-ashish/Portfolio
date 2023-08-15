import React from "react";
import im from './Images/im.png'
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-5 rounded"
          style={{
            color: "black",
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 64,
            background: "radial-gradient(#f5a716,#e8c584,white,white)",
            marginTop: "50px",
          }}
        >
          <p>
            Hello!!!!! I am Ashish Kumar, an Engineering Student and a Web
            Developer.
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <img src={im} alt="Wait" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}
// 3rd Year Undergradute at National Institute of Technology,Agartala from Electronics and Instrumentation Engineering Branch.In this porfolio you can know everything about me just on your fingertips
