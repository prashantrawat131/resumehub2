// import { useState } from "react";
import About from "./About";
import College from "./College";
import HighSchool from "./HighSchool";
import Links from "./Links";
import SecondarySchool from "./SecondarySchool";
import Skills from "./Skills";
import Work from "./Work";
function InputPanel() {

  return (
    <div className="container">
      <div className="row input-panel-div">
        <About />
        <Links />
        <HighSchool />
        <SecondarySchool />
        <College />
        <Work />
        <Skills />
      </div>
    </div>
  );
}

export default InputPanel;