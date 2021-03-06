import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";
import { saveAs } from "file-saver";
import axios from "axios";

ReactDOM.render(
  <React.StrictMode>
    <App generatePDF={generatePDF}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


function generatePDF() {
  console.log("generatePDF strated");

  //about
  const about = {
    name: document.getElementById("nameField").value,
    phone: document.getElementById("contactField").value,
    address: document.getElementById("adField").value,
    email: document.getElementById("emailAdField").value
  };

  //links
  const links = {
    linkedInUrl: document.getElementById("ldField").value,
    twitterId: document.getElementById("twField").value
  };

  //high school
  const highSchool = {
    highSchoolName: document.getElementById("highSchoolName").value,
    highSchoolLocation: document.getElementById("highSchoolLocation").value,
    highSchoolPassingYear: document.getElementById("highSchoolPassYear").value
  }

  //secondary school
  const secondarySchool = {
    secondarySchoolName: document.getElementById("secondarySchoolName").value,
    secondarySchoolLocation: document.getElementById("secondarySchoolLocation").value,
    secondarySchoolPassingYear: document.getElementById("secondarySchoolPassYear").value
  };

  //college
  const college = {
    collegeName: document.getElementById("collegeName").value,
    collegeLocation: document.getElementById("collegeLocation").value,
    collegeDegreeName: document.getElementById("degreeName").value,
    graduationStartYear: document.getElementById("graduationStartYear").value,
    graduationEndYear: document.getElementById("graduationEndYear").value
  };

  //job
  const job = {
    jobTitle: document.getElementById("jobTitle").value,
    jobLocation: document.getElementById("jobLocation").value,
    companyName: document.getElementById("companyName").value,
    jobStartDate: document.getElementById("jobStartDate").value,
    jobEndDate: document.getElementById("jobEndDate").value
  };

  //skills
  const skills = document.getElementsByClassName("skill");
  const skillsList = [];

  for (var i = 0; i < skills.length; i++) {
    const skillName = skills[i].getElementsByClassName("skillName")[0].value;
    const radioButtons = skills[i].getElementsByClassName("skillRadioButton");
    let skillRating = "Begineer";


    for (var j = 0; j < radioButtons.length; j++) {
      if (radioButtons[j].checked) {
        if (j === 0) {
          skillRating = "Begineer";
        }
        else if (j === 1) {
          skillRating = "Intermediate";
        }
        else {
          skillRating = "Advance";
        }
      }
    }
    // radioButtons.forEach((radioButton) => {

    // });

    const skillElement = {
      skillName: skillName,
      skillRating: skillRating
    };

    skillsList.push(skillElement);
  }

  const details = {
    about: about,

    links: links,

    highSchool: highSchool,

    secondarySchool: secondarySchool,

    college: college,

    job: job,

    skills: skillsList
  };

  console.log(details);

  //create a post request to localhost:5000/generate-pdf
  //using ajax 
  //data:details
  //code here
  console.log("Button clicked");

  axios.post("http://localhost:4000/generate-pdf", details)
    .then((result) => {
     
    })
    .catch((err) => {
      console.log(err);
    });

    setTimeout(function(){
      console.log("Second part of code");
      axios.get('http://localhost:4000/download-pdf', { responseType: 'arraybuffer' })
        .then(res2 => {
          const blobData = new Blob([res2.data], { type: "application/pdf" });
          saveAs(blobData, "resume.pdf");
        });
    },6000);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
