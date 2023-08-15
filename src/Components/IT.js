import React from "react";
import kid from './Images/kid.png'
export default function IT() {
  return (
    <>
      {/* <div className="container "style={{color:"black",backgroundColor:"white",textAlign:"center",margin:"30px",fontSize:64,fontFamily:"'Libre Baskerville', serif"}}>
     <h1>Project 1 - Daily News</h1>
     <h3>In this project you can read the latest news at your fingertips. The interface is divided into multiplse categories, eg: Entertainment, Sports, Health, Business etc. Due to the limitations of news API key the web application can not run but you can check the soucre code.</h3>

    </div> */}
      <h1
      className="my-3"
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "'Libre Baskerville', serif",
        }}
      >
        IT Projects
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-start">
            <img src={kid} alt="Wait" style={{ width: "90%" }} />
          </div>
          <div
            className="col-lg-5 rounded"
            style={{
              color: "black",
              fontFamily: "'Libre Baskerville', serif",
              marginTop: "50px",
            }}
          >
            <div
              className="rounded border border-dark my-2"
              style={{ background: "linear-gradient(#e09a4a,white,#e09a4a)" }}
            >
              <h1>Project 1 - Daily News</h1>
              <h6 className="border rounded border-#995202 my-2 mx-1">
                In this project you can read the latest news at your fingertips.
                The interface is divided into multiplse categories, eg:
                Entertainment, Sports, Health, Business etc. Due to the
                limitations of news API key the web application can not run but
                you can check the soucre code.
              </h6>
              <ul>
                <li>
                  <a
                    href="https://github.com/i-am-not-ashish/Daily-News"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code(GitHub)
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="rounded border border-dark my-2"
              style={{ background: "linear-gradient(#e09a4a,white,#e09a4a)" }}
            >
              <h1>Project 2 - Text-Utils</h1>
              <h6 className="border rounded border-#995202 my-2 mx-1">
                This application can make your day to day life easier. You can
                use it to convert your text into lower case or upper case. It is
                mostly used for counting the number of words and letters. You
                can get the time to read some paragraph from this. Multiple Dark
                Modes are given for your convinience. Here the webpage link and
                the source code link is given.
              </h6>
              <ul>
                <li>
                  <a
                    href="https://github.com/i-am-not-ashish/textUtils
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code(GitHub)
                  </a>
                </li>
                <li>
                  <a
                    href="https://i-am-not-ashish.github.io/textUtils/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Webpage
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
