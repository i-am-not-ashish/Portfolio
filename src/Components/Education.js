import React from "react";
import busines2 from "./Images/busines2.png"
export default function Education() {
  return (
    <>
      <h1
      className="my-3"
        style={{
          color: "black",
          backgroundColor: "white",
          textAlign: "center",
          margin: "30px",
          fontFamily: "'Libre Baskerville', serif",
        }}
      >
        Academic Qualifications
      </h1>
      <div
        className="container text-center border border-primary rounded my-2 "
        style={{ color: "black", backgroundColor: "white" }}
      >
        <div
          className="row rounded border border-dark"
          style={{ background: "linear-gradient(#09aedb,#93e0f5,#09aedb)" }}
        >
          <div className="col border border-dark">Course</div>
          <div className="col border border-dark">School/Institute</div>
          <div className="col border border-dark">Board</div>
          <div className="col border border-dark">
            Percentage Marks Obtained/CGPA
          </div>
          <div className="col border border-dark">Passing Year</div>
        </div>
        <div
          className="row rounded border border-dark"
          style={{ background: "linear-gradient(#b6e5f2,white,#b6e5f2)" }}
        >
          <div className="col rounded border border-#06345c">
            Bachelor Of Technology
          </div>
          <div className="col rounded border border-#06345c">
            National Institute of Technology, Agartala, Tripura
          </div>
          <div className="col rounded border border-#06345c">-</div>
          <div className="col rounded border border-#06345c">
            <a
              href="https://drive.google.com/file/d/1J-s_MsMlapA2Tq7ZGTdu_3hyHkH0eb96/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              8.43
            </a>
          </div>
          <div className="col rounded border border-#06345c">2025</div>
        </div>
        <div
          className="row rounded border border-dark"
          style={{ background: "linear-gradient(#b6e5f2,white,#b6e5f2)" }}
        >
          <div className="col rounded border border-#06345c">Intermediate</div>
          <div className="col rounded border border-#06345c">
            Bal Vidya Mandir Inter College, Daurala(Meerut), Uttar Pradesh
          </div>
          <div className="col rounded border border-#06345c">U.P. Board</div>
          <div className="col rounded border border-#06345c">
            <a
              href="https://drive.google.com/file/d/1G6Sara5kFCt66Ul-AjNTfbp2J6wTeURx/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              72.6%
            </a>
          </div>
          <div className="col rounded border border-#06345c">2020</div>
        </div>
        <div
          className="row rounded border border-dark"
          style={{ background: "linear-gradient(#b6e5f2,white,#b6e5f2)" }}
        >
          <div className="col rounded border border-#06345c">High School</div>
          <div className="col rounded border border-#06345c">
            Bal Vidya Mandir Inter College, Daurala(Meerut), Uttar Pradesh
          </div>
          <div className="col rounded border border-#06345c">U.P. Board</div>
          <div className="col rounded border border-#06345c">
            <a
              href="https://drive.google.com/file/d/1G9hJtVs5e7HMPbLrTHSSQ6k0FnULRNBc/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              88.67%
            </a>
          </div>
          <div className="col rounded border border-#06345c">2018</div>
        </div>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginBottom: "60px" }}
      >
        <img src={busines2} alt="img" style={{ width: "50%" }} />
      </div>
    </>
  );
}
