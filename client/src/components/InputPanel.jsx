// import { useState } from "react";
import { useState } from "react";
import About from "./About";
import College from "./College";
import HighSchool from "./HighSchool";
import Links from "./Links";
import SecondarySchool from "./SecondarySchool";
import Skills from "./Skills";
import Work from "./Work";
function InputPanel() {

  const [visibleIndex,setVisibleIndex]=useState(0);

  function next(){
      if(visibleIndex<6){
        setVisibleIndex(visibleIndex+1);
      }
  }

  function previous(){
    if(visibleIndex>0){
      setVisibleIndex(visibleIndex-1);
    }
  }

  return (
    <div className="container">
      <div className="input-panel-div">
        <img src="arrow_button.svg" alt="next button" id="previousButton" className="motionButton" onClick={previous}/>
        <About hidden={visibleIndex!==0}/>
        <Links hidden={visibleIndex!==1}/>
        <HighSchool hidden={visibleIndex!==2}/>
        <SecondarySchool hidden={visibleIndex!==3}/>
        <College hidden={visibleIndex!==4}/>
        <Work hidden={visibleIndex!==5}/>
        <Skills hidden={visibleIndex!==6}/>
        <img src="arrow_button.svg" alt="previous button" id="nextButton" className="motionButton" onClick={next}/>
      </div>
    </div>
  );
}

export default InputPanel;