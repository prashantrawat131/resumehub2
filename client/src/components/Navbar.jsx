// import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top my-navbar">
                <div className="container-fluid">
                    <h1 className="text-center my-2 navbar-brand heading">Resume Hub</h1>
                    <div>
                        {/* <button className="generate-pdf-button" onClick={generatePDF}>Generate PDF</button> */}

                        {/* <FontAwesomeIcon icon={faCoffee} /> */}
                        <div onClick={generatePDF} className="clickable-item">
                            <img
                                id="download-pdf-button-id"
                                className="generate-pdf-button"
                                src="download_button.svg"
                                alt="Download button"
                            />
                            <label className="clickable-text"><b>PDF</b></label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


function generatePDF(pdf) {

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

    //open a new window to download pdf from localhost:3000/download-pdf
    window.open("localhost:5000/download-pdf");
    //code here
}


export default Navbar;