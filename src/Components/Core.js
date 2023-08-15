import React from "react";

export default function Core() {
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
        Core Projects
      </h1>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-6 my-4 " style={{ textAlign: "center" }}>
            <div>
              <img src="/iot.png" alt="i1" style={{ width: "70%" }} />
            </div>
            <div>
              <img src="/iot2.png" alt="i2" style={{ width: "70%" }} />
            </div>
          </div>
          <div
            className="col-lg-5 rounded my-4"
            style={{
              color: "black",
              fontFamily: "'Libre Baskerville', serif",
            }}
          >
            <div
              className="rounded border border-dark my-4"
              style={{ background: "linear-gradient(#e09a4a,white,#e09a4a)" }}
            >
              <h1>Project 1 - Fire Alarm</h1>
              <h6 className="border rounded border-#995202 my-4 mx-1">
                This project is developed for rescuing people from the fire as
                soon as possible. This system sense the fire and fogg and make a
                noisy sound so that everyone can be alert as soon as
                possible.This is based on Arduino Uno R3. By clicking on given
                link you can view all the details related to project and demo
                video.
              </h6>
              <ul>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1U1lsp1PdtxPw_4UvBiOwJl07hDmlXlT4?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fire Alarm
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="rounded border border-dark my-4"
              style={{ background: "linear-gradient(#e09a4a,white,#e09a4a)" }}
            >
              <h1>Project 2 - Home Automation</h1>
              <h6 className="border rounded border-#995202 my-4 mx-1">
                This project is developed for making your day to day life
                easier. You can control your fan and buld using your
                smartphone,is not it interesting? You can control the intensity
                of light and the speed of fan while lying on bed or working in
                kitchen and from anywhere. This project is baesd on IoT and uses
                Arduino Programming as well as some back-end code for the
                application which is going to control it. Click on the link
                below to know the project much more.
              </h6>
              <ul>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1-xOvSBm7dAZRmqajrtmYABUXSKZu7x7u?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Home Automation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
