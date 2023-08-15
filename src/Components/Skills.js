import React from "react";

export default function Skills() {
  return (
    <>
      <h1
      className="my-3"
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "'Libre Baskerville', serif",
        }}
      >
        Skills
      </h1>
      <div className="container-fluid" style={{ marginBottom: "60px" }}>
        <div className="row">
          <div
            className="col-lg-6 my-2 rounded"
            style={{
              color: "black",
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "42",
              background: "linear-gradient(#e09a4a,white,#e09a4a)",
            }}
          >
            <ul className="my-5">
              <h3>Technical Skills</h3>
              <li>Front-End Developement:- HTML,CSS</li>
              <li>Back-End:- Java Script, React.js</li>
              <li>Java</li>
              <li>C(basic)</li>
              <li>Python</li>
              <li>Image Processing</li>
              <li>Arduino Programming</li>
              <li>MATLAB</li>
              <li>Leadership Skills</li>
              <li>Communication Skills</li>
            </ul>
            <br></br>
            <ul>
              <h3>Languages</h3>
              <li>Fluent Hindi</li>
              <li>English</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="/skills.png" alt="skills" style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </>
  );
}
