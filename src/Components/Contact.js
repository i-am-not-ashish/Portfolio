import React from "react";

export default function Contact() {
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
        About Us
      </h1>
      <div
        className="container my-3"
        style={{
          color: "black",
          fontFamily: "'Libre Baskerville', serif",
          textAlign: "center",
        }}
      >
        <img
          src="/me.jpg"
          alt="me"
          style={{ width: "20%" ,marginBottom:"20px"}}
          className="rounded-circle"
        />
        <h3 className="border border-dark ">
          Hello everyone! I am Ashish Kumar, persuing my bachelors at National
          Institute of Technology, Agartala in Electronics and Instrumentation
          Engineering(2021-2025) branch.This is currently my 3rd year of the
          course. I like to learn and develop new things. Always ready to work
          on differnt project and skills.
        </h3>
      </div>
      <div
        className="container-fluid"
        style={{
          color: "black",
          fontFamily: "'Libre Baskerville', serif",
          textAlign: "center",
        }}
      >
        <div className="row ">
          <div
            className="col-lg-6 border border-danger rounded"
            style={{ marginTop: "50px" }}
          >
            <ul style={{ textAlign: "left" }}>
              <h2>Contact Us-</h2>
              <li>
                <img src="/phone.png" alt="phone" />
                +91 9058369230
              </li>
              <li>
                <img src="/gmail.png" alt="gmail" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashish563228@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  ashish563228@gmail.com
                </a>
              </li>
              <li>
                <img src="/gmail.png" alt="gmail" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=darklegend9912@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  darklegend9912@gmail.com
                </a>
              </li>
              <h2>Connect to Us-</h2>
              <li>
                <a
                  href="https://www.facebook.com/Darklegend532?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src="/fb.png" alt="fb" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/i_am_not_ashish?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src="/insta.png" alt="instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashish-kumar-65b12b233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src="/in.png" alt="in" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/iam_not_ashish?t=xgOI4ewjRbTmToLnOyEnhg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src="/x.png" alt="x" />X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/i-am-not-ashish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src="/git.png" alt="git" />
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="/social.png" alt="social" style={{ width: "75%" }} />
          </div>
        </div>
      </div>
    </>
  );
}
