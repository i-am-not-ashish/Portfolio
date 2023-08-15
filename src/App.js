import "./App.css";
import Contact from "./Components/Contact";
import Core from "./Components/Core";
import Education from "./Components/Education";
import Home from "./Components/Home";
import IT from "./Components/IT";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  document.body.style.font = "Antic";
  document.body.style.color = "White";
  return (
    <>
      
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home/*" element={<Home/>} />
          <Route path="Education/*" element={<Education />} />
          <Route path="Skills/*" element={<Skills />} />
          <Route path="Core/*" element={<Core/>} />
          <Route path="IT/*" element={<IT/>} />
          <Route path="Contact/*" element={<Contact/>} />
          
        </Routes>
      </HashRouter>
      {/*    
   <Home/>
   <Education/>
   <IT/>
   <Core/>
   <Skills/>
   <Contact/> */}
    </>
  );
}

export default App;
